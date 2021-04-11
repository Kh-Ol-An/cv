<template>
    <div class='naming'>
        <h2 class='naming__title'>{{ title }}</h2>
        <p class='naming__text'>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: "Naming",
    props: ["title", "text"]
}
</script>

<style lang="scss">
@import "~@/styles/variables.scss";

.naming {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    width: 30%;
    height: 100%;
    padding: 50px 60px 50px 0;

    @media (max-width: 1023px) {
        align-items: flex-start;
        width: 100%;
        padding: 50px;
        background: $bg-color_3;
    }

    @media (max-width: 767px) {
        padding: 25px;
    }

    &__title {
        font-size: 1.125rem; // 18px
        font-weight: 700;
        color: $text-color_1;
        text-transform: uppercase;
    }

    &__text {
        color: $text-color_2;
        text-align: right;

        @media (max-width: 1365px) {
            width: 140px;
        }

        @media (max-width: 1023px) {
            width: 100%;
            text-align: left;
        }
    }
}

.hobbies .naming__text {
    @media (max-width: 1365px) {
        width: 130px;
    }

    @media (max-width: 1023px) {
        width: 100%;
    }
}
</style>