<template>
    <div>
        <app-site-header></app-site-header>
        <main>
            <div class="main-promo"><img src="img/hp-first-screen.svg" alt=""></div>
            <main-promo-action></main-promo-action>

            <section class="section">
                <div class="container">
                    <h2 class="section__title">Марки авто</h2>
                </div>
                <div class="home-long-grid">
                    <div class="home-long-grid__content">
                        <car-search></car-search>
                    </div>
                </div>
            </section>
            <SubscribeSection classes=""/>

        </main>
        <app-site-footer></app-site-footer>
    </div>
</template>

<script>
    import MainPromoAction from '../../components/home/mainPromoActions/MainHomeActions'
    import CarSearch from '../../components/common/carSearch/CarSearch'
    import SubscribeSection from '../../components/common/sections/subscribeSection/SubscribeSection'

    export default {
        name: 'Home',
        components: {
            MainPromoAction,
            CarSearch,
            SubscribeSection,
        }
    }
</script>

<style lang="scss" src="../../assets/styles/pages/home.scss">

</style>