export default {
    CATCH_CATEGORY({commit}, category) {
        commit('PUT_CATEGORY', category)
    },
    CATCH_CATALOG({commit}, catalog) {
        commit('PUT_CATALOG', catalog)
    },
    CATCH_PRODUCT({commit}, product) {
        commit('PUT_PRODUCT', product)
    },
    CATCH_CART({commit}, product) {
        commit('PUT_CART', product)
    },
    INCREMENT_PRODUCT({commit}, index) {
        commit('INCREMENT', index)
    },
    DECREMENT_PRODUCT({commit}, index) {
        commit('DECREMENT', index)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index)
    },
    INCREMENT_LIKE_CATALOG({commit}, index) {
        commit('INCREMENT_CATALOG', index)
    },
    DECREMENT_LIKE_CATALOG({commit}, index) {
        commit('DECREMENT_CATALOG', index)
    },
    CHANGE_LOCALE({commit}, locale) {
        commit('SET_LOCALE', locale)
    },
    CHANGE_MOBILE({commit}, boolean) {
        commit('SET_MOBILE', boolean)
    },
    CLOSE_MOBILE_MODAL({commit}, boolean) {
        commit('SET_MOBILE_MODAL', boolean)
    }
}