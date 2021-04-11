<template>
    <section class='hard-skills section'>
        <div class='container'>
            <Naming
                class="hard-skills__naming"
                :title="getContentLang.hardSkills"
                :text="getContentLang.hardSkillsText"
            />
            <div class='hard-skills__content section__content'>
                <ul class='section__content-quality' ref="hardSkillsList">
                    <li class='section__content-quality-item first'>
                        <p class='naming__title'>JavaScript</p>
                    </li>
                    <li class='section__content-quality-item second'>
                        <p class='naming__title'>JQuery</p>
                    </li>
                    <li class='section__content-quality-item first'>
                        <p class='naming__title'>Vue</p>
                    </li>
                    <li class='section__content-quality-item second'>
                        <p class='naming__title'>React</p>
                    </li>
                    <li class='section__content-quality-item first'>
                        <p class='naming__title'>HTML5</p>
                    </li>
                    <li class='section__content-quality-item second'>
                        <p class='naming__title'>CSS3 (Sass, SCSS, Less, Grid, Flexbox)</p>
                    </li>
                    <li class='section__content-quality-item first'>
                        <p class='naming__title'>Adaptive Web Design</p>
                    </li>
                    <li class='section__content-quality-item second'>
                        <p class='naming__title'>AJAX</p>
                    </li>
                    <li class='section__content-quality-item first'>
                        <p class='naming__title'>Git</p>
                    </li>
                    <li class='section__content-quality-item second'>
                        <p class='naming__title'>Webpack/Gulp</p>
                    </li>
                    <li class='section__content-quality-item first'>
                        <p class='naming__title'>Photoshop</p>
                    </li>
                    <li class='section__content-quality-item second'>
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
    data() {
        return {
            observer: null,
            observerOptions: {
                threshold: 1.0
            },
        }
    },
    computed: {
        ...mapGetters(["getContentLang"]),
    },
    mounted() {
        if (window.innerWidth < 768) {
            this.observerOptions = {...this.observerOptions, rootMargin: "-24px"}
        } else {
            this.observerOptions = {...this.observerOptions, rootMargin: "-39px"}
        }
        this.observer = new IntersectionObserver(this.onEntry, this.observerOptions);
        this.$refs.hardSkillsList.childNodes.forEach(el => this.observer.observe(el))
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
            padding-bottom: 4px;

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 3px;
                background: $active-color;
                transition: all 600ms linear;
            }

            &.active-first::after {
                width: 15%;
                transition: all 600ms linear;
            }

            &.active-second::after {
                width: 15%;
                transition: all 600ms 200ms linear;

                @media (max-width: 1023px) {
                    transition: all 600ms linear;
                }
            }
        }
    }
}
</style>