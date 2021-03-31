<template>
    <section class='hard-skills section'>
        <div class='container'>
            <div class='hard-skills__naming section__naming'>
                <h2 class='section__title'>{{ getContentLang.hardSkills }}</h2>
                <p class='section__naming-text'>{{ getContentLang.hardSkillsText }}</p>
            </div>
            <div class='hard-skills__content section__content'>
                <ul class='section__content-quality'>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>60<small>%</small></span>
                        <p class='section__title'>JavaScript</p>
                        <div class='hard-skills__content-quality-item-bar java-script'></div>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>55<small>%</small></span>
                        <p class='section__title'>Vue</p>
                        <div class='hard-skills__content-quality-item-bar vue'></div>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>40<small>%</small></span>
                        <p class='section__title'>React</p>
                        <div class='hard-skills__content-quality-item-bar react'></div>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>60<small>%</small></span>
                        <p class='section__title'>JQuery</p>
                        <div class='hard-skills__content-quality-item-bar jquery'></div>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>85<small>%</small></span>
                        <p class='section__title'>HTML5</p>
                        <div class='hard-skills__content-quality-item-bar html'></div>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>85<small>%</small></span>
                        <p class='section__title'>CSS3 (Sass, SCSS, Less, Grid, Flexbox)</p>
                        <div class='hard-skills__content-quality-item-bar css'></div>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>75<small>%</small></span>
                        <p class='section__title'>Adaptive Web Design</p>
                        <div class='hard-skills__content-quality-item-bar awb'></div>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>60<small>%</small></span>
                        <p class='section__title'>AJAX</p>
                        <div class='hard-skills__content-quality-item-bar ajax'></div>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>30<small>%</small></span>
                        <p class='section__title'>Git</p>
                        <div class='hard-skills__content-quality-item-bar git'></div>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>20<small>%</small></span>
                        <p class='section__title'>Gulp</p>
                        <div class='hard-skills__content-quality-item-bar gulp'></div>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>10<small>%</small></span>
                        <p class='section__title'>Photoshop</p>
                        <div class='hard-skills__content-quality-item-bar photoshop'></div>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'>15<small>%</small></span>
                        <p class='section__title'>{{ getContentLang.hardSkillsEnglish }}</p>
                        <div class='hard-skills__content-quality-item-bar english'></div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "HardSkills",
    computed: {
        ...mapGetters(["getContentLang"]),
    }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.hard-skills {
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

        .section__content-quality-item-count {
            margin-right: 9px;
        }

        &-quality-item-bar {
            position: relative;
            width: 100%;
            height: 5px;
            margin-top: 0.5em;
            background: #404242;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                background: $active-color;
            }

            &.java-script::before {
                width: 60%;
            }

            &.vue::before {
                width: 55%;
            }

            &.react::before {
                width: 40%;
            }

            &.jquery::before {
                width: 60%;
            }

            &.html::before {
                width: 85%;
            }

            &.css::before {
                width: 85%;
            }

            &.awb::before {
                width: 75%;
            }

            &.ajax::before {
                width: 60%;
            }

            &.git::before {
                width: 30%;
            }

            &.gulp::before {
                width: 20%;
            }

            &.photoshop::before {
                width: 10%;
            }

            &.english::before {
                width: 15%;
            }
        }
    }
}

@import "~@/styles/media.scss";
</style>