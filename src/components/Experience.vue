<template>
    <section class='experience section'>
        <div class='container'>
<!--            <div class='experience__naming section__naming'>-->
<!--                <h2 class='section__title'>{{ getContentLang.experience }}</h2>-->
<!--                <p class='section__naming-text'>{{ getContentLang.experienceText }}</p>-->
<!--            </div>-->
            <Naming
                class="experience__naming"
                :title="getContentLang.experience"
                :text="getContentLang.experienceText"
            />
            <div class='experience__content section__content'>
                <ul class='section__content-places'>
                    <li class='section__content-places-item'>
                        <div class='section__content-places-item-place'>
                            <p class='section__content-time'>2020.04 - {{ getContentLang.experiencePresent }}</p>
                            <h3 class='section__title'>Smart Group</h3>
                            <p class='section__content-status'>{{ getContentLang.profession }}</p>
                            <p class='section__content-location'>{{ getContentLang.experienceKiev }}</p>
                        </div>
                        <div class='section__content-places-item-description'>
                            <p class='section__content-text'>{{ getContentLang.experienceTechnology }}
                                <i>{{ getContentLang.experienceTechnologySmartGroup }}</i>
                            </p>
                            <p class='section__content-text'>{{ getContentLang.experienceAbout }}
                                <i>{{ getContentLang.experienceAboutSmartGroup }}</i>
                            </p>
                            <h3 class='section__content-text'>{{ getContentLang.experienceResponsibilities }}</h3>
                            <ul class='section__content-places-item-description-list'>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesSmartGroup1 }}</i>
                                </li>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesSmartGroup2 }}</i>
                                </li>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesSmartGroup3 }}</i>
                                </li>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesSmartGroup4 }}</i>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class='section__content-places-item'>
                        <div class='section__content-places-item-place'>
                            <p class='section__content-time'>2019.10 - 2020.03</p>
                            <h3 class='section__title'>Profit Whales</h3>
                            <p class='section__content-status'>{{ getContentLang.experienceProfessionProfitWhales }}</p>
                            <p class='section__content-location'>{{ getContentLang.experienceKiev }}</p>
                        </div>
                        <div class='section__content-places-item-description'>
                            <p class='section__content-text'>{{ getContentLang.experienceTechnology }}
                                <i>{{ getContentLang.experienceTechnologyProfitWhales }}</i>
                            </p>
                            <p class='section__content-text'>{{ getContentLang.experienceAbout }}
                                <i>{{ getContentLang.experienceAboutProfitWhales }}</i>
                            </p>
                            <h3 class='section__content-text'>{{ getContentLang.experienceResponsibilities }}</h3>
                            <ul class='section__content-places-item-description-list'>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesProfitWhales1 }}</i>
                                </li>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesProfitWhales2 }}</i>
                                </li>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesProfitWhales3 }}</i>
                                </li>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesProfitWhales4 }}</i>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class='section__content-places-item'>
                        <div class='section__content-places-item-place'>
                            <p class='section__content-time'>2019.09 - 2019.10</p>
                            <h3 class='section__title'>Go IT</h3>
                            <p class='section__content-status'>{{ getContentLang.experienceProfessionGoIT }}</p>
                            <p class='section__content-location'>{{ getContentLang.experienceKiev }}</p>
                        </div>
                        <div class='section__content-places-item-description'>
                            <p class='section__content-text'>{{ getContentLang.experienceTechnology }}
                                <i>{{ getContentLang.experienceTechnologyGoIT }}</i>
                            </p>
                            <p class='section__content-text'>{{ getContentLang.experienceAbout }}
                                <i>{{ getContentLang.experienceAboutGoIT }}</i></p>
                            <h3 class='section__content-text'>{{ getContentLang.experienceResponsibilities }}</h3>
                            <ul class='section__content-places-item-description-list'>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesGoIT1 }}</i>
                                </li>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesGoIT2 }}</i>
                                </li>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesGoIT3 }}</i>
                                </li>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesGoIT4 }}</i>
                                </li>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesGoIT5 }}</i>
                                </li>
                                <li class='section__content-text'>
                                    <i>{{ getContentLang.experienceResponsibilitiesGoIT6 }}</i>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class='section__content-places-item'>
                        <p class='section__title'>{{ getContentLang.experienceSales }}</p>
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
    name: "Experience",
    components: {Naming},
    computed: {
        ...mapGetters(["getContentLang"]),
    }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.experience {
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
        padding-bottom: 0;
        background: $bg-color_1;

        .section__content-places {
            padding-bottom: 50px;

            &-item::before {
                box-shadow: 0 0 0 10px $bg-color_1;
            }
        }
    }
}

@import "~@/styles/media.scss";
</style>