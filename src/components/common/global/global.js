export default {
    install: function (Vue) {

        // 1. добавление глобального метода или свойства
        Vue.prototype.$openPopup = function (modalComponent, params) {
            params = params || {};

            this.$popup.show(modalComponent, params, {});
        };
    }
}
