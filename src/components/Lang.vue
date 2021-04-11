<template>
    <div>
        <div class="overlay" :class="{'active': isOpen}" @click="isOpen = false"></div>
        <div class="lang" :class="{'open': isOpen}">
            <ul class="lang__list">
                <li v-for="lang in languages" :key="lang" class="lang__list-item" :class="{'active': lang === currentLang}">
                    <label class="lang__list-item-label">
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
            <div class="lang__switch" @click="isOpen = !isOpen">
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
            languages: ["en", "ua", "ru"],
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

    @media (max-width: 2559px) {
        left: 30px;
    }

    @media (max-width: 1023px) {
        top: 25px;
        left: unset;
        right: 25px;
        transform: translateY(0);
        flex-flow: column;
        align-items: flex-end;
        width: 120px;
        height: 24px;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        left: -25px;
        width: 2px;
        height: 21px;
        background: #404242;

        @media (max-width: 1023px) {
            display: none;
        }
    }

    &::before {
        top: 40px;

        @media (max-width: 2559px) {
            top: 30px;
            left: -15px;
        }
    }

    &::after {
        top: 95px;

        @media (max-width: 2559px) {
            top: 77px;
            left: -15px;
        }
    }

    &.open {
    }

    &__list {
        @media (max-width: 1023px) {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            transition: all 300ms linear;
        }

        &-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 15px;

            @media (max-width: 1023px) {
                width: 40px;
                height: 34px;
                margin-top: 0;
            }

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
                transition: all 300ms linear;

                @media (max-width: 2559px) {
                    top: 12px;
                    left: -19px;
                }

                @media (max-width: 1023px) {
                    display: none;
                }
            }

            &.active::after {
                background: $active-color;
            }

            &-label {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }

            &-input {
                display: none;
            }

            .section__content-text {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                font-size: 1rem;
                line-height: 30px;
                cursor: pointer;
                transition: all 300ms linear;

                @media (max-width: 1023px) {
                    font-size: 14px;
                }

                &:hover {
                    color: $active-color;
                }
            }

            &.active .section__content-text {
                @media (max-width: 1023px) {
                    color: $active-color;
                }
            }
        }
    }

    &.open .lang__list {
        max-height: 34px;
        transition: all 300ms 300ms linear;
    }

    &__switch {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        display: none;
        width: 100%;
        height: 100%;
        transition: all 300ms linear;

        @media (max-width: 1023px) {
            display: block;
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
</style>