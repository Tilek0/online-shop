export default {
    GET_PRODUCTS(state) {
        return state.products;
    },
    GET_CATEGORY(state) {
        return state.selectedCategory;
    },
    GET_CATALOG(state) {
        return state.selectedCatalog;
    },
    GET_PRODUCT(state) {
        return state.selectedProduct;
    },
    GET_CART(state) {
        return state.cart;
    },
    GET_FOR_FILTER(state) {
        return state.searchProducts;
    },
    GET_LOCALE(state) {
        return state.locale;
    },
    GET_MOBILE(state) {
        return state.isMobile;
    },
    GET_MOBILE_MODAL(state) {
        return state.mobileModal
    }
}