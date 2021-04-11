<template>
    <section class='education section'>
        <div class='container'>
            <Naming
                class="education__naming"
                :title="getContentLang.education"
                :text="getContentLang.educationText"
            />
            <div class='education__content section__content'>
                <ul class='section__content-places'>
                    <li class='section__content-places-item'>
                        <div class='section__content-places-item-place'>
                            <p class='section__content-time'>2019.05 - 2019.09</p>
                            <h3 class='naming__title'>GoIT UP Scale Academy</h3>
                            <p class='section__content-status'>{{ getContentLang.profession }}</p>
                            <p class='section__content-location'>{{ getContentLang.experienceKiev }}</p>
                        </div>
                        <div class='section__content-places-item-description'>
                            <ul class='section__content-places-item-description-list'>
                                <li class='section__content-text'><i>{{ getContentLang.educationGoIT1 }}</i></li>
                                <li class='section__content-text'><i>{{ getContentLang.educationGoIT2 }}</i></li>
                                <li class='section__content-text'><i>{{ getContentLang.educationGoIT3 }}</i></li>
                            </ul>
                        </div>
                    </li>
                    <li class='section__content-places-item'>
                        <div class='section__content-places-item-place'>
                            <p class='section__content-time'>2006.09 - 2011.06</p>
                            <h3 class='naming__title'>{{ getContentLang.educationInstitute }}</h3>
                            <p class='section__content-status'>{{ getContentLang.educationSpecialist }}</p>
                            <p class='section__content-location'>{{ getContentLang.educationPoltava }}</p>
                        </div>
                        <div class='section__content-places-item-description'>
                            <ul class='section__content-places-item-description-list'>
                                <li class='section__content-text'><i>{{ getContentLang.educationInstitute1 }}</i></li>
                                <li class='section__content-text'><i>{{ getContentLang.educationInstitute2 }}</i></li>
                                <li class='section__content-text'><i>{{ getContentLang.educationInstitute3 }}</i></li>
                            </ul>
                        </div>
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
    name: "Education",
    components: {Naming},
    computed: {
        ...mapGetters(["getContentLang"]),
    }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.education {
    &::before {
        background: $bg-color_3;
    }

    &::after {
        background: $bg-color_2;
    }

    &__naming {
        background: $bg-color_3;
    }

    &__content {
        padding-top: 0;
        background: $bg-color_2;

        @media (max-width: 1023px) {
            padding-top: 0;
        }

        @media (max-width: 767px) {
            padding-top: 0;
        }

        .section__content-places {
            position: relative;
            padding-top: 50px;

            @media (max-width: 767px) {
                padding-top: 25px;
            }

            &::before {
                content: '';
                position: absolute;
                left: -9px;
                bottom: 0;
                width: 16px;
                height: 2px;
                background: #404242;
            }

            &-item::before {
                box-shadow: 0 0 0 10px $bg-color_2;

                @media (max-width: 767px) {
                    box-shadow: 0 0 0 10px $bg-color_1;
                }
            }
        }
    }
}
</style>