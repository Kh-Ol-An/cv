<template>
    <Lang/>
    <Header/>
    <Summary/>
    <HardSkills/>
    <SoftSkills/>
    <Experience/>
    <Education/>
    <Portfolio/>
    <Hobbies/>
    <Footer/>
</template>

<script>
import Lang from '@/components/Lang.vue';
import Header from '@/components/Header.vue';
import Summary from '@/components/Summary.vue';
import HardSkills from '@/components/HardSkills.vue';
import SoftSkills from '@/components/SoftSkills.vue';
import Experience from '@/components/Experience.vue';
import Education from '@/components/Education.vue';
import Portfolio from '@/components/Portfolio.vue';
import Hobbies from '@/components/Hobbies.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'App',
    components: {
        Lang,
        Header,
        Summary,
        HardSkills,
        SoftSkills,
        Experience,
        Education,
        Portfolio,
        Hobbies,
        Footer,
    }
}
</script>

<style lang="scss">
@import "~@/styles/normalize.scss";
@import "~@/styles/reset.scss";
@import "~@/styles/fonts.scss";
@import "~@/styles/base.scss";
@import "~@/styles/section.scss";
@import "~@/styles/media.scss";
</style>
