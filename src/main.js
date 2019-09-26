import Vue from 'vue'
import App from './App.vue'
import Modernizr from 'modernizr'; // eslint-disable-line no-unused-vars
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import svg4everybody from 'svg4everybody/dist/svg4everybody.legacy.js';

import globalPlugins from './components/common/global/global.js';
import siteHeader from './components/common/siteHeader/SiteHeader';
import siteFooter from './components/common/siteFooter/SiteFooter';
import sitePopup from './components/common/sitePopup/site-popup';

// global popups
import TestPopup from './components/common/popups/test/TestPopup';
import SubscribePopup from './components/common/popups/subscribePopup/SubscribePopup';


// utilities
import getScrollbarWidth from './utilities/getScrollbarWidth/getScrollbarWidth.js';

const mq = [
  ['sm', 634],
  ['sx', 635],
  ['md', 913],
  ['lg', 1196],
  ['xl', 1440]
];


export const eventEmitter = new Vue();


// global
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(globalPlugins);



// base components
Vue.component('appSiteHeader', siteHeader);
Vue.component('appSiteFooter', siteFooter);
Vue.use(sitePopup, {dynamic: true, injectModalsContainer: true});

 window.neo = new Vue({
  store,
  render: h => h(App),
  router,
  data () {
    return {
      rightMenuState: '',
    }
  },
  components: {
    TestPopup
  },
  mounted: function () {
    this.initSvg4everybody();
    this.cssWebpLoadSwitch();
    this.initTouchDeterminant();
    this.initFixedTooltips();

    this.openTestPopup('Cdz');

    let waitingModernizer = setInterval(() => {
      if (Modernizr) {
        this.cssWebpLoadSwitch();
        clearInterval(waitingModernizer);
      }

    }, 300);

  },
  methods: {
    // styles methods
    initSvg4everybody: function () {
      svg4everybody();
    },
    initTouchDeterminant: function () {
      function is_touch_device() {
        return (('ontouchstart' in window)
            || (navigator.MaxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0));
      }

      if (!is_touch_device()) {
        document.querySelector('html').classList.add('mod_no-touchevents');
      } else {
        document.querySelector('html').classList.add('mod_touchevents');
      }
    },
    cssWebpLoadSwitch: function () {
      document.addEventListener('DOMContentLoaded', function () {

        const body = document.getElementsByTagName('body')[0];

        Modernizr.on('webp', function(result) {
          if (result) {
            body.classList.remove('mod_no-webp');
            body.classList.add('mod_webp');
          } else {
            body.classList.remove('mod_webp');
            body.classList.add('mod_no-webp');
          }
        });

      });
    },
    // fixed-tooltip global
    initFixedTooltips: function () {

        let html = document.querySelector('html');
        let body = document.querySelector('body');

        let popupBlock = document.body.querySelector('.js-popup-tooltip-block');
        let popupBlockLink = document.body.querySelectorAll('.js-popup-block-button');
        let container = document.querySelector('.container');

        function clickPopupButton(thisActiveLink) {

          event.preventDefault();

          if (!thisActiveLink.classList.contains('is-active')) {

            popupBlockLink.forEach(function(element) {
              element.classList.remove('is-active');
            });

            thisActiveLink.classList.add('is-active');

            let slot = popupBlock.querySelector('.popup-tooltip-block__slot');

            if (!thisActiveLink.closest('.js-popup-tooltip-block'))  {

              // original slot
              if (thisActiveLink.dataset.slotId) {

                let uniqueSlot = document.querySelector(thisActiveLink.dataset.slotId + ' .js-popup-tooltip-unique-slot-content');

                slot.innerHTML = '';
                slot.appendChild(uniqueSlot);

                if (uniqueSlot.dataset.position === 'sm-fixed' || uniqueSlot.dataset.position === 'sm-sx-fixed') {

                  popupBlock.dataset.position = uniqueSlot.dataset.position;

                  if (Modernizr.mq(mq.sm.str)) {
                    html.style.overflow = 'hidden';
                    body.style.overflow = 'hidden';
                    body.style.paddingRight = getScrollbarWidth();
                  }
                }

                // size option
                if (!uniqueSlot.dataset.size) {
                  popupBlock.dataset.size = 'small'
                } else {
                  popupBlock.dataset.size = uniqueSlot.dataset.size;
                }

              } else {

                let thisSlot = thisActiveLink.closest('.js-popup-block-button').nextElementSibling;

                slot.innerHTML = '';
                slot.innerHTML = thisSlot.innerHTML;

                if (thisSlot.dataset.position === 'sm-fixed' || thisSlot.dataset.position === 'sm-sx-fixed') {

                  popupBlock.dataset.position = thisSlot.dataset.position;

                  if (Modernizr.mq(mq.sm.str)) {
                    html.style.overflow = 'hidden';
                    body.style.overflow = 'hidden';
                    body.style.paddingRight = getScrollbarWidth();
                  }
                }

                // size option
                if (!thisSlot.dataset.size) {
                  popupBlock.dataset.size = 'small'
                } else {
                  popupBlock.dataset.size = thisSlot.dataset.size;
                }
              }

              // close button options
              if (thisActiveLink.dataset.closeButton) {
                popupBlock.dataset.closeButton = thisActiveLink.dataset.closeButton;
              } else {
                popupBlock.dataset.closeButton = '';
              }

              popupBlock.classList.add('is-open');

              if (thisActiveLink.closest('.js-popup-block-button').nextElementSibling) {

                if (thisActiveLink.closest('.js-popup-block-button').nextElementSibling.dataset.position === 'sm-fixed') {
                  if (Modernizr.mq(mq.sm.str)) {
                    html.style.overflow = 'hidden';
                    body.style.overflow = 'hidden';
                    body.style.paddingRight = getScrollbarWidth();
                  }
                }
              }

              offsetTooltipBlock(thisActiveLink);
            }

          } else {
            thisActiveLink.classList.remove('is-active');
            popupBlock.classList.remove('is-open');
          }
        }

        document.addEventListener('click', function (e) {

          if (!e.target.closest('.js-popup-block-close-link')) {

            if (e.target.closest('.js-popup-tooltip-block') || e.target.closest('.js-popup-block-button')) {

              if (e.target.closest('.js-popup-block-button')) {

                if (e.target.closest('.js-popup-tooltip-block')) {
                  closeAll();
                }

                clickPopupButton(e.target.closest('.js-popup-block-button'));
              }

            } else {
              closeAll();
            }
          } else {
            e.preventDefault();
            e.stopPropagation();
            closeAll();
          }
        });

        function closeAll() {
          if (popupBlock) {

            let activeButton = document.querySelector('.js-popup-block-button.is-active');

            if (activeButton) {
              if (activeButton.dataset.slotId) {

                let slotContent = popupBlock.querySelector('.popup-tooltip-block__slot' + ' .js-popup-tooltip-unique-slot-content');
                let uniqueSlot = document.querySelector(activeButton.dataset.slotId);
                uniqueSlot.appendChild(slotContent);
              }

              activeButton.classList.remove('is-active');
            }

            popupBlockLink.forEach(function (element) {
              element.classList.remove('is-active');
            });

            popupBlock.classList.remove('is-open');

            if (Modernizr.mq(mq.sm.str)) {
              html.style.overflow = '';
              body.style.overflow = '';
              body.style.paddingRight = '';

            }
          }
        }

        window.addEventListener('scroll', function () {
          if (popupBlock) {
            if (popupBlock.classList.contains('is-open')) {
              offsetTooltipBlock(false);
            }
          }
        });

        window.addEventListener('resize', function () {
          if (popupBlock && html.classList.contains('mod_no-touchevents')) {
            closeAll();
          }
        });

        function offsetTooltipBlock(activeLink) {

          if (!activeLink) {
            activeLink = document.body.querySelector('.js-popup-block-button.is-active');
          }

          let thisOffsetTop = activeLink.getBoundingClientRect().top + activeLink.offsetHeight + 'px';
          let containerPaddingLeft = parseInt(window.getComputedStyle(container, null).getPropertyValue('padding-left'));
          let thisOffsetLeft;

          let alignOffset = 0;

          if (activeLink.dataset.align === 'center') {
            alignOffset = popupBlock.offsetHeight / 4;
          }

          if (window.innerWidth < activeLink.getBoundingClientRect().left + popupBlock.offsetWidth + containerPaddingLeft / 2) {
            thisOffsetLeft = activeLink.getBoundingClientRect().left +  (window.innerWidth - (activeLink.getBoundingClientRect().left + popupBlock.offsetWidth) - containerPaddingLeft) - alignOffset + 'px';
          } else {
            thisOffsetLeft = activeLink.getBoundingClientRect().left - alignOffset + 'px';
          }

          if (!activeLink.closest('.js-popup-tooltip-block')) {
            popupBlock.style.cssText = `top: ${thisOffsetTop}; left: ${thisOffsetLeft}`;
          }
        }
    },

    // popups
    openTestPopup: function (title, event) {
      this.$openPopup(TestPopup, {title: title});

      if (event) {
        event.preventDefault();
      }

      return false;
    },
    openSubscribePopup: function (title, event) {
      this.$openPopup(SubscribePopup, {title: title});

      if (event) {
        event.preventDefault();
      }

      return false;
    },
  }

}).$mount('#app');
