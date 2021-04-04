<template>
    <section class='summary section'>
        <div class='container'>
<!--            <div class='summary__naming section__naming'>-->
<!--                <h2 class='section__title'>{{ getContentLang.summary }}</h2>-->
<!--                <p class='section__naming-text'>{{ getContentLang.summaryText }}</p>-->
<!--            </div>-->
            <Naming
                class="summary__naming"
                :title="getContentLang.summary"
                :text="getContentLang.summaryText"
            />
            <div class='summary__content section__content'>
                <p class='section__content-text'>{{ getContentLang.summaryContent }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import {mapGetters} from "vuex";
import Naming from "@/components/Naming.vue";

export default {
    name: "Summary",
    components: {Naming},
    computed: {
        ...mapGetters(["getContentLang"]),
    }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.summary {
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
    }
}

@import "~@/styles/media.scss";
</style>