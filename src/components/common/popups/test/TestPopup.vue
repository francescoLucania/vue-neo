<template>
    <div class="site-popup__container">
        <div class="site-popup__header site-popup__header--border-bottom">
            <h4 class="site-popup__title">{{ title }}</h4>
        </div>
        <div class="site-popup__content">
        </div>
    </div>
</template>

<script>

    export default {
        name: "TestPopup",
        data: function () {
            return {
                assetPath: null,
            }
        },
        props: {
            title: {
                default: 'Тестовый'
            }
        },
        components: {

        },
        created: function() {

        },
        methods: {

        },
    }
</script>