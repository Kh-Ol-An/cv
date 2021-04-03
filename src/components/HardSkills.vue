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
                        <p class='section__title'>JavaScript</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <p class='section__title'>JQuery</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <p class='section__title'>Vue</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <p class='section__title'>React</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <p class='section__title'>HTML5</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <p class='section__title'>CSS3 (Sass, SCSS, Less, Grid, Flexbox)</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <p class='section__title'>Adaptive Web Design</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <p class='section__title'>AJAX</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <p class='section__title'>Git</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <p class='section__title'>Webpack/Gulp</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <p class='section__title'>Photoshop</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <p class='section__title'>{{ getContentLang.hardSkillsEnglish }}</p>
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

        .section__content-quality-item {
            position: relative;
            padding-bottom: 12px;

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 15%;
                height: 5px;
                background: $active-color;
            }
        }
    }
}

@import "~@/styles/media.scss";
</style>