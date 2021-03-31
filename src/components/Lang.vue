<template>
    <div class="lang" :class="currentLang">
        <label
            v-for="lang in langs"
            :key="lang"
            class="lang__label"
        >
            <input
                class="lang__label-input"
                type="radio"
                :value="lang"
                v-model="currentLang"
                @change="handleChange"
            />
            <span class="section__content-text">{{ lang }}</span>
            <!--            <span class="section__content-text lang__label-shadow">{{ lang }}</span>-->
        </label>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "Lang",
    data() {
        return {
            currentLang: "",
            langs: ["en", "ua", "ru"]
        };
    },
    mounted() {
        if (!localStorage.getItem("lang")) {
            localStorage.setItem("lang", "en");
            this.currentLang = "en";
        } else {
            this.currentLang = localStorage.getItem("lang")
        }
        this.updateContentLang(this.currentLang);
    },
    methods: {
        ...mapActions(["updateContentLang"]),
        handleChange() {
            this.updateContentLang(this.currentLang);
            localStorage.setItem("lang", this.currentLang);
        },
    },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.lang {
    position: fixed;
    top: 50%;
    right: 50px;
    z-index: 10;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    //padding-right: 25px;
    //border-right: 2px solid #404242;

    &::before {
        content: '';
        position: absolute;
        top: 15px;
        right: -25px;
        z-index: 1;
        //transform: translateY(-50%);
        width: 2px;
        height: 95px;
        background: #404242;
    }

    &::after {
        content: '';
        position: absolute;
        //top: 12px;
        right: -29.5px;
        z-index: 2;
        //transform: translateY(-50%);
        width: 10px;
        height: 10px;
        background: $active-color;
        box-shadow: 0 0 0 6px transparent;
        border-radius: 50%;
        transition: all 300ms ease-in-out;
    }

    &.en::after {
        top: 11px;
    }

    &.ua::after {
        top: 56px;
    }

    &.ru::after {
        top: 102px;
    }

    &__label {
        position: relative;
        margin-top: 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:first-child {
            margin-top: 0;
        }

        &-input {
            display: none;
        }

        .section__content-text {
            transition: all 300ms ease-in-out;

            &:hover {
                color: $active-color;
            }
        }
    }
}

@import "~@/styles/media.scss";
</style>