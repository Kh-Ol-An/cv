<template>
    <section class='soft-skills section'>
        <div class='container'>
            <div class='soft-skills__naming section__naming'>
                <h2 class='section__title'>{{ getContentLang.softSkills }}</h2>
                <p class='section__naming-text'>{{ getContentLang.softSkillsText }}</p>
            </div>
            <div class='soft-skills__content section__content'>
                <ul class='section__content-quality'>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'></span>
                        <p class='section__title'>{{ getContentLang.softSkillsTeamPlayer }}</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'></span>
                        <p class='section__title'>{{ getContentLang.softSkillsResponsible }}</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'></span>
                        <p class='section__title'>{{ getContentLang.softSkillsScrupulous }}</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'></span>
                        <p class='section__title'>{{ getContentLang.softSkillsCommunicable }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "SoftSkills",
    computed: {
        ...mapGetters(["getContentLang"]),
    }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.soft-skills {
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
        background: $bg-color_2;

        .section__content-quality-item-count {
            width: 10px;
            height: 10px;
            background: $active-color;
            border-radius: 50%;
            margin-right: 20px;
            margin-left: -5px;
        }
    }
}

@import "~@/styles/media.scss";
</style>