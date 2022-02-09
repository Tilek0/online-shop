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
            frontImg: 'mcoatblack.png',
            coat: [
              {
                name: 'CoatWinter',
                price: '7000',
                image: [
                  {
                    img: "mcoatblack.png",
                    color: 'black',
                    sizes: [
                      {size: 40, left: 20,},
                      {size: 48, left: 15,},
                      {size: 50, left: 25,},
                      {size: 52, left: 10,},
                    ]
                  },
                  {
                    img: "mcoatgreen.jpg",
                    color: 'green',
                    sizes: [
                      {size: 40, left: 20,},
                      {size: 48, left: 15,},
                      {size: 50, left: 25,},
                      {size: 52, left: 10,},
                    ]
                  },
                  {
                    img: "mcoatwhite.jpg",
                    color: 'white',
                    sizes: [
                      {size: 40, left: 20,},
                      {size: 48, left: 15,},
                      {size: 50, left: 25,},
                      {size: 52, left: 10,},
                    ]
                  },
                ],
                quantity: 1,
                like: 0,
              },
            ],
          },
          {
            name: 'shirts',
            frontImg: 'mshirtblack.jpg',
            shirts: [
              {
                name: "Shirts",
                price: '2500',
                image: [
                  {
                    img: "mshirtblack.jpg",
                    color: 'black',
                    sizes: [
                      {size: 44, left: 10},
                      {size: 46, left: 15},
                      {size: 48, left: 20},
                      {size: 50, left: 25},
                    ]
                  },
                  {
                    img: "mshirtred.jpg",
                    color: 'red',
                    sizes: [
                      {size: 44, left: 10},
                      {size: 46, left: 15},
                      {size: 48, left: 20},
                      {size: 50, left: 25},
                    ]
                  },
                  {
                    img: "mshirtwhite.jpg",
                    color: 'white',
                    sizes: [
                      {size: 44, left: 10},
                      {size: 46, left: 15},
                      {size: 48, left: 20},
                      {size: 50, left: 25},
                    ]
                  },
                ],
                quantity: 1,
                like: 0,
              },
            ],
          },
          {
            name: 'shoes',
            frontImg: 'mshoesblack.jpg',
            shoes: [
              {
                name: "Shoes",
                price: '5000',
                image: [
                  {
                    img: "mshoesblack.jpg",
                    color: 'black',
                    sizes: [
                      {size: 39, left: 20},
                      {size: 40, left: 15},
                      {size: 42, left: 10},
                      {size: 44, left: 7},
                    ]
                  },                  {
                    img: "mshoesblue.jpg",
                    color: 'blue',
                    sizes: [
                      {size: 39, left: 20},
                      {size: 40, left: 15},
                      {size: 42, left: 10},
                      {size: 44, left: 7},
                    ]
                  },
                  {
                    img: "mshoesbrown.jpg",
                    color: 'brown',
                    sizes: [
                      {size: 39, left: 20},
                      {size: 40, left: 15},
                      {size: 42, left: 10},
                      {size: 44, left: 7},
                    ]
                  },
                  {
                    img: "mshoeswhite.jpg",
                    color: 'white',
                    sizes: [
                      {size: 39, left: 20},
                      {size: 40, left: 15},
                      {size: 42, left: 10},
                      {size: 44, left: 7},
                    ]
                  },
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "Adidas",
                price: '5000',
                image: [
                  {
                    img: "mnike.png",
                    color: 'red',
                    sizes: [
                      {size: 39, left: 20},
                      {size: 40, left: 15},
                      {size: 42, left: 10},
                      {size: 44, left: 7},
                    ]
                  },
                  {
                    img: "madidas.png",
                    color: 'white',
                    sizes: [
                      {size: 39, left: 20},
                      {size: 40, left: 15},
                      {size: 42, left: 10},
                      {size: 44, left: 7},
                    ]
                  }
                ],
                quantity: 1,
                like: 0,
              },
            ],
          },
          {
            name: 'trousers',
            frontImg: 'mtrousersblack.jpg',
            trousers: [
              {
                name: "Trousers",
                price: '3000',
                image: [
                  {
                    img: "mtrousersblack.jpg",
                    color: 'black',
                    sizes: [
                      {size: 32, left: 20},
                      {size: 34, left: 14},
                      {size: 38, left: 24},
                      {size: 32, left: 22},
                    ]
                  },
                  {
                    img: "mtrousersblue.png",
                    color: 'blue',
                    sizes: [
                      {size: 32, left: 20},
                      {size: 34, left: 14},
                      {size: 38, left: 24},
                      {size: 32, left: 22},
                    ]
                  },
                  {
                    img: "mtrousersgreen.jpg",
                    color: 'green',
                    sizes: [
                      {size: 32, left: 20},
                      {size: 34, left: 14},
                      {size: 38, left: 24},
                      {size: 32, left: 22},
                    ]
                  }
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "Trousers",
                price: '3000',
                image: [
                  {
                    img:  "mtrousersred.jpg",
                    color: 'red',
                    sizes: [
                      {size: 32, left: 20},
                      {size: 34, left: 14},
                      {size: 38, left: 24},
                      {size: 32, left: 22},
                    ]
                  },
                  {
                    img: "mtrouserswhite.jpg",
                    color: 'white',
                    sizes: [
                      {size: 32, left: 20},
                      {size: 34, left: 14},
                      {size: 38, left: 24},
                      {size: 32, left: 22},
                    ]
                  },
                ],
                quantity: 1,
                like: 0,
              },
            ],
          },
        ],
      },
      // {
      //   name: 'WOMAN',
      //   clothes: [
      //     {
      //       name: "coat",
      //       frontImg: "wcoatblack.png",
      //       coat: [
      //         {
      //           name: "Coat",
      //           color: 'black',
      //           price: '7000',
      //           image: "wcoatblack.png",
      //           quantity: 1,
      //           left: 35,
      //           like: 0,
      //           size: [44,46,48,50]
      //         },
      //         {
      //           name: "Coat",
      //           color: 'red',
      //           price: '7000',
      //           image: "wcoatred.jpg",
      //           quantity: 1,
      //           left: 35,
      //           like: 0,
      //           size: [44,46,48,50]
      //         },
      //         {
      //           name: "Coat",
      //           color: 'white',
      //           price: '7000',
      //           image: "wcoatwhite.png",
      //           quantity: 1,
      //           left: 35,
      //           like: 0,
      //           size: [44,46,48,50]
      //         },
      //       ],
      //     },
      //     {
      //       name: "shirts",
      //       frontImg: "wshirtblack.jpg",
      //       shirts: [
      //         {
      //           name: "Shirts",
      //           color: 'black',
      //           price: '2500',
      //           image: "wshirtblack.jpg",
      //           quantity: 1,
      //           left: 25,
      //           like: 0,
      //           size: [44,46,48,50]
      //         },
      //         {
      //           name: "Shirts",
      //           color: 'red',
      //           price: '2500',
      //           image: "wshirtred.jpg",
      //           quantity: 1,
      //           left: 25,
      //           like: 0,
      //           size: [44,46,48,50]
      //         },
      //         {
      //           name: "Shirts",
      //           color: 'pink',
      //           price: '2500',
      //           image: "wshirtpink.jpg",
      //           quantity: 1,
      //           left: 25,
      //           like: 0,
      //           size: [44,46,48,50]
      //         },
      //       ],
      //     },
      //     {
      //       name: "shoes",
      //       frontImg: "wshoesblue.jpg",
      //       shoes: [
      //         {
      //           name: "Shoes",
      //           color: 'blue',
      //           price: '5000',
      //           image: "wshoesblue.jpg",
      //           quantity: 1,
      //           left: 60,
      //           like: 0,
      //           size: [36,37,38,39]
      //         },
      //         {
      //           name: "Shoes",
      //           color: 'black',
      //           price: '5000',
      //           image: "wshoesblack.jpg",
      //           quantity: 1,
      //           left: 60,
      //           like: 0,
      //           size: [36,37,38,39]
      //         },
      //         {
      //           name: "Shoes",
      //           color: 'pink',
      //           price: '5000',
      //           image: "wshoespink.jpg",
      //           quantity: 1,
      //           left: 60,
      //           like: 0,
      //           size: [36,37,38,39]
      //         },
      //       ],
      //     },
      //     {
      //       name: 'trousers',
      //       frontImg: "wtrousersblack.jpg",
      //       trousers: [
      //         {
      //           name: "Trousers",
      //           color: 'black',
      //           price: '3000',
      //           image: "wtrousersblack.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [30,32,34,36]
      //         },
      //         {
      //           name: "Trousers",
      //           color: 'blue',
      //           price: '3000',
      //           image: "wtrousersblue.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [30,32,34,36]
      //         },
      //         {
      //           name: "Trousers",
      //           color: 'pink',
      //           price: '3000',
      //           image: "wtrouserspink.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [30,32,34,36]
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: 'BOY',
      //   clothes: [
      //     {
      //       name: "coat",
      //       frontImg: "bcoatblack.jpg",
      //       coat: [
      //         {
      //           name: "Coat",
      //           color: 'black',
      //           price: '7000',
      //           image: "bcoatblack.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [38,40,42,44]
      //         },
      //         {
      //           name: "Coat",
      //           color: 'blue',
      //           price: '7000',
      //           image: "bcoatblue.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [38,40,42,44]
      //         },
      //         {
      //           name: "Coat",
      //           color: 'grey',
      //           price: '7000',
      //           image: "bcoatgrey.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [38,40,42,44]
      //         },
      //       ],
      //     },
      //     {
      //       name: "shirts",
      //       frontImg: "bshirtblack.jpg",
      //       shirts: [
      //         {
      //           name: "Shirts",
      //           color: 'black',
      //           price: '2500',
      //           image: "bshirtblack.jpg",
      //           quantity: 1,
      //           left: 20,
      //           like: 0,
      //           size: [34,36,38,40]
      //         },
      //         {
      //           name: "Shirts",
      //           color: 'white',
      //           price: '2500',
      //           image: "bshirtwhite.jpg",
      //           quantity: 1,
      //           left: 20,
      //           like: 0,
      //           size: [34,36,38,40]
      //         },
      //         {
      //           name: "Shirts",
      //           color: 'yellow',
      //           price: '2500',
      //           image: "bshirtyellow.jpg",
      //           quantity: 1,
      //           left: 20,
      //           like: 0,
      //           size: [34,36,38,40]
      //         },
      //       ],
      //     },
      //     {
      //       name: "shoes",
      //       frontImg: "bshoesbrown.jpg",
      //       shoes: [
      //         {
      //           name: "Shoes",
      //           color: 'brown',
      //           price: '5000',
      //           image: "bshoesbrown.jpg",
      //           quantity: 1,
      //           left: 40,
      //           like: 0,
      //           size: [28,30,34,36]
      //         },
      //         {
      //           name: "Shoes",
      //           color: 'black',
      //           price: '5000',
      //           image: "bshoesblack.jpg",
      //           quantity: 1,
      //           left: 40,
      //           like: 0,
      //           size: [28,30,34,36]
      //         },
      //         {
      //           name: "Shoes",
      //           color: 'blue',
      //           price: '5000',
      //           image: "bshoesblue.png",
      //           quantity: 1,
      //           left: 40,
      //           like: 0,
      //           size: [28,30,34,36]
      //         },
      //       ],
      //     },
      //     {
      //       name: "trousers",
      //       frontImg: "btrousersblack.jpg",
      //       trousers: [
      //         {
      //           name: "Trousers",
      //           color: 'black',
      //           price: '3000',
      //           image: "btrousersblack.jpg",
      //           quantity: 1,
      //           left: 20,
      //           like: 0,
      //           size: [24,26,28,30]
      //         },
      //         {
      //           name: "Trousers",
      //           color: 'blue',
      //           price: '3000',
      //           image: "btrousersblue.jpg",
      //           quantity: 1,
      //           left: 20,
      //           like: 0,
      //           size: [24,26,28,30]
      //         },
      //         {
      //           name: "Trousers",
      //           color: 'white',
      //           price: '3000',
      //           image: "btrouserswhite.jpg",
      //           quantity: 1,
      //           left: 20,
      //           like: 0,
      //           size: [24,26,28,30]
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: 'GIRL',
      //   clothes: [
      //     {
      //       name: "coat",
      //       frontImg: "gcoatblack.jpg",
      //       coat: [
      //         {
      //           name: "Coat",
      //           color: 'black',
      //           price: '7000',
      //           image: "gcoatblack.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [34,36,38,40]
      //         },
      //         {
      //           name: "Coat",
      //           color: 'blue',
      //           price: '7000',
      //           image: "gcoatblue.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [34,36,38,40]
      //         },
      //         {
      //           name: "Coat",
      //           color: 'red',
      //           price: '7000',
      //           image: "gcoatred.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [34,36,38,40]
      //         },
      //         {
      //           name: "Coat",
      //           color: 'white',
      //           price: '7000',
      //           image: "gcoatwhite.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [34,36,38,40]
      //         },
      //       ],
      //     },
      //     {
      //       name: "shirts",
      //       frontImg: "gshirtblue.jpg",
      //       shirts: [
      //         {
      //           name: "Shirts",
      //           color: 'blue',
      //           price: '2500',
      //           image: "gshirtblue.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [32,34,36,38]
      //         },
      //         {
      //           name: "Shirts",
      //           color: 'red',
      //           price: '2500',
      //           image: "gshirtred.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [32,34,36,38]
      //         },
      //         {
      //           name: "Shirts",
      //           color: 'white',
      //           price: '2500',
      //           image: "gshirtwhite.jpg",
      //           quantity: 1,
      //           left: 30,
      //           like: 0,
      //           size: [32,34,36,38]
      //         },
      //       ],
      //     },
      //     {
      //       name: "shoes",
      //       frontImg: "gshoesblue.jpg",
      //       shoes: [
      //         {
      //           name: "Shoes",
      //           color: 'blue',
      //           price: '5000',
      //           image: "gshoesblue.jpg",
      //           quantity: 1,
      //           left: 50,
      //           like: 0,
      //           size: [30,32,34,36]
      //         },
      //         {
      //           name: "Shoes",
      //           color: 'grey',
      //           price: '5000',
      //           image: "gshoesgrey.jpg",
      //           quantity: 1,
      //           left: 50,
      //           like: 0,
      //           size: [30,32,34,36]
      //         },
      //         {
      //           name: "Shoes",
      //           color: 'pink',
      //           price: '5000',
      //           image: "gshoespink.jpg",
      //           quantity: 1,
      //           left: 50,
      //           like: 0,
      //           size: [30,32,34,36]
      //         },
      //       ],
      //     },
      //     {
      //       name: "trousers",
      //       frontImg: "gtrousersblack.jpg",
      //       trousers: [
      //         {
      //           name: "Trousers",
      //           color: 'black',
      //           price: '3000',
      //           image: "gtrousersblack.jpg",
      //           quantity: 1,
      //           left: 40,
      //           like: 0,
      //           size: [24,26,28,30]
      //         },
      //         {
      //           name: "Trousers",
      //           color: 'red',
      //           price: '3000',
      //           image: "gtrousersred.jpg",
      //           quantity: 1,
      //           left: 40,
      //           like: 0,
      //           size: [24,26,28,30]
      //         },
      //         {
      //           name: "Trousers",
      //           color: 'white',
      //           price: '3000',
      //           image: "gtrouserswhite.png",
      //           quantity: 1,
      //           left: 40,
      //           like: 0,
      //           size: [24,26,28,30]
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
    selectedCategory: [],
    selectedCatalog: [],
    selectedProduct: [],
    cart: [],
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
    PUT_CART(state, product) {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.ID === product.ID) {
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
    GET_CART(state) {
      return state.cart
    }
  },
  modules: {},
});
