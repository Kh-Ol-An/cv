<template>
    <div>
        <div class="overlay" :class="{'active': isOpen}" @click="isOpen = false"></div>
        <div class="lang">
            <ul class="lang__list" :class="{'open': isOpen}">
                <li v-for="lang in langs" :key="lang" class="lang__list-item" :class="{'active': lang === currentLang}">
                    <label>
                        <input
                            class="lang__list-item-input"
                            type="radio"
                            :value="lang"
                            v-model="currentLang"
                            @change="handleChange"
                        />
                        <span class="section__content-text">{{ lang }}</span>
                    </label>
                </li>
            </ul>
            <div class="lang__switch" :class="{'open': isOpen}" @click="isOpen = !isOpen">
                <div class="lang__switch-line1"></div>
                <div class="lang__switch-line2"></div>
                <div class="lang__switch-line3"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "Lang",
    data() {
        return {
            currentLang: "",
            langs: ["en", "ua", "ru"],
            isOpen: false,
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
            this.isOpen = false
        },
    },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.lang {
    position: fixed;
    top: 50%;
    left: 50px;
    z-index: 10;
    transform: translateY(-50%);
    display: flex;
    align-items: center;

    &::before,
    &::after {
        content: '';
        position: absolute;
        left: -25px;
        width: 2px;
        height: 21px;
        background: #404242;
    }

    &::before {
        top: 40px;
    }

    &::after {
        top: 95px;
    }

    &__switch {
        position: relative;
        display: none;
        width: 40px;
        height: 40px;
        transition: width 0ms 600ms linear, height 300ms 0ms linear;

        &.open {
            width: 120px;
            height: 2px;
            transition: width 0ms 0ms linear, height 300ms 300ms linear;
        }

        &-line1,
        &-line2,
        &-line3 {
            position: absolute;
            right: 0;
            width: 40px;
            height: 2px;
            background: $active-color;
            transition: all 300ms 300ms linear;
        }

        &-line1 {
            bottom: 100%;
            transform: translateY(100%);
        }

        &-line2 {
            bottom: 50%;
            transform: translateY(50%);
        }

        &-line3 {
            bottom: 0;
        }

        &.open .lang__switch-line1 {
            bottom: 0;
            right: 100%;
            transform: translate(100%, 0);
            transition: all 300ms linear;
        }

        &.open .lang__switch-line2 {
            bottom: 0;
            right: 50%;
            transform: translate(50%, 0);
            transition: all 300ms linear;
        }

        &.open .lang__switch-line3 {
            transition: all 300ms linear;
        }
    }

    &__list {
        transition: all 300ms linear;

        &.open {
            max-height: 40px;
            transition: all 300ms 300ms linear;
        }

        &-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 15px;

            &:first-child {
                margin-top: 0;
            }

            &::after {
                content: '';
                position: absolute;
                top: 18px;
                left: -29px;
                width: 10px;
                height: 10px;
                background: #a4a5a6;
                border-radius: 50%;
                transition: all 300ms ease-in-out;
            }

            &.active::after {
                background: $active-color;
            }


            &-input {
                display: none;
            }

            .section__content-text {
                font-size: 1rem;
                line-height: 30px;
                cursor: pointer;
                transition: all 300ms ease-in-out;

                &:hover {
                    color: $active-color;
                }
            }
        }
    }
}

@import "~@/styles/media.scss";
</style>