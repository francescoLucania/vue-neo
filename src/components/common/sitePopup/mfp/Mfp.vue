<template>
    <div class="site-popup-content mfp-hide" ref="modal">
        <div class="site-popup-content__inner">
            <div class="site-popup__close-button-box js-site-popup-close-button-block">
                <button class="close-button js-site-popup-close">
                    <svg class="icon" role="img">
                        <use xlink:href="/img/icons.svg#close"></use>
                    </svg>
                    Закрыть
                </button>
            </div>
            <slot ref="modal" @close="close($event)"></slot>
        </div>
    </div>
</template>

<script>
    import _ from 'underscore'
    import $ from 'jquery'
    import 'magnific-popup'

    let scrollPosition = 0;

    function scrollSize() {
        let css = {
            'width':   '200px',
            'height':  '200px',
            'margin':  '0',
            'padding': '0',
            'border':  'none'
        };

        let inner = $('<div>').css($.extend({}, css));
        let outer = $('<div>')
            .css($.extend({
                'position': 'absolute',
                'top':      '-1000px',
                'left':     '-1000px',
                'overflow': 'scroll'
            }, css))
            .append(inner)
            .appendTo('body')
            .scrollTop(1000)
            .scrollLeft(1000);

        let scrollSize = {
            'width': (outer.offset().left - inner.offset().left) || 0,
            'height': (outer.offset().top - inner.offset().top) || 0
        };

        outer.remove();

        return scrollSize;
    }

    let body = document.querySelector('body');

    function bodyPopupMobileMod() {
        body.style.position = 'fixed';
        body.style.top = '0';
        body.style.left = '0';
        body.style.overflow = 'hidden';
        body.style.width = '100%';
        body.style.height = '100%';
    }

    function bodyPopupMobileModClose() {
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.overflow = '';
        body.style.width = '';
        body.style.height = '';
    }

    export default {
        name: 'magnific-popup-modal',
        props: {
            show: {
                type: Boolean,
                default: true
            },
            config: {
                type: Object,
                default: function () {
                    return {
                        // magnific defaults
                        disableOn: null,
                        mainClass: 'site-popup',
                        focus: '',
                        closeOnContentClick: false,
                        closeOnBgClick: true,
                        showCloseBtn: false,
                        enableEscapeKey: true,
                        modal: false,
                        index: null,
                        fixedContentPos: 'auto',
                        overflowY: 'auto',
                        removalDelay: 0,
                        // closeMarkup: '',
                        // prependTo: document.body,
                        autoFocusLast: true
                    }
                }
            }
        },
        data () {
            return {
                assetPath: null,
                visible: this.show
            }
        },
        created() {
            // this.assetPath = this.$getJsData('V2AssetBaseUrl');
            this.assetPath = '';
        },
        mounted () {
            this[this.visible ? 'open' : 'close']();
        },
        methods: {
            /**
             * Opens the modal
             * @param {object} options Last chance to define options on this call to Magnific Popup's open() method
             */
            open: function (options) {
                if (!!$.magnificPopup.instance.isOpen && this.visible) {
                    return
                }

                let root = this;
                let config = _.extend(
                    this.config,
                    {
                        items: {
                            src: $(this.$refs.modal),
                            type: 'inline'
                        },
                        callbacks: {
                            open: function () {
                                root.visible = true;
                                root.$emit('open');
                            },
                            close: root.close
                        }
                    },
                    options || {});

                $.magnificPopup.open(config);

                if ($('html').hasClass('mod_touchevents')) {
                    scrollPosition = window.pageYOffset;
                    bodyPopupMobileMod();
                }

                if ($(window).height() < $(document).height()) {

                    $('.js-site-header').css({'padding-right': scrollSize().width + 'px'});
                    $('.model-slider').css('margin-right', -1 * scrollSize().width + 'px');
                }

                setInterval(function () {

                    if ($('.site-popup__container--steps:visible').outerHeight() > $(window).height()) {
                        $('.site-popup__container:visible').addClass('site-popup__container--fixed-footer');
                    } else {
                        $('.site-popup__container:visible').removeClass('site-popup__container--fixed-footer');
                    }

                    if (scrollSize().width > 0) {

                        $('.site-popup__navigate-footer').css('left', 'calc(50% - ' + scrollSize().width / 2 + 'px' + ')');
                    }

                    if ($('.site-popup').find('.js-site-popup-bank-header')) {

                        var colorType = $('.js-site-popup-bank-header').data('color-type');

                        $('.site-popup').attr('data-color-type', colorType);


                        $('.mfp-content').scroll(function() {
                            if(this.scrollTop > $('.js-site-popup-bank-header').outerHeight()) {
                                $('.js-site-popup-close-button-block').addClass('site-popup__close-button-box--color-base')
                            } else {
                                $('.js-site-popup-close-button-block').removeClass('site-popup__close-button-box--color-base')
                            }
                        });

                        $('.mfp-wrap').bind('mousewheel', function() {
                            if(this.scrollTop > $('.js-site-popup-bank-header').outerHeight()) {
                                $('.js-site-popup-close-button-block').addClass('site-popup__close-button-box--color-base')
                            } else {
                                $('.js-site-popup-close-button-block').removeClass('site-popup__close-button-box--color-base')
                            }
                        });
                    }

                    $('.site-popup').addClass('is-open');

                }, 400);
            },
            /**
             * Closes the modal
             */
            close: function () {

                if (!$.magnificPopup.instance.isOpen && !this.visible) {
                    return
                }
                this.visible = false;
                $.magnificPopup.close();
                // vm.setPopupStatus();

                if ($('html').hasClass('mod_touchevents')) {
                    window.scrollTo(0, scrollPosition);
                    bodyPopupMobileModClose()
                }

                $('html').removeClass('html-hidden');
                $('body').css('padding-right', '');
                $('.model-slider').css('margin-right', '');

                this.$nextTick(() => this.$emit('close'));

                if ($('html').hasClass('mod_touchevents')) {
                    window.scrollTo(0, scrollPosition);
                    bodyPopupMobileModClose();
                }
            },
            /**
             * Toggles modal open/closed
             */
            toggle: function () {
                this[this.visible ? 'close' : 'open']()
            },

        }
    }

    $(document).on('click', '.js-site-popup-close', function () {
        $.magnificPopup.close();
        return false
    });

</script>


<style lang="scss">
    .slick-slide {
        &.car-presentation__carousel-item {
            height: 550px;;
        }
    }

    .mfp-wrap {
        top: 0 !important;
    }

    .mfp-bg {
        background-color: rgba(0,0,0,.14);
    }

    .mfp-content {
        text-align: center !important;
    }
    $module: '.site-popup-content';
    #{$module} {
        position: relative;
        display: block;

        @media (max-width: 634px) {
            display: block;
            min-height: 100%;
        }

        &__inner {
            position: relative;
            display: block;
            margin: 0 auto;
            text-align: left;

            @media (max-width: 634px) {
                min-height: 100vh;
            }

            @media (max-width: 912px) {
                display: block;
                min-height: auto;
                width: 100%;
            }

            @media (min-width: 635px) {
                display: block;
                min-height: auto;
            }
        }
    }

    .site-popup-content {
        display: inline-block;

        @media (max-width: 912px) {
            display: block;
            width: 100%;
        }
    }

    .site-popup {
        &__container {
            @media (max-width: 634px) {
                min-height: 100vh !important;
            }
        }

        .mfp-container {
            padding: 0;
        }

        .mfp-content {
            @media (max-width: 634px) {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow-y: scroll;
            }
        }

        .mfp-wrap {
            top: 0 !important; // overrides mfp
            left: 0;
            width: 100%;
            height: 100% !important;
            z-index: 1043;
            position: fixed !important;
            outline: 0 !important;
            -webkit-backface-visibility: hidden;
        }

        &--sx-fullscreen {
            @media (min-width: 635px) {
                top: 0 !important;
                overflow-y: auto;

                // for safari scrolling
                -webkit-overflow-scrolling: touch;

                .mfp-wrap {
                    top: 0 !important;
                }
            }

            @media (min-width: 913px) {
                top: auto !important;
            }
        }
    }
</style>