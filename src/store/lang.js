import en from "@/content/en.json";
import ua from "@/content/ua.json";
import ru from "@/content/ru.json";

export default {
    state: {
        contentLang: {},
    },

    getters: {
        getContentLang: state => state.contentLang
    },

    mutations: {
        setContentLang(state, payload) {
            state.contentLang = payload;
        },
    },

    actions: {
        updateContentLang({ commit }, lang) {
            let completeContent = null
            if (lang === "en") {
                completeContent = en
            } else if (lang === "ua") {
                completeContent = ua
            } else if (lang === "ru") {
                completeContent = ru
            }
            return commit("setContentLang", completeContent);
        },
    },
};