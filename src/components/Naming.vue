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

    &__title {
        font-size: 1.125rem; // 18px
        font-weight: 700;
        color: $text-color_1;
        text-transform: uppercase;
    }

    &__text {
        color: $text-color_2;
        text-align: right;
    }
}

@import "~@/styles/media.scss";
</style>