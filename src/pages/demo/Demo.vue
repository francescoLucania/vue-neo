<template>
    <div>
        <app-site-header></app-site-header>
        <main>
            <div class="page-header">
                    <div class="container">
                        <div class="page-header__title">Autospot.ru</div>
                        <div class="page-header__naviagte-box">
                            <ul class="page-header__naviagate">
                                <li><a class="js-page-navigate" href="#rates">Тарифы и условия</a></li>
                                <li><a class="js-page-navigate" href="#calculate">Калькулятор</a></li>
                                <li><a class="js-page-navigate" href="#payment-method">Способы погашения</a></li>
                                <li><a class="js-page-navigate" href="#credit-question-answer">Вопрос-ответ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </main>
        <app-site-footer></app-site-footer>
    </div>
</template>

<script>
    export default {
        name: 'Demo',
        components: {
        }
    }
</script>

<style lang="scss" src="../../assets/styles/application.scss">

</style>