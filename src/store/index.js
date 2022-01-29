import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: 'MAN',
        clothes: [
          {
            name: 'coat',
            frontImg: 'coatBlack.png',
            coat: [
              {
                name: 'Coat',
                color: 'black',
                price: '7000',
                image: "coatBlack.png",
                quantity: 1,
                left: 40,
                like: 0,
                size: [44,48,50,52]
              },
              {
                name: "Coat",
                color: 'green',
                price: '7000',
                image: "coatGreen.jpg",
                quantity: 1,
                left: 40,
                like: 0,
                size: [44,48,50,52]
              },
              {
                name: "Coat",
                color: 'white',
                price: '7000',
                image: "coatWhite.jpg",
                quantity: 1,
                left: 40,
                like: 0,
                size: [44,48,50,52]
              },
            ],
          },
          {
            name: 'shirts',
            frontImg: 'shirtBlack.jpg',
            shirts: [
              {
                name: "Shirts",
                color: 'black',
                price: '2500',
                image: "shirtBlack.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [44,46,48,50]
              },
              {
                name: "Shirts",
                color: 'red',
                price: '2500',
                image: "shirtRed.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [44,46,48,50]
              },
              {
                name: "Shirts",
                color: 'white',
                price: '2500',
                image: "shirtWhite.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [44,46,48,50]
              },
            ],
          },
          {
            name: 'shoes',
            frontImg: 'shoesBlack.jpg',
            shoes: [
              {
                name: "Shoes",
                color: 'black',
                price: '5000',
                image: "shoesBlack.jpg",
                quantity: 1,
                left: 20,
                like: 0,
                size: [39,40,42,44]
              },
              {
                name: "Nike",
                color: 'red',
                price: '5000',
                image: "nike.png",
                quantity: 1,
                left: 20,
                like: 0,
                size: [39,40,42,44]
              },
              {
                name: "Adidas",
                color: 'white',
                price: '5000',
                image: "adidas.png",
                quantity: 1,
                left: 20,
                like: 0,
                size: [39,40,42,44]
              },
              {
                name: "Shoes",
                color: 'blue',
                price: '5000',
                image: "shoesBlue.jpg",
                quantity: 1,
                left: 20,
                like: 0,
                size: [39,40,42,44]
              },
              {
                name: "Shoes",
                color: 'brown',
                price: '5000',
                image: "shoesBrown.jpg",
                quantity: 1,
                left: 20,
                like: 0,
                size: [39,40,42,44]
              },
              {
                name: "Shoes",
                color: 'white',
                price: '5000',
                image: "shoesWhite.jpg",
                quantity: 1,
                left: 20,
                like: 0,
                size: [39,40,42,44]
              },
            ],
          },
          {
            name: 'trousers',
            frontImg: 'trousersBlack.jpg',
            trousers: [
              {
                name: "Trousers",
                color: 'black',
                price: '3000',
                image: "trousersBlack.jpg",
                quantity: 1,
                left: 50,
                like: 0,
                size: [32,34,38,42]
              },
              {
                name: "Trousers",
                color: 'blue',
                price: '3000',
                image: "trousersBlue.png",
                quantity: 1,
                left: 50,
                like: 0,
                size: [32,34,38,42]
              },
              {
                name: "Trousers",
                color: 'green',
                price: '3000',
                image: "trousersGreen.jpg",
                quantity: 1,
                left: 50,
                like: 0,
                size: [32,34,38,42]
              },
              {
                name: "Trousers",
                color: 'red',
                price: '3000',
                image: "trousersRed.jpg",
                quantity: 1,
                left: 50,
                like: 0,
                size: [32,34,38,42]
              },
              {
                name: "Trousers",
                color: 'white',
                price: '3000',
                image: "trousersWhite.jpg",
                quantity: 1,
                left: 50,
                like: 0,
                size: [32,34,38,42]
              },
            ],
          },
        ],
      },
      {
        name: 'WOMAN',
        clothes: [
          {
            name: "coat",
            frontImg: "coatBlack.png",
            coat: [
              {
                name: "Coat",
                color: 'black',
                price: '7000',
                image: "coatBlack.png",
                quantity: 1,
                left: 35,
                like: 0,
                size: [44,46,48,50]
              },
              {
                name: "Coat",
                color: 'red',
                price: '7000',
                image: "coatRed.jpg",
                quantity: 1,
                left: 35,
                like: 0,
                size: [44,46,48,50]
              },
              {
                name: "Coat",
                color: 'white',
                price: '7000',
                image: "coatWhite.png",
                quantity: 1,
                left: 35,
                like: 0,
                size: [44,46,48,50]
              },
            ],
          },
          {
            name: "shirts",
            frontImg: "shirtBlack.jpg",
            shirts: [
              {
                name: "Shirts",
                color: 'black',
                price: '2500',
                image: "shirtBlack.jpg",
                quantity: 1,
                left: 25,
                like: 0,
                size: [44,46,48,50]
              },
              {
                name: "Shirts",
                color: 'red',
                price: '2500',
                image: "shirtRed.jpg",
                quantity: 1,
                left: 25,
                like: 0,
                size: [44,46,48,50]
              },
              {
                name: "Shirts",
                color: 'pink',
                price: '2500',
                image: "shirtPink.jpg",
                quantity: 1,
                left: 25,
                like: 0,
                size: [44,46,48,50]
              },
            ],
          },
          {
            name: "shoes",
            frontImg: "shoesBlue.jpg",
            shoes: [
              {
                name: "Shoes",
                color: 'blue',
                price: '5000',
                image: "shoesBlue.jpg",
                quantity: 1,
                left: 60,
                like: 0,
                size: [36,37,38,39]
              },
              {
                name: "Shoes",
                color: 'black',
                price: '5000',
                image: "shoesBlack.jpg",
                quantity: 1,
                left: 60,
                like: 0,
                size: [36,37,38,39]
              },
              {
                name: "Shoes",
                color: 'pink',
                price: '5000',
                image: "shoesPink.jpg",
                quantity: 1,
                left: 60,
                like: 0,
                size: [36,37,38,39]
              },
            ],
          },
          {
            name: 'trousers',
            frontImg: "trousersBlack.jpg",
            trousers: [
              {
                name: "Trousers",
                color: 'black',
                price: '3000',
                image: "trousersBlack.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [30,32,34,36]
              },
              {
                name: "Trousers",
                color: 'blue',
                price: '3000',
                image: "trousersBlue.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [30,32,34,36]
              },
              {
                name: "Trousers",
                color: 'pink',
                price: '3000',
                image: "trousersPink.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [30,32,34,36]
              },
            ],
          },
        ],
      },
      {
        name: 'BOY',
        clothes: [
          {
            name: "coat",
            frontImg: "coatBlack.jpg",
            coat: [
              {
                name: "Coat",
                color: 'black',
                price: '7000',
                image: "coatBlack.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [38,40,42,44]
              },
              {
                name: "Coat",
                color: 'blue',
                price: '7000',
                image: "coatBlue.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [38,40,42,44]
              },
              {
                name: "Coat",
                color: 'grey',
                price: '7000',
                image: "coatGrey.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [38,40,42,44]
              },
            ],
          },
          {
            name: "shirts",
            frontImg: "shirtBlack.jpg",
            shirts: [
              {
                name: "Shirts",
                color: 'black',
                price: '2500',
                image: "shirtBlack.jpg",
                quantity: 1,
                left: 20,
                like: 0,
                size: [34,36,38,40]
              },
              {
                name: "Shirts",
                color: 'white',
                price: '2500',
                image: "shirtWhite.jpg",
                quantity: 1,
                left: 20,
                like: 0,
                size: [34,36,38,40]
              },
              {
                name: "Shirts",
                color: 'yellow',
                price: '2500',
                image: "shirtYellow.jpg",
                quantity: 1,
                left: 20,
                like: 0,
                size: [34,36,38,40]
              },
            ],
          },
          {
            name: "shoes",
            frontImg: "shoesBrown.jpg",
            shoes: [
              {
                name: "Shoes",
                color: 'brown',
                price: '5000',
                image: "shoesBrown.jpg",
                quantity: 1,
                left: 40,
                like: 0,
                size: [28,30,34,36]
              },
              {
                name: "Shoes",
                color: 'black',
                price: '5000',
                image: "shoesBlack.jpg",
                quantity: 1,
                left: 40,
                like: 0,
                size: [28,30,34,36]
              },
              {
                name: "Shoes",
                color: 'blue',
                price: '5000',
                image: "shoesBlue.png",
                quantity: 1,
                left: 40,
                like: 0,
                size: [28,30,34,36]
              },
            ],
          },
          {
            name: "trousers",
            frontImg: "trousersBlack.jpg",
            trousers: [
              {
                name: "Trousers",
                color: 'black',
                price: '3000',
                image: "trousersBlack.jpg",
                quantity: 1,
                left: 20,
                like: 0,
                size: [24,26,28,30]
              },
              {
                name: "Trousers",
                color: 'blue',
                price: '3000',
                image: "trousersBlue.jpg",
                quantity: 1,
                left: 20,
                like: 0,
                size: [24,26,28,30]
              },
              {
                name: "Trousers",
                color: 'white',
                price: '3000',
                image: "trousersWhite.jpg",
                quantity: 1,
                left: 20,
                like: 0,
                size: [24,26,28,30]
              },
            ],
          },
        ],
      },
      {
        name: 'GIRL',
        clothes: [
          {
            name: "coat",
            frontImg: "coatBlack.jpg",
            coat: [
              {
                name: "Coat",
                color: 'black',
                price: '7000',
                image: "coatBlack.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [34,36,38,40]
              },
              {
                name: "Coat",
                color: 'blue',
                price: '7000',
                image: "coatBlue.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [34,36,38,40]
              },
              {
                name: "Coat",
                color: 'red',
                price: '7000',
                image: "coatRed.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [34,36,38,40]
              },
              {
                name: "Coat",
                color: 'white',
                price: '7000',
                image: "coatWhite.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [34,36,38,40]
              },
            ],
          },
          {
            name: "shirts",
            frontImg: "shirtBlue.jpg",
            shirts: [
              {
                name: "Shirts",
                color: 'blue',
                price: '2500',
                image: "shirtBlue.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [32,34,36,38]
              },
              {
                name: "Shirts",
                color: 'red',
                price: '2500',
                image: "shirtRed.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [32,34,36,38]
              },
              {
                name: "Shirts",
                color: 'white',
                price: '2500',
                image: "shirtWhite.jpg",
                quantity: 1,
                left: 30,
                like: 0,
                size: [32,34,36,38]
              },
            ],
          },
          {
            name: "shoes",
            frontImg: "shoesBlue.jpg",
            shoes: [
              {
                name: "Shoes",
                color: 'blue',
                price: '5000',
                image: "shoesBlue.jpg",
                quantity: 1,
                left: 50,
                like: 0,
                size: [30,32,34,36]
              },
              {
                name: "Shoes",
                color: 'grey',
                price: '5000',
                image: "shoesGrey.jpg",
                quantity: 1,
                left: 50,
                like: 0,
                size: [30,32,34,36]
              },
              {
                name: "Shoes",
                color: 'pink',
                price: '5000',
                image: "shoesPink.jpg",
                quantity: 1,
                left: 50,
                like: 0,
                size: [30,32,34,36]
              },
            ],
          },
          {
            name: "trousers",
            frontImg: "trousersBlack.jpg",
            trousers: [
              {
                name: "Trousers",
                color: 'black',
                price: '3000',
                image: "trousersBlack.jpg",
                quantity: 1,
                left: 40,
                like: 0,
                size: [24,26,28,30]
              },
              {
                name: "Trousers",
                color: 'red',
                price: '3000',
                image: "trousersRed.jpg",
                quantity: 1,
                left: 40,
                like: 0,
                size: [24,26,28,30]
              },
              {
                name: "Trousers",
                color: 'white',
                price: '3000',
                image: "trousersWhite.jpg",
                quantity: 1,
                left: 40,
                like: 0,
                size: [24,26,28,30]
              },
            ],
          },
        ],
      },
    ],
    selectedCategory: [],
    selectedCatalog: [],
    selectedProduct: [],
    bug: [],
  },
  mutations: {
    PUT_CATEGORY(state,category) {
      state.selectedCategory = category
    },
    PUT_CATALOG(state,catalog) {
      state.selectedCatalog = catalog
    },
    PUT_PRODUCT(state, product) {
      state.selectedProduct = product
    },
    PUT_BUG(state, product) {
      let isProductExists = false;
      if (state.bug.length) {
        state.bug.map(function (item) {
          if (item.name === product.name) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.bug.push(product)
        }
      } else {
        state.bug.push(product)
      }
    },
    REMOVE_FROM_BUG: (state, index) => {
      state.bug.splice(index, 1)
    },
    INCREMENT: (state, index) => {
      state.bug[index].quantity++
    },
    DECREMENT: (state, index) => {
      if (state.bug[index].quantity > 1) {
        state.bug[index].quantity--
      }
    },
    CATALOG_LIKE: (state ,index) => {
      if (state.selectedCatalog[index].like > 0) {
        state.selectedCatalog[index].like--
      }
      else {
        state.selectedCatalog[index].like++
        console.log(state.selectedCatalog[index].like)
      }
    },
    PRODUCT_LIKE: (state ,index) => {
      if (state.selectedProduct[index].like > 0) {
        state.selectedProduct[index].like--
      }
      else {
        state.selectedProduct[index].like++
      }
    }
  },
  actions: {
    CATCH_CATEGORY({commit}, category) {
      commit('PUT_CATEGORY', category)
    },
    CATCH_CATALOG({commit}, catalog) {
      commit('PUT_CATALOG', catalog)
    },
    CATCH_PRODUCT({commit}, product) {
      commit('PUT_PRODUCT', product)
    },
    CATCH_BUG({commit}, product) {
      commit('PUT_BUG', product)
    },
    INCREMENT_PRODUCT({commit}, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_PRODUCT({commit}, index) {
      commit('DECREMENT', index)
    },
    DELETE_FROM_BUG({commit}, index) {
      commit('REMOVE_FROM_BUG', index)
    },
    LIKE_CATALOG({commit}, index) {
      commit('CATALOG_LIKE' ,index)
    },
    LIKE_PRODUCT({commit}, index) {
      commit('CATALOG_LIKE' ,index)
    },
  },
  getters: {
    GET_PRODUCTS(state) {
      return state.products
    },
    GET_CATEGORY(state) {
      return state.selectedCategory
    },
    GET_CATALOG(state) {
      return state.selectedCatalog
    },
    GET_PRODUCT(state) {
      return state.selectedProduct
    },
    GET_BUG(state) {
      return state.bug
    }
  },
  modules: {},
});
