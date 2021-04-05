<template>
    <section class='hobbies section'>
        <div class='container'>
            <Naming
                class="hobbies__naming"
                :title="getContentLang.hobbies"
                :text="getContentLang.hobbiesText"
            />
            <div class='hobbies__content section__content'>
                <ul class='section__content-quality'>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'></span>
                        <p class='naming__title'>{{ getContentLang.hobbiesMeditations }}</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'></span>
                        <p class='naming__title'>{{ getContentLang.hobbiesBooks }}</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'></span>
                        <p class='naming__title'>{{ getContentLang.hobbiesCycling }}</p>
                    </li>
                    <li class='section__content-quality-item'>
                        <span class='section__content-quality-item-count'></span>
                        <p class='naming__title'>{{ getContentLang.hobbiesSnowboarding }}</p>
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
    name: "Hobbies",
    components: {Naming},
    computed: {
        ...mapGetters(["getContentLang"]),
    }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.hobbies {
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