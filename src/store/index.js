import Vue from "vue";
import Vuex from "vuex";
import CommonActions from "./actions/actions";
import apiRequests from "./actions/apiRequests"
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

const actions = {...CommonActions,...apiRequests}
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: JSON.parse(localStorage.getItem('allProduct')) || [],
    selectedCategory: JSON.parse(localStorage.getItem('category')) || [],
    selectedCatalog: JSON.parse(localStorage.getItem('catalog')) || [],
    selectedProduct: JSON.parse(localStorage.getItem('product')) || [],
    searchProducts: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    locale: 'en-US',
    isMobile: false,
    mobileModal: false,
  },
  mutations,
  actions,
  getters,
  modules: {},
});
