import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    selectedCategory: [],
    selectedCatalog: [],
    selectedProduct: [],
    searchProducts: [],
    cart: [],
    locale: 'en-US',
  },
  mutations: {
    PUT_ALL_PRODUCTS(state, products){
      state.products = products
    },
    PUT_FOR_FILTER(state, data) {
      state.searchProducts = data
    },
    PUT_CATEGORY(state, category) {
      state.selectedCategory = category
    },
    PUT_CATALOG(state, catalog) {
      state.selectedCatalog = catalog
    },
    PUT_PRODUCT(state, product) {
      state.selectedProduct = product
    },
    PUT_CART(state, product) {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.ID === product.ID && item.image.color === product.image.color && item.selectedSize === product.selectedSize) {
            isProductExists = true;
            item.quantity++;
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    PUT_SEARCH(state, product) {
      state.searchProduct = product
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    },
    INCREMENT_CATALOG: (state, index) => {
      if (state.selectedCatalog[index].like <= 1) {
        state.selectedCatalog[index].like++
      }
    },
    DECREMENT_CATALOG: (state, index) => {
      if (state.selectedCatalog[index].like >= 1 || state.selectedCatalog[index].like >= 2) {
        state.selectedCatalog[index].like--
      }
    },
    SET_LOCALE: (state, locale) => {
      state.locale = locale
    }
  },
  actions: {
    async CATCH_ALL_PRODUCTS({commit}){
      try {
        await axios.get('https://tilek-online-shop.netlify.app/products',
        ).then((products) => {
          commit('PUT_ALL_PRODUCTS', products.data);
          return products
        })
      } catch(error) {
        console.log(error);
        return error;
      }
    },
    async CATCH_FOR_FILTER({commit}) {
      try {
        await axios.get('https://tilek-online-shop.netlify.app/filter',
        ).then((filteredProducts) => {
          commit('PUT_FOR_FILTER', filteredProducts.data)
          return filteredProducts
        })
      } catch(error) {
        console.log(error);
        return error;
      }
    },
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
    CATCH_SEARCH({commit}, product) {
      commit('PUT_SEARCH', product)
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
    }
  },
  getters: {
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
    }
  },
  modules: {},
});
