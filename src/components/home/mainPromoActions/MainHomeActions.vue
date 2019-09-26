<template>
    <section class="main-promo-actions">
        <div class="home-long-grid">
            <div class="home-long-grid__content">
                <div class="main-promo-actions__container">
                    <form class="main-promo-actions__model-search">
                        <h2 class="main-promo-actions__title">14 501 новых авто<br>со скидкой до 1 649 000<span class="rub">Р.</span></h2>
                        <div class="main-promo-actions__model-search-grid">
                            <div class="input input--search" data-icon="search">
                                <input class="js-open-car-search-popup" type="search" placeholder="29 марок, 209 моделей">
                                <svg class="icon icon--20" role="img">
                                    <use xlink:href="img/icons/inputs.svg#input-search"></use>
                                </svg>
                            </div>
                            <button class="button js-open-car-search-popup">Найти</button>
                        </div>
                    </form>
                    <div class="main-promo-actions__car-search">
                        <p class="main-promo-actions__description">Не уверены с выбором?<br>Подберите подходящий авто по&nbsp;вашим&nbsp;параметрам.</p><a class="button button--secondary" href="#">Подобрать авто</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'MainPromoActions',
        components: {
        }
    }
</script>