<template>
    <header class='header section' ref="header">
        <div class='container'>
            <div class='header__naming naming'>
                <div class='header__naming-ava' ref="ava">
                    <img src='@/assets/images/ava.jpg' alt='ava'>
                </div>
            </div>
            <div class='header__content section__content'>
                <div class='header__content-presentation'>
                    <h1 class='header__content-presentation-title'>
                        <span class='header__content-presentation-title-name' ref="name">
                            {{ getContentLang.name }}
                        </span>
                        <span class='header__content-presentation-title-surname' ref="surname">
                            {{ getContentLang.surname }}
                        </span>
                    </h1>
                    <div class='header__content-presentation-bottom'>
                        <h2 class='header__content-presentation-bottom-profession' ref="profession">
                            {{ getContentLang.profession }}
                        </h2>
                        <ul class='header__content-presentation-bottom-list'>
                            <li class='header__content-presentation-bottom-list-item' ref="social1">
                                <a href='https://linkedin.com/in/kh-ol-an/' target='_blank' rel='noopener noreferrer'>
                                    <svg enable-background='new 0 0 512 512' height='512px' id='Layer_1' version='1.1'
                                         viewBox='0 0 512 512'
                                         width='512px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'>
                                          <g>
                                              <path d='M409.391,511.359V317.203c0,0-5.75-51.938-56-51.938c-50.219,0-59.406,49.375-59.406,49.375v196.719h-103.5l1.688-320.719
                                              h100.125l-0.813,40.313c0,0,20.876-52.688,99.531-52.688c78.625,0,114.25,45.188,120.875,129.688c0,84.531,0,203.406,0,203.406
                                              H409.391z M63.547,145.078c-35.563,0-64.438-25.438-64.438-56.875s28.875-56.938,64.438-56.938s64.438,25.5,64.438,56.938
                                              S99.109,145.078,63.547,145.078z M127.422,511.734H0.172V191.453l127.25-0.813V511.734z'/>
                                          </g>
                                    </svg>
                                </a>
                            </li>
                            <li class='header__content-presentation-bottom-list-item' ref="social2">
                                <a href='viber://chat?number=%2B380508899268'>
                                    <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title/>
                                        <path
                                            d='M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602
                                        1.17c.79.25 1.24-.499 1.99-1.299l1.4-1.58c3.85.32 6.8-.419 7.14-.529.78-.25 5.181-.811
                                        5.901-6.652.74-6.031-.36-9.831-2.34-11.551l-.01-.002c-.6-.55-3-2.3-8.37-2.32 0 0-.396-.025-1.038-.016zm.067 1.697c.545-.003.88.02.88.02 4.54.01
                                        6.711 1.38 7.221 1.84 1.67 1.429 2.528 4.856 1.9 9.892-.6 4.88-4.17 5.19-4.83 5.4-.28.09-2.88.73-6.152.52 0 0-2.439 2.941-3.199
                                        3.701-.12.13-.26.17-.35.15-.13-.03-.17-.19-.16-.41l.02-4.019c-4.771-1.32-4.491-6.302-4.441-8.902.06-2.6.55-4.732 2-6.172 1.957-1.77 5.475-2.01 7.11-2.02zm.36
                                        2.6a.299.299 0 0 0-.3.299.3.3 0 0 0 .3.3 5.631 5.631 0 0 1 4.03 1.59c1.09 1.06 1.621 2.48 1.641 4.34a.3.3 0 0 0 .3.3v-.009a.3.3 0 0 0 .3-.3 6.451 6.451 0 0
                                        0-1.81-4.76c-1.19-1.16-2.692-1.76-4.462-1.76zm-3.954.69a.955.955 0 0 0-.615.12h-.012c-.41.24-.788.54-1.148.94-.27.32-.421.639-.461.949a1.24 1.24 0 0 0
                                        .05.541l.02.01a13.722 13.722 0 0 0 1.2 2.6 15.383 15.383 0 0 0 2.32 3.171l.03.04.04.03.03.03.03.03a15.603 15.603 0 0 0 3.18 2.33c1.32.72 2.122 1.06 2.602
                                        1.2v.01c.14.04.268.06.398.06a1.84 1.84 0 0 0 1.102-.472c.39-.35.7-.738.93-1.148v-.01c.23-.43.15-.841-.18-1.121a13.632 13.632 0 0
                                        0-2.15-1.54c-.51-.28-1.03-.11-1.24.17l-.45.569c-.23.28-.65.24-.65.24l-.012.01c-3.12-.8-3.95-3.959-3.95-3.959s-.04-.43.25-.65l.56-.45c.27-.22.46-.74.17-1.25a13.522 13.522 0 0
                                        0-1.54-2.15.843.843 0 0 0-.504-.3zm4.473.89a.3.3 0 0 0 .002.6 3.78 3.78 0 0 1 2.65 1.15 3.5 3.5 0 0 1 .9 2.57.3.3 0 0 0 .3.299l.01.012a.3.3 0 0 0
                                        .3-.301c.03-1.19-.34-2.19-1.07-2.99-.73-.8-1.75-1.25-3.05-1.34a.3.3 0 0 0-.042 0zm.49 1.619a.305.305 0 0 0-.018.611c.99.05 1.47.55 1.53 1.58a.3.3 0 0 0
                                        .3.29h.01a.3.3 0 0 0 .29-.32c-.07-1.34-.8-2.091-2.1-2.161a.305.305 0 0 0-.012 0z'/>
                                    </svg>
                                </a>
                            </li>
                            <li class='header__content-presentation-bottom-list-item' ref="social3">
                                <a href='tg://resolve?domain=@kholan'>
                                    <svg height='512px' style='enable-background:new 0 0 512 512;' version='1.1'
                                         viewBox='0 0 512 512'
                                         width='512px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'>
                                          <g id='comp_x5F_335-telegram'>
                                              <g>
                                                  <path d='M484.689,98.231l-69.417,327.37c-5.237,23.105-18.895,28.854-38.304,17.972L271.2,365.631l-51.034,49.086
                                                      c-5.647,5.647-10.372,10.372-21.256,10.372l7.598-107.722L402.539,140.23c8.523-7.598-1.848-11.809-13.247-4.21L146.95,288.614
                                                      L42.619,255.96c-22.694-7.086-23.104-22.695,4.723-33.579L455.423,65.166C474.316,58.081,490.85,69.375,484.689,98.231z'/>
                                              </g>
                                          </g>
                                        <g id='Layer_1'/>
                                    </svg>
                                </a>
                            </li>
                            <li class='header__content-presentation-bottom-list-item' ref="social4">
                                <a href='https://github.com/Kh-Ol-An/' target='_blank' rel='noopener noreferrer'>
                                    <svg enable-background='new 0 0 30 30' height='30px' id='Github' version='1.1'
                                         viewBox='0 0 30 30'
                                         width='30px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'>
                                        <path clip-rule='evenodd'
                                              d='M19,30h-3.996h-4c0,0,0.011-2.372,0-4
                                            c-5.473,1.178-7-3-7-3c-1-2-2-3-2-3c-2-1.188,0-1,0-1c2,0,3,2,3,2c1.755,2.981,4.878,2.501,6,2c0-1,0.438-2.512,1-3
                                            C7.636,19.508,4,17,4,12s1.004-6,2.004-7C5.802,4.507,4.965,2.685,6.035,0C6.035,0,8,0,10,3c0.991-0.991,4-1,5.001-1
                                            C16,2,19.009,2.009,20,3c2-3,3.969-3,3.969-3c1.07,2.685,0.233,4.507,0.031,5c1,1,2,2,2,7s-3.632,7.508-8,8c0.562,0.488,1,2.21,1,3  V30z'
                                              fill='#141313' fill-rule='evenodd' id='Cat'/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class='header__content-contacts'>
                    <ul class='header__content-contacts-list' ref="line">
                        <li class='header__content-contacts-list-item' ref="content1">
                            <h4 class='header__content-contacts-list-item-title'>{{ getContentLang.phone }}</h4>
                            <a href='tel:+380508899268'
                               class='header__content-contacts-list-item-link'>+38 050 88 99 268</a>
                        </li>
                        <li class='header__content-contacts-list-item' ref="content2">
                            <h4 class='header__content-contacts-list-item-title'>Email</h4>
                            <a href='mailto:olegkhristenko@gmail.com' class='header__content-contacts-list-item-link'>olegkhristenko@gmail.com</a>
                        </li>
                        <li class='header__content-contacts-list-item' ref="content3">
                            <h4 class='header__content-contacts-list-item-title'>Skype</h4>
                            <a href='skype:hristenkoleg?chat'
                               class='header__content-contacts-list-item-link'>hristenkoleg</a>
                        </li>
                        <li class='header__content-contacts-list-item' ref="content4">
                            <h4 class='header__content-contacts-list-item-title'>{{ getContentLang.website }}</h4>
                            <a href='http://kholan.tech/'
                               class='header__content-contacts-list-item-link'>kholan.tech</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Header",
    data() {
        return {
            observer: null,
        }
    },
    computed: {
        ...mapGetters(["getContentLang"]),
    },
    mounted() {
        this.viewportHeightMobile();
        window.addEventListener("resize", this.viewportHeightMobile);

        this.observer = new IntersectionObserver(this.onEntry);

        this.observer.observe(this.$refs.ava);
        this.observer.observe(this.$refs.name);
        this.observer.observe(this.$refs.surname);
        this.observer.observe(this.$refs.profession);
        this.observer.observe(this.$refs.social1);
        this.observer.observe(this.$refs.social2);
        this.observer.observe(this.$refs.social3);
        this.observer.observe(this.$refs.social4);
        this.observer.observe(this.$refs.line);
        this.observer.observe(this.$refs.content1);
        this.observer.observe(this.$refs.content2);
        this.observer.observe(this.$refs.content3);
        this.observer.observe(this.$refs.content4);
    },
    methods: {
        viewportHeightMobile() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        },
        onEntry(entries) {
            entries.forEach(el => {
                el.isIntersecting ? el.target.classList.add("active") : el.target.classList.remove("active")
            });
        }
    },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.header {
    height: 100vh;
    background: $bg-color_1;

    &::before {
        background: $bg-color_2;
    }

    &::after {
        background: $bg-color_1;
    }

    .container {
        align-items: center;
    }

    &__naming {
        position: relative;
        z-index: 2;
        align-items: flex-end;
        justify-content: center;
        background: $bg-color_2;

        &-ava {
            width: 236px;
            height: 236px;
            border-radius: 50%;
            overflow: hidden;
            opacity: 0;
            transform: translateY(100px);

            &.active {
                opacity: 1;
                transform: translateY(0);
                transition: all 1200ms ease-in-out;
            }

            img {
                object-fit: cover;
                filter: grayscale(100%);
            }
        }
    }

    &__content {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        background: $bg-color_1;

        &-presentation {
            width: 100%;

            &-title {
                display: flex;
                flex-flow: column;

                &-name {
                    position: relative;
                    z-index: 1;
                    font-size: 68px;
                    line-height: 1;
                    font-weight: 300;
                    color: $text-color_1;
                    text-transform: lowercase;
                    opacity: 0;
                    transform: translateY(50px);

                    &.active {
                        opacity: 1;
                        transform: translateY(0);
                        transition: all 1200ms 300ms ease-in-out;
                    }
                }

                &-surname {
                    width: max-content;
                    font-size: 68px;
                    line-height: 1;
                    font-weight: 700;
                    color: $active-color;
                    text-transform: uppercase;
                    opacity: 0;
                    transform: translateY(50px);

                    &.active {
                        opacity: 1;
                        transform: translateY(0);
                        transition: all 1200ms 500ms ease-in-out;
                    }


                }
            }

            &-bottom {
                width: 100%;
                display: flex;
                align-items: flex-end;
                justify-content: space-between;

                &-profession {
                    font-size: 1.25rem;
                    color: $text-color_2;
                    font-weight: 300;
                    opacity: 0;
                    transform: translateY(50px);

                    &.active {
                        opacity: 1;
                        transform: translateY(0);
                        transition: all 1200ms 700ms ease-in-out;
                    }
                }

                &-list {
                    display: flex;
                    align-items: center;

                    &-item {
                        width: 2.375em;
                        height: 2.375em;
                        margin-left: 0.375em;
                        border-radius: 0.1875em;
                        background: #3f4040;

                        &:nth-child(1) {
                            margin-left: 0;
                            opacity: 0;
                            transform: translateY(50px);

                            &.active {
                                opacity: 1;
                                transform: translateY(0);
                                transition: all 1200ms 900ms ease-in-out;
                            }
                        }

                        &:nth-child(2) {
                            opacity: 0;
                            transform: translateY(50px);

                            &.active {
                                opacity: 1;
                                transform: translateY(0);
                                transition: all 1200ms 1100ms ease-in-out;
                            }
                        }

                        &:nth-child(3) {
                            opacity: 0;
                            transform: translateY(50px);

                            &.active {
                                opacity: 1;
                                transform: translateY(0);
                                transition: all 1200ms 1300ms ease-in-out;
                            }
                        }

                        &:nth-child(4) {
                            opacity: 0;
                            transform: translateY(50px);

                            &.active {
                                opacity: 1;
                                transform: translateY(0);
                                transition: all 1200ms 1500ms ease-in-out;
                            }
                        }

                        a {
                            padding: 0.5em;
                            display: block;
                            width: 100%;
                            height: 100%;
                        }

                        svg {
                            width: 100%;
                            height: 100%;
                            fill: #717273;
                            stroke: #717273;
                            transition: all 300ms ease-in-out;

                            path {
                                fill: #717273;
                                stroke: #717273;
                                transition: all 300ms ease-in-out;
                            }
                        }

                        &:hover svg,
                        &:hover path {
                            fill: $active-color;
                            stroke: $active-color;
                        }
                    }
                }
            }
        }

        &-contacts {
            position: absolute;
            left: 60px;
            bottom: 50px;
            width: calc(100% - 60px);

            &-list {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                padding-top: 20px;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #404242;
                }

                &.active::before {
                    width: 100%;
                    transition: all 1200ms 1800ms ease-in-out;
                }

                &-item {
                    &:nth-child(1) {
                        opacity: 0;
                        transform: translateY(50px);

                        &.active {
                            opacity: 1;
                            transform: translateY(0);
                            transition: all 1200ms 2000ms ease-in-out;
                        }
                    }

                    &:nth-child(2) {
                        opacity: 0;
                        transform: translateY(50px);

                        &.active {
                            opacity: 1;
                            transform: translateY(0);
                            transition: all 1200ms 2200ms ease-in-out;
                        }
                    }

                    &:nth-child(3) {
                        opacity: 0;
                        transform: translateY(50px);

                        &.active {
                            opacity: 1;
                            transform: translateY(0);
                            transition: all 1200ms 2400ms ease-in-out;
                        }
                    }

                    &:nth-child(4) {
                        opacity: 0;
                        transform: translateY(50px);

                        &.active {
                            opacity: 1;
                            transform: translateY(0);
                            transition: all 1200ms 2600ms ease-in-out;
                        }
                    }

                    &-title {
                        color: $text-color_1;
                        font-weight: 700;
                    }

                    &-link {
                        color: $text-color_2;
                        transition: all 300ms ease-in-out;

                        &:hover {
                            color: $active-color;
                        }
                    }
                }
            }
        }
    }
}

@import "~@/styles/media.scss";
</style>