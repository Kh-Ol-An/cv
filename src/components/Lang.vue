<template>
    <div>
        <div class="overlay" :class="{'active': isOpen}" @click="isOpen = false"></div>
        <div class="lang" :class="{'open': isOpen}">
            <div class="lang__switch" :class="{'open': isOpen}" @click="isOpen = !isOpen">
                <div class="lang__switch-line"></div>
            </div>
            <ul class="lang__list">
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
            isOpen: false
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
    transition: all 300ms ease-in-out;

    &.open {
        right: 0;
    }

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
        display: none;
        padding: 0 20px;
        transition: all 300ms ease-in-out;

        &.open {
            padding: 0;
        }

        &-line {
            width: 3px;
            height: 120px;
            background: $active-color;
        }
    }

    &__list {
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
                box-shadow: 0 0 0 6px transparent;
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