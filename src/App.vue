<template>
    <Lang/>
    <Header/>
    <Summary/>
    <HardSkills/>
    <SoftSkills/>
</template>

<script>
import Lang from './components/Lang.vue';
import Header from './components/Header.vue';
import Summary from './components/Summary.vue';
import HardSkills from './components/HardSkills.vue';
import SoftSkills from './components/SoftSkills.vue';

export default {
    name: 'App',
    components: {
        Lang,
        Header,
        Summary,
        HardSkills,
        SoftSkills,
    }
}
</script>

<style lang="scss">
@import "~@/styles/normalize.scss";
@import "~@/styles/reset.scss";
@import "~@/styles/fonts.scss";
@import "~@/styles/base.scss";
@import "~@/styles/section.scss";
</style>
