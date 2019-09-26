<template>
    <section class="section" :class="classes">
        <div class="container">
                <div class="section__icon-box">
                    <div class="section__icon section__icon--subscribe">
                        <img src="img/icons/envelope.svg" alt="Subscribe icon">
                    </div>
                </div>
                <h3 class="section__subtitle">Не пропустите новые предложения <nobr>BMW 3 series</nobr></h3>
                <div class="section__description">Подпишитесь и получайте новые предложения<br>BMW 3 series на вашу почту</div>
                <div class="section-button-grid">
                    <a href="#" @click.prevent="openSubscribePopup(event)" class="button">Подписаться</a>
                </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SubscribeSection',
        data() {
          return {
              model_name: 'BMW 3 series'
          }
        },
        props: {
            msg: String,
            classes: String,
        },
        methods: {
            openSubscribePopup: function (event) {
                window.neo.openSubscribePopup(this.model_name, event);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
