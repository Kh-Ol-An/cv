<template>
    <section class='hard-skills section'>
        <div class='container'>
            <Naming
                class="hard-skills__naming"
                :title="getContentLang.hardSkills"
                :text="getContentLang.hardSkillsText"
            />
            <div class='hard-skills__content section__content'>
                <ul class='section__content-quality'>
                    <li class='section__content-quality-item first' ref="js">
                        <p class='naming__title'>JavaScript</p>
                    </li>
                    <li class='section__content-quality-item second' ref="jq">
                        <p class='naming__title'>JQuery</p>
                    </li>
                    <li class='section__content-quality-item first' ref="vue">
                        <p class='naming__title'>Vue</p>
                    </li>
                    <li class='section__content-quality-item second' ref="react">
                        <p class='naming__title'>React</p>
                    </li>
                    <li class='section__content-quality-item first' ref="html">
                        <p class='naming__title'>HTML5</p>
                    </li>
                    <li class='section__content-quality-item second' ref="css">
                        <p class='naming__title'>CSS3 (Sass, SCSS, Less, Grid, Flexbox)</p>
                    </li>
                    <li class='section__content-quality-item first' ref="avd">
                        <p class='naming__title'>Adaptive Web Design</p>
                    </li>
                    <li class='section__content-quality-item second' ref="ajax">
                        <p class='naming__title'>AJAX</p>
                    </li>
                    <li class='section__content-quality-item first' ref="git">
                        <p class='naming__title'>Git</p>
                    </li>
                    <li class='section__content-quality-item second' ref="wg">
                        <p class='naming__title'>Webpack/Gulp</p>
                    </li>
                    <li class='section__content-quality-item first' ref="photoshop">
                        <p class='naming__title'>Photoshop</p>
                    </li>
                    <li class='section__content-quality-item second' ref="english">
                        <p class='naming__title'>{{ getContentLang.hardSkillsEnglish }}</p>
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
    name: "HardSkills",
    components: {Naming},
    data: () => ({
        observer: null,
    }),
    computed: {
        ...mapGetters(["getContentLang"]),
    },
    mounted() {
        this.observer = new IntersectionObserver(this.onEntry);

        this.observer.observe(this.$refs.js);
        this.observer.observe(this.$refs.jq);
        this.observer.observe(this.$refs.vue);
        this.observer.observe(this.$refs.react);
        this.observer.observe(this.$refs.html);
        this.observer.observe(this.$refs.css);
        this.observer.observe(this.$refs.avd);
        this.observer.observe(this.$refs.ajax);
        this.observer.observe(this.$refs.git);
        this.observer.observe(this.$refs.wg);
        this.observer.observe(this.$refs.photoshop);
        this.observer.observe(this.$refs.english);
    },
    methods: {
        onEntry(entries) {
            entries.forEach(el => {
                if (el.isIntersecting) {
                    el.target.classList.contains("first") && el.target.classList.add("active-first")
                    el.target.classList.contains("second") && el.target.classList.add("active-second")
                } else {
                    el.target.classList.remove("active-first")
                    el.target.classList.remove("active-second")
                }
            });
        }
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
                width: 0;
                height: 5px;
                background: $active-color;
            }

            &.active-first::after {
                width: 15%;
                transition: all 600ms ease-in-out;
            }

            &.active-second::after {
                width: 15%;
                transition: all 600ms 100ms ease-in-out;
            }
        }
    }
}

@import "~@/styles/media.scss";
</style>