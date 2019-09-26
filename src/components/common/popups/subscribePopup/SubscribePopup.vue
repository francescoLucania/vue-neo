<template>
    <div class="site-popup__container">
        <div class="site-popup__header site-popup__header--border-bottom">
            <div class="site-popup__icon-box">
                <div class="site-popup__icon section__icon--subscribe">
                    <img src="img/icons/envelope.svg" alt="Subscribe icon">
                </div>
            </div>
            <h4 class="site-popup__title">Новые предложение {{title}} <br>у вас в почте</h4>
        </div>
        <form class="site-popup__content">
            <div class="site-popup__content-row">
                <div class="input-box">
                    <label data-color="color-lighter">Модификация</label>
                    <div class="input">
                        <input type="text" placeholder="lololo">
                    </div>
                </div>
            </div>

            <div class="site-popup__content-row">
                <div class="input-box">
                    <label data-color="color-lighter">E-mail</label>
                    <div class="input">
                        <input type="email" placeholder="">
                    </div>
                </div>
            </div>

            <div class="site-popup__content-row">
                <label class="label-checkbox label-checkbox--inline label-checkbox--not-hover">
                    <span class="checkbox">
                        <input type="checkbox" class="checkbox__tag" checked>
                        <span class="checkbox__box"></span>
                    </span>
                    <span>Только со скидками</span>
                </label>
            </div>


            <div class="site-popup__content-row site-popup__content-row--load-box js-popup-load-box">
                <button class="button button--block js-send-mail" data-size-xl="">Подписаться</button>
                <svg class="load-icon" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="transparent" stroke-width="2" cx="12" cy="12" r="10" stroke="url(#gradientGr)" style="stroke-dasharray: 100; stroke-dashoffset: 50;"></circle>
                    <linearGradient id="gradientGr">
                        <stop offset="50%" stop-color="#02c5ab" stop-opacity="1"></stop>
                        <stop offset="65%" stop-color="#02c5ab" stop-opacity=".5"></stop>
                        <stop offset="100%" stop-color="#02c5ab" stop-opacity="0"></stop>
                    </linearGradient>
                </svg>
            </div>
            <div class="site-popup__warning-text">
                Нажимая  «Отправить», вы даете согласие на обработку
                <a href="/privacy-policy/" target="_blank">персональных данных</a>
            </div>
        </form>
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
                default: 'Новые предложение  у вас в почте'
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