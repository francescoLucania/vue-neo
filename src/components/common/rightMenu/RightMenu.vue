<template>
    <div class="right-menu-vue-container">
        <nav v-bind:class="[ isOpen ? openClass : closeClass]"
            class="right-menu-box js-right-menu-box"
            role="navigation"
        >
            <div class="right-menu">
                <div class="right-menu__body" id="right-menu__body">
                    <div class="right-menu__body-container" role="menubar">
                        <div class="right-menu__actions">
                            <button @click.prevent="closeMenu" class="right-menu-close js-close-right-menu">Закрыть меню
                                <svg class="icon" role="img">
                                    <use xlink:href="img/icons.svg#close"></use>
                                </svg>
                            </button><a class="right-menu__logo" href="https://autospot.ru/"><img src="img/logo.png" alt="autospot.ru"></a><span></span>
                        </div>
                        <div class="right-menu__site-item is-sx">
                            <ul>
                                <li><a href="#">Индекс цен</a></li>
                                <li><a href="#">Тест-драйв</a></li>
                                <li><a href="#">Блог</a></li>
                            </ul>
                        </div>
                        <div class="right-menu__site-item is-sx">
                            <ul>
                                <li><a href="#">Наши партнёры</a></li>
                                <li><a href="#">Сотрудничество</a></li>
                                <li><a href="#">Личный кабинет дилера</a></li>
                                <li><a href="#">О нас</a></li>
                                <li><a href="#">Карта сайта</a></li>
                                <li><a href="#">Подписки</a></li>
                            </ul>
                        </div>
                        <!-- mobile-->
                        <div class="right-menu__model-item-menu is-sm">
                            <div class="right-menu__title">Каталог марок</div>
                            <!--.right-menu__tab-container-->
                            <!--    ul.auto-filter(role='menu')-->
                            <!--        li.auto-filter__item-->
                            <!--            a.js-right-menu-model-open.dedicated(href='#' role='menuitem') Каталог марок-->
                            <!---->
                            <!--        li.auto-filter__item-->
                            <!--            a.js-right-menu-model-type-open(href='#' role='menuitem') Модели BMW-->
                            <div class="menu-model-navigation is-active" id="right-menu-model">
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Audi"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Audi"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="BMW"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="BMW"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Chery"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Chery"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Ford"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Ford"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Hyundai"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Hyundai"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Infiniti"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Infiniti"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Jaguar"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Jaguar"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Jeep"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Jeep"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Kia"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Kia"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Lada"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Lada"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Geely"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Geely"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Land Rover"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Land Rover"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Lexus"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Lexus"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Lifan"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Lifan"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Mazda"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Mazda"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="MINI"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="MINI"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Mitsubishi"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Mitsubishi"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Nissan"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Nissan"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Porsche"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Porsche"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Ravon"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Ravon"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Renault"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Renault"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Skoda"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Skoda"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Suzuki"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Suzuki"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Toyota"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Toyota"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="UAZ"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="UAZ"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item is-current" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Volkswagen"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Volkswagen"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Haval"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Haval"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Genesis"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Genesis"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Datsun"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Datsun"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Mercedes-Benz"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Mercedes-Benz"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#search-region">
                                    <div class="menu-model-navigation-item__logo" data-brand-name="Peugeot"></div>
                                    <div class="menu-model-navigation-item__information" data-brand-name="Peugeot"></div></a></div>
                            </div>
                            <div class="menu-model-navigation menu-model-navigation--model-type" id="right-menu-model-type">
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="1 серия"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="2 серия"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="3 серия"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="4 серия"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="5 серия"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="6 серия"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="GT"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="X1"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="X2"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="X3"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="X4"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="X5"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="X6"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="Base"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="🔥 M4"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="🔥 M5"></div></a></div>
                                <div class="menu-model-navigation__col"><a class="menu-model-navigation-item" href="#">
                                    <div class="menu-model-navigation-item__information" data-brand-name="🔥 M6"></div></a></div>
                            </div>
                        </div>
                        <div class="right-menu__bottom-item is-sm">
                            <div class="right-menu__site-infrmation-page-navigate">
                                <div class="right-menu__site-infrmation-page-navigate-col">
                                    <ul>
                                        <li><a href="#">Индекс цен</a></li>
                                        <li><a href="#">Тест-драйв</a></li>
                                        <li><a href="#">Блог</a></li>
                                    </ul>
                                </div>
                                <div class="right-menu__site-infrmation-page-navigate-col">
                                    <ul>
                                        <li><a href="#">Наши партнёры</a></li>
                                        <li><a href="#">Сотрудничество</a></li>
                                        <li><a href="#">Личный кабинет дилера</a></li>
                                        <li><a href="#">О нас</a></li>
                                        <li><a href="#">Карта сайта</a></li>
                                        <li><a href="#">Подписки</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- mobile-->
                        <div class="right-menu__bottom-item">
                            <ul class="contacts-link" data-link-hover-underline="" role="menu">
                                <li role="menuitem"><a href="#" data-phone="">
                                    <svg class="icon" role="img">
                                        <use xlink:href="img/icons.svg#phone"></use>
                                    </svg><span>+7 499 648-34-62</span></a></li>
                                <li role="menuitem"><a href="#" data-telegram="">
                                    <svg class="icon" role="img">
                                        <use xlink:href="img/icons.svg#telegram"></use>
                                    </svg><span>Telegram</span></a></li>
                                <li><span class="text-small">Ежедневно с 9:00 до 22:00</span></li>
                                <li class="tooltip-box">
                                    <button class="tooltip-link js-open-tooltip-link" href="#search-region">Любой регион</button>
                                    <div class="tooltip tooltip--region tooltip--region-position-top-left">
                                        <div class="tooltip-regions-body tooltip-regions-body--absolute-footer">
                                            <div class="tooltip-regions-body__header">Город<a class="tooltip-regions-body__back-link js-close-tooltip" href="#">
                                                <svg class="icon" role="img">
                                                    <use xlink:href="img/icons.svg#arrow-back"></use>
                                                </svg></a></div>
                                            <div class="tooltip-regions-body__content">
                                                <div class="tooltip-region-search">
                                                    <div class="input input--search" data-icon="search">
                                                        <input class="js-search-region-input js-input-car-search" type="search" placeholder="Название города">
                                                        <svg class="icon icon--20" role="img">
                                                            <use xlink:href="img/icons/inputs.svg#input-search"></use>
                                                        </svg>
                                                        <svg class="load-icon" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <circle fill="transparent" stroke-width="2" cx="12" cy="12" r="10" stroke="url(#gradientGr1)" style="stroke-dasharray: 100; stroke-dashoffset: 50;"></circle>
                                                            <linearGradient id="gradientGr1">
                                                                <stop offset="50%" stop-color="#02c5ab" stop-opacity="1"></stop>
                                                                <stop offset="65%" stop-color="#02c5ab" stop-opacity=".5"></stop>
                                                                <stop offset="100%" stop-color="#02c5ab" stop-opacity="0"></stop>
                                                            </linearGradient>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="tooltip-regions-body__actions-box js-region-container">
                                                    <div class="tooltip-region-search__items-box js-region-recommended-container"><a class="tooltip-region-search__recommender-item js-close-tooltip js-tooltip-region-recommended-search-item" href="#">Москва</a><a class="tooltip-region-search__recommender-item js-close-tooltip js-tooltip-region-recommended-search-item" href="#">Санкт-Петербург</a></div>
                                                    <div class="tooltip-region-search__items-box js-region-neighbor-container is-hide">
                                                        <div class="tooltip-region-search__item js-tooltip-region-neighbor-search-item">Москва<a class="js-tooltip-region-search-item-close" href="#">Убрать</a></div>
                                                        <div class="tooltip-region-search__item js-tooltip-region-neighbor-search-item">Санкт-Петербург<a class="js-tooltip-region-search-item-close" href="#">Убрать</a></div>
                                                    </div>
                                                    <div class="tooltip-region-search-slider">
                                                        <h5 class="tooltip-region-search-slider__title">Расширенный радиус поиска, км</h5>
                                                        <div class="tooltip-region-search-slider__dial js-tooltip-region-dial ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min" style="width: 50%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 50%;"></span></div>
                                                        <div class="tooltip-region-search-slider__dial-information"><span>0</span><span>100</span><span>200</span><span>300</span><span>400</span></div>
                                                    </div>
                                                </div>
                                                <ul class="regions-list-box regions-list-box--type-tooltip js-all-regions is-hide">
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Москва</h5>
                                                        <div class="regions-list-box__line-description">Москвовская облать</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Мурманск</h5>
                                                        <div class="regions-list-box__line-description">Мурманская область</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Томск</h5>
                                                        <div class="regions-list-box__line-description">Томская область</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Тула</h5>
                                                        <div class="regions-list-box__line-description">Тульская область</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Краснодар</h5>
                                                        <div class="regions-list-box__line-description">Краснодарский край</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Мурино</h5>
                                                        <div class="regions-list-box__line-description">Санкт-Петербург и Ленинградская область, Всеволожский район</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Муромцево</h5>
                                                        <div class="regions-list-box__line-description">Омская область, Муромцевский район</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Смоленск</h5>
                                                        <div class="regions-list-box__line-description">Смоленская область</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Чита</h5>
                                                        <div class="regions-list-box__line-description">Читинская область</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Махачкала</h5>
                                                        <div class="regions-list-box__line-description">Дагестан</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Краснодар</h5>
                                                        <div class="regions-list-box__line-description">Краснодарский край</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Пермь</h5>
                                                        <div class="regions-list-box__line-description">Пермская область</div></a></li>
                                                    <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                        <h5>Вязьма</h5>
                                                        <div class="regions-list-box__line-description">Смоленская область</div></a></li>
                                                </ul>
                                            </div>
                                            <div class="tooltip-regions-body__footer js-region-container"><a class="button button--block button--secondary js-close-tooltip" href="#" role="button">Сохранить</a></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="right-menu__bottom-item">
                            <ul class="social-networks" role="menu">
                                <li role="menuitem"><a href="#">Мы в фэйсбук
                                    <svg class="icon" role="img">
                                        <use xlink:href="img/icons.svg#facebook"></use>
                                    </svg></a></li>
                                <li role="menuitem"><a href="#">Мы в vk.com
                                    <svg class="icon" role="img">
                                        <use xlink:href="img/icons.svg#vkontakte"></use>
                                    </svg></a></li>
                                <li role="menuitem"><a href="#" role="menuitem">Мы в Инстаграм
                                    <svg class="icon" role="img">
                                        <use xlink:href="img/icons.svg#instagram"></use>
                                    </svg></a></li>
                                <li role="menuitem"><a href="#" data-youtube="">Мы в ютуб
                                    <svg class="icon" role="img">
                                        <use xlink:href="img/icons.svg#youtube"></use>
                                    </svg></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div @click.prevent="closeMenu" class="menu-shadow js-close-right-menu"></div>
    </div>
</template>

<script>
    import {eventEmitter} from '../../../main.js';

    export default {
        data () {
            return {
                isOpen: false,
                baseClass: '',
                openClass: 'is-open',
                closeClass: '',
            }
        },
        name: 'RightMenu',
        props: {
            state: String
        },
        created() {
            eventEmitter.$on('rightMenuOpen', () => {
                this.closeClass = 'is-open is-close';
                this.isOpen = true;
            });

            eventEmitter.$on('rightMenuClose', () => {
                this.isOpen = false;

                document.querySelector('.right-menu').addEventListener("animationend", () => {
                    if (!this.isOpen) {
                        this.closeClass = '';
                    }
                });
            });
        },
        mounted() {
            eventEmitter.$on('rightMenuOpen', () => {
                this.closeClass = 'is-open is-close';
                this.isOpen = true;
            });
        },
        methods: {
            closeMenu: function () {
                eventEmitter.$emit('rightMenuClose');
            }
        }
    }
</script>
