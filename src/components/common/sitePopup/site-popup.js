import PopupContainer from './SitePopup.vue';

const Plugin = {
    install (Vue, options = {}) {
        /**
         * Makes sure that plugin can be installed only once
         */
        if (this.installed) {
            return
        }

        this.installed = true;
        this.event = new Vue();
        this.rootInstance = null;

        /**
         * Plugin API
         */
        Vue.prototype.$popup = {
            show (modal, paramsOrProps, params, events = {}) {
                if (typeof modal === 'string') {
                    Plugin.event.$emit('toggle', modal, true, paramsOrProps);
                    return
                }

                const root = params && params.root
                    ? params.root
                    : Plugin.rootInstance;

                const container = getModalsContainer(Vue, options, root);

                if (container) {
                    container.add(modal, paramsOrProps, params, events);
                    return
                }
            },
            hide (name, params) {
                Plugin.event.$emit('toggle', name, false, params)
            },

            toggle (name, params) {
                Plugin.event.$emit('toggle', name, undefined, params)
            }
        };


        /**
         * Registration of <popup-container/> component
         */
        if (options.dynamic) {
            Vue.component('popup-container', PopupContainer);
            Vue.mixin({
                beforeMount () {
                    if (Plugin.rootInstance === null) {
                        Plugin.rootInstance = this.$root
                    }
                }
            })
        }
    }
};

function getModalsContainer (Vue, options, root) {
    if (!root._dynamicContainer && options.injectModalsContainer) {
        const modalsContainer = document.createElement('div')
        document.body.appendChild(modalsContainer)

        new Vue({
            parent: root,
            render: h => h(PopupContainer)
        }).$mount(modalsContainer)
    }

    return root._dynamicContainer
}

export default Plugin
