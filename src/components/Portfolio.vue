<template>
    <section class='portfolio section'>
        <div class='container'>
            <Naming
                class="portfolio__naming"
                :title="getContentLang.portfolio"
                :text="getContentLang.portfolioText"
            />
            <div class='portfolio__content section__content'>
                <ul class='portfolio__content-list' ref="portfolioList">
                    <li class='portfolio__content-list-item'>
                        <a href='https://wo.ua/' target='_blank' rel='noopener noreferrer'>
                            <img class='portfolio__content-list-item-img' src='@/assets/images/wo.jpg' alt='wo'>
                            <div class='portfolio__content-list-item-description'>
                                <h3 class='naming__title'>WO</h3>
                                <hr class='portfolio__content-list-item-description-line'>
                                <p class='section__content-text'>{{ getContentLang.portfolioWO }}</p>
                            </div>
                        </a>
                    </li>
                    <li class='portfolio__content-list-item'>
                        <a href='https://cecotec.tech/' target='_blank' rel='noopener noreferrer'>
                            <img class='portfolio__content-list-item-img' src='@/assets/images/cecotec.jpg'
                                 alt='cecotec'>
                            <div class='portfolio__content-list-item-description'>
                                <h3 class='naming__title'>Cecotec</h3>
                                <hr class='portfolio__content-list-item-description-line'>
                                <p class='section__content-text'>{{ getContentLang.portfolioCecotec }}</p>
                            </div>
                        </a>
                    </li>
                    <li class='portfolio__content-list-item'>
                        <a href='https://smartgroup.ua/' target='_blank' rel='noopener noreferrer'>
                            <img class='portfolio__content-list-item-img' src='@/assets/images/smart-group.jpg'
                                 alt='smart-group'>
                            <div class='portfolio__content-list-item-description'>
                                <h3 class='naming__title'>Smart Group</h3>
                                <hr class='portfolio__content-list-item-description-line'>
                                <p class='section__content-text'>{{ getContentLang.portfolioSmartGroup }}</p>
                            </div>
                        </a>
                    </li>
                    <li class='portfolio__content-list-item'>
                        <a href='https://yunmai.ua/' target='_blank' rel='noopener noreferrer'>
                            <img class='portfolio__content-list-item-img' src='@/assets/images/yunmai.jpg' alt='yunmai'>
                            <div class='portfolio__content-list-item-description'>
                                <h3 class='naming__title'>Yunmai</h3>
                                <hr class='portfolio__content-list-item-description-line'>
                                <p class='section__content-text'>{{ getContentLang.portfolioYunmai }}</p>
                            </div>
                        </a>
                    </li>
                    <li class='portfolio__content-list-item'>
                        <a href='https://deebot.ua/' target='_blank' rel='noopener noreferrer'>
                            <img class='portfolio__content-list-item-img' src='@/assets/images/deebot.jpg' alt='deebot'>
                            <div class='portfolio__content-list-item-description'>
                                <h3 class='naming__title'>Deebot</h3>
                                <hr class='portfolio__content-list-item-description-line'>
                                <p class='section__content-text'>{{ getContentLang.portfolioDeebot }}</p>
                            </div>
                        </a>
                    </li>
                    <li class='portfolio__content-list-item'>
                        <a href='https://ecovacsrobots.ru/' target='_blank' rel='noopener noreferrer'>
                            <img class='portfolio__content-list-item-img' src='@/assets/images/ecovacs.jpg'
                                 alt='ecovacs'>
                            <div class='portfolio__content-list-item-description'>
                                <h3 class='naming__title'>Ecovacs</h3>
                                <hr class='portfolio__content-list-item-description-line'>
                                <p class='section__content-text'>{{ getContentLang.portfolioEcovacs }}</p>
                            </div>
                        </a>
                    </li>
                    <li class='portfolio__content-list-item'>
                        <a href='https://profitwhales.com/' target='_blank' rel='noopener noreferrer'>
                            <img class='portfolio__content-list-item-img' src='@/assets/images/profit-whales.jpg'
                                 alt='profit-whales'>
                            <div class='portfolio__content-list-item-description'>
                                <h3 class='naming__title'>Profit Whales</h3>
                                <hr class='portfolio__content-list-item-description-line'>
                                <p class='section__content-text'>{{ getContentLang.portfolioProfitWhales }}</p>
                            </div>
                        </a>
                    </li>
                    <li class='portfolio__content-list-item'>
                        <a href='https://go-to-goal.goit.co.ua/' target='_blank' rel='noopener noreferrer'>
                            <img class='portfolio__content-list-item-img' src='@/assets/images/go-to-goal.jpg'
                                 alt='go-to-goal'>
                            <div class='portfolio__content-list-item-description'>
                                <h3 class='naming__title'>Go to Goal</h3>
                                <hr class='portfolio__content-list-item-description-line'>
                                <p class='section__content-text'>{{ getContentLang.portfolioGoToGoal }}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import {mapGetters} from "vuex";
import Naming from "@/components/Naming.vue";

export default {
    name: "Portfolio",
    components: {Naming},
    data() {
        return {
            observer: null,
            observerOptions: {
                rootMargin: '-24px',
                threshold: 1.0
            },
        }
    },
    computed: {
        ...mapGetters(["getContentLang"]),
    },
    mounted() {
        if (window.innerWidth < 1024) {
            this.observer = new IntersectionObserver(this.onEntry, this.observerOptions);
            this.$refs.portfolioList.childNodes.forEach(el => this.observer.observe(el))
        }
    },
    methods: {
        onEntry(entries) {
            entries.forEach(el => {
                el.isIntersecting ? el.target.classList.add("active") : el.target.classList.remove("active")
            });
        }
    },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.portfolio {
    &::before {
        background: $bg-color_2;
    }

    &::after {
        background: $bg-color_1;
    }

    &__naming {
        background: $bg-color_2;
    }

    &__content {
        background: $bg-color_1;

        &-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 25px;

            @media (max-width: 767px) {
                grid-template-columns: 1fr;
            }

            &-item {
                position: relative;

                &-img {
                    opacity: 0.6;
                    filter: grayscale(100%);
                    transition: all 600ms linear;
                }

                &-description {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    padding: 25px;
                    opacity: 0;
                    transition: all 600ms linear;

                    &-line {
                        width: 0;
                        height: 3px;
                        margin: 8px 0 10px;
                        background: $text-color_1;
                        outline: none;
                        border: none;
                        transition: all 600ms linear;
                    }

                    .section__content-text {
                        color: $text-color_1;
                    }
                }

                &:hover & {
                    &-img {
                        opacity: 0.2;
                        transform: scale(1.012);
                        filter: grayscale(0);
                    }

                    &-description {
                        opacity: 1;
                        transform: scale(1.012);

                        &-line {
                            width: 15%;
                            background: $active-color;
                        }
                    }
                }

                &.active & {
                    &-img {
                        @media (max-width: 1023px) {
                            opacity: 0.2;
                            transform: scale(1.012);
                            filter: grayscale(0);
                        }
                    }

                    &-description {
                        @media (max-width: 1023px) {
                            opacity: 1;
                            transform: scale(1.012);
                        }

                        &-line {
                            @media (max-width: 1023px) {
                                width: 15%;
                                background: $active-color;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>