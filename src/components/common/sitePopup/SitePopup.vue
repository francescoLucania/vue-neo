<template>
    <div>
        <magnific-popup-modal ref="modal"
                              v-for="modal in modals"
                              :key="modal.id"
                              v-bind="modal.modalAttrs"
                              v-on="modal.modalListeners"
                              @closed="remove(modal.id)"
        >
            <component
                    :is="modal.component"
                    v-bind="modal.componentAttrs"
            />
        </magnific-popup-modal>
    </div>

</template>

<script>
    const PREFIX = '_dynamic_modal_';
    import MagnificPopupModal from './mfp/Mfp.vue';

    export default {
        name: "SitePopup",
        data: function() {
            return {
                index: 1,
                modals: []
            }
        },
        created () {
            this.$root._dynamicContainer = this
        },
        components: {
            MagnificPopupModal,
        },
        methods: {
            add (component, componentAttrs = {}, modalAttrs = {}, modalListeners) {
                const id   = this.generateId();
                const name = modalAttrs.name || (PREFIX + id);
                let params = Object.assign({}, modalAttrs);

                params.name = name;

                this.modals.push({
                    id,
                    modalAttrs: params,
                    modalListeners,
                    component,
                    componentAttrs
                });

                this.$nextTick(() => {
                    this.$popup.show(name);
                })
            },
            remove (id) {
                for (let i in this.modals) {
                    if (this.modals[i].id === id) {
                        this.modals.splice(i, 1);
                        return
                    }
                }
            },
            generateId: function() {
                return (this.index++).toString();
            }
        }
    }
</script>