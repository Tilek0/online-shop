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
                name: 'Classic-Long',
                price: '12500',
                sizes: [44, 48, 50, 52],
                image: [
                  {img: "mcoatgreen.jpg", color: 'green',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: 'Classic-Long-Red',
                price: '9000',
                sizes: [44, 48, 50, 52],
                image: [
                  {img: "11.jpg", color: '#6A2037',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: 'Classic-Long black',
                price: '12700',
                sizes: [48, 50, 52, 54],
                image: [
                  {img: "mcoatblack.png", color: 'black',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: 'Classic-Long-white',
                price: '12300',
                sizes: [44, 48, 50, 52],
                image: [
                  {img: "mcoatwhite.jpg", color: 'white',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: 'winter-casual',
                price: '9300',
                sizes: [48, 50, 52, 54],
                image: [
                  {img: "4.jpg", color: '#560E12', otherPhoto: ['3.jpg']},
                  {img: "7.jpg", color: '#0C0A0D', otherPhoto: ['5.jpg','6.jpg',]},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: 'winter-casual',
                price: '10500',
                sizes: [48, 50, 52, 54],
                image: [
                  {img: "12.jpg", color: '#4A3F2C', otherPhoto: ['13.jpg', '17.jpg']},
                  {img: "14.jpg", color: '#4C5C69', otherPhoto: ['15.jpg','16.jpg',]},
                ],
                quantity: 1,
                like: 0,
              },
            ],
          },
          {
            name: 'out-wear',
            frontImg: '1.jpg',
            jacket: [
              {
                name: 'adidasDemi',
                price: 3300,
                sizes: ['XM', 'L', 'M', 'XXL', 'S'],
                image: [
                  {img: '1.jpg', color: '#26252B'}
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: 'adidasSport',
                price: 3300,
                sizes: ['XM', 'L', 'M', 'XXL', 'S'],
                image: [
                  {img: '2.jpg', color: '#3C4468',otherPhoto: ['mjacketsport3.jpg']}
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: 'casualClassic Jacket',
                price: 3300,
                sizes: ['XS', 'S', 'M', 'L', 'XL'],
                image: [
                  {img: '8.jpg', color: '#4CB9FA', otherPhoto: ['9.jpg', '10.jpg']}
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: 'casual Jacket',
                price: 4500,
                sizes: ['XS', 'S', 'M', 'L', 'XXL'],
                image: [
                  {img: 'mjacketblue1.jpg', color: '#323C48', otherPhoto: ['mjacketblue.jpg', 'mjacketblue2.jpg']}
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: 'casual outWear',
                price: 3000,
                sizes: ['XS', 'S', 'M', 'L', 'XL'],
                image: [
                  {img: 'mjacketgrey1.jpg', color: '#50505A', otherPhoto: ['mjacketgrey.jpg']},
                  {img: 'mjacketred.jpg', color: '#FB3131',},
                ],
                quantity: 1,
                like: 0,
              },
            ]
          },
          {
            name: 'shirts',
            frontImg: 'mshirtblack.jpg',
            shirts: [
              {
                name: "T-Shirts",
                price: '2500',
                sizes: [44, 46, 48, 50],
                image: [
                  {img: "mshirtblack.jpg", color: 'black',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "Shirts red",
                price: '3000',
                sizes: [44, 46, 48, 50],
                image: [
                  {img: "mshirtred.jpg", color: 'red',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "Shirts classic",
                price: '3500',
                sizes: [44, 46, 48, 50],
                image: [
                  {img: "mshirtwhite.jpg", color: 'white',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "T-shirt kors",
                price: '2000',
                sizes: [44, 46, 48, 50],
                image: [
                  {img: "mshirtkorsgrey.jpg", color: 'white',},
                  {img: "mtshirtkors.jpg", color: 'green',otherPhoto: ['mtshirtgreen3.jpg','mtshirtgreen0.jpg','mtshirtkorsgreen2.jpg']},
                  {img: "mtshirtkorsblack.jpg", color: 'black',},
                  {img: "mtshirtkorsred.jpg", color: 'red',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "shirt long black",
                price: '2700',
                sizes: [44, 46, 48, 50],
                image: [
                  {img: "mtshirtblack.jpg", color: 'black',},
                  {img: "mtshirtwhite.jpg", color: 'white',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "T-shirt sport",
                price: '2200',
                sizes: [44, 46, 48, 50],
                image: [
                  {img: "mtshirtblue.jpg", color: 'blue',},
                  {img: "mtshirtdarkred.jpg", color: '5A1E2A',},
                  {img: "mtshirtgreen1.jpg", color: 'green', otherPhoto: ['mtshirtgreen1.jpg']},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "T-shirt adidas",
                price: '3200',
                sizes: [44, 46, 48, 50],
                image: [
                  {img: "mtshirtdark.jpg", color: 'black',},
                  {img: "mtshirtgrey.jpg", color: 'yellow',},
                  {img: "mtshirtred.jpg", color: 'red',},
                  {img: "mtshirtgrey1.jpg", color: 'grey',otherPhoto: ['mtshirtgreen2.jpg']},
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
                name: "Shoes classic",
                price: '5000',
                sizes: [39, 40, 42, 44],
                image: [
                  {img: "mshoesblack.jpg", color: 'black',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "Shoes classic",
                price: '4700',
                sizes: [40, 41, 42, 43],
                image: [
                  {img: "mshoesblue.jpg", color: 'blue',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "Shoes classic",
                price: '6000',
                sizes: [39, 40, 42, 44],
                image: [
                  {img: "mshoesbrown.jpg", color: 'brown',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "Shoes white sport",
                price: '3000',
                sizes: [39, 40, 42, 44],
                image: [
                  {img: "mshoeswhite.jpg", color: 'white',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "Adidas",
                price: '5500',
                sizes: [39, 40, 42, 44],
                image: [
                  {img: "mnike.png", color: 'red',},
                  {img: "madidas.png", color: 'white',}
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "timberland",
                price: '5400',
                sizes: [39, 40, 42, 44],
                image: [
                  {img: "mshoesbrown2.jpg", color: '#351F21', otherPhoto: ['mshoesbrown.jpg']},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "timberland suede",
                price: '5500',
                sizes: [40, 41, 42, 44],
                image: [
                  {img: "mtomsonbrown.jpg", color: '#5E3A27',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "timberland brown",
                price: '5400',
                sizes: [40, 41, 42, 44],
                image: [
                  {img: "mtomsonbrownlg.jpg", color: 'brown',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "timberland black",
                price: '5400',
                sizes: [40, 41, 42, 44],
                image: [
                  {img: "mtomson3.jpg", color: 'black', otherPhoto: ['mtomson.jpg', 'mtomson2.jpg']},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "winterBoots",
                price: '7000',
                sizes: [40, 41, 42, 44],
                image: [
                  {img: "mbootsblack.jpg", color: 'black', otherPhoto: ['mbootsblack2.jpg']},
                  {img: "mbootsbrown1.jpg", color: '#643A2C',}
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "oxford",
                price: '6500',
                sizes: [40, 41, 42, 44],
                image: [
                  {img: "moxford2.jpg", color: 'black', otherPhoto: ['moxford1.jpg','moxford3.jpg']},
                  {img: "moxfordbrown2.jpg", color: '#8F4B28',otherPhoto: ['moxfordbrown3.jpg']}
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
                sizes: [32, 34, 36, 38,],
                image: [
                  {img: "mtrousersblack.jpg", color: 'black',},
                  {img: "mtrousersblue.png", color: 'blue',},
                  {img: "mtrousersred.jpg", color: '#4B2941',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "Trousers",
                price: '3000',
                sizes: [32, 34, 36, 38,],
                image: [
                  {img: "mtrousersgreen.jpg", color: 'green',}
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "Jeans",
                price: '3000',
                sizes: [32, 34, 36, 38],
                image: [
                  {img: "mtrouserswhite.jpg", color: 'white',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "sportPants",
                price: '3000',
                sizes: [32, 34, 36, 38],
                image: [
                  {img: "mpants.jpg", color: '#1B1B1D',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "jeans",
                price: '3000',
                sizes: [32, 34, 36, 38],
                image: [
                  {img: "mpants2.jpg", color: '#354D68', otherPhoto: ['mpants1.jpg']},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "office pants",
                price: '3000',
                sizes: [32, 34, 36, 38],
                image: [
                  {img: "mpantsdarkblue2.jpg", color: '#30303C', otherPhoto: ['mpantsdarkblue.jpg']},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "sport pants grey",
                price: '3000',
                sizes: [32, 34, 36, 38],
                image: [
                  {img: "mpantsgrey2.jpg", color: '#9C9DA2', otherPhoto: ['mpantsgrey.jpg']},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: "pants lightBrown",
                price: '3000',
                sizes: [32, 34, 36, 38],
                image: [
                  {img: "mpantslightbrown2.jpg", color: '#D3B38D', otherPhoto: ['mpantslightbrown.jpg']},
                ],
                quantity: 1,
                like: 0,
              },
            ],
          },
        ],
      },
      {
        name: 'WOMAN',
        clothes: [
          {
            name: 'coat',
            frontImg: "wcoatblack.png",
            coat: [
              {
                name: 'CoatSpring',
                price: '7000',
                sizes: [44, 46, 48, 50],
                image: [
                  {img: "wcoatblack.png", color: 'black',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: 'CoatSpring',
                price: '7000',
                sizes: [44, 46, 48, 50],
                image: [
                  {img: "wcoatred.jpg", color: 'red',},
                ],
                quantity: 1,
                like: 0,
              },
              {
                name: 'CoatSpring',
                price: '7000',
                sizes: [44, 46, 48, 50],
                image: [
                  {img: "wcoatwhite.png", color: 'white',},
                ],
                quantity: 1,
                like: 0,
              },
            ],
          },
          {
            name: "shirts",
            frontImg: "wshirtblack.jpg",
            shirts: [
              {
                name: "Shirts",
                price: '2500',
                image: [
                  {img: "wshirtblack.jpg", color: 'black'},
                ],
                quantity: 1,
                like: 0,
                sizes: [44, 46, 48, 50]
              },
              {
                name: "Shirts",
                price: '2500',
                image: [
                  {img: "wshirtred.jpg", color: 'red'},
                ],
                quantity: 1,
                like: 0,
                sizes: [44, 46, 48, 50]
              },
              {
                name: "Shirts",
                price: '2500',
                image: [
                  {img: "wshirtpink.jpg", color: 'pink'},
                ],
                quantity: 1,
                like: 0,
                sizes: [44, 46, 48, 50]
              },
            ],
          },
          {
            name: "shoes",
            frontImg: "wshoesblue.jpg",
            shoes: [
              {
                name: "Shoes",
                price: '5000',
                image: [
                  {img: "wshoesblue.jpg", color: 'blue',},
                ],
                quantity: 1,
                like: 0,
                sizes: [36, 37, 38, 39]
              },
              {
                name: "Shoes",
                price: '5000',
                image: [
                  {img: "wshoesblack.jpg", color: 'black',},
                ],
                quantity: 1,
                like: 0,
                sizes: [36, 37, 38, 39]
              },
              {
                name: "Shoes",
                price: '5000',
                image: [
                  {img: "wshoespink.jpg", color: 'pink',},
                ],
                quantity: 1,
                like: 0,
                sizes: [36, 37, 38, 39]
              },
            ],
          },
          {
            name: 'trousers',
            frontImg: "wtrousersblack.jpg",
            trousers: [
              {
                name: "Trousers",
                price: '3000',
                image: [
                  {img: "wtrousersblack.jpg", color: 'black',},
                ],
                quantity: 1,
                like: 0,
                sizes: [30, 32, 34, 36]
              },
              {
                name: "Trousers",
                price: '3000',
                image: [
                  {img: "wtrousersblue.jpg", color: 'blue',},
                ],
                quantity: 1,
                like: 0,
                sizes: [30, 32, 34, 36]
              },
              {
                name: "Trousers",
                price: '3000',
                image: [
                  {img: "wtrouserspink.jpg", color: 'pink',},
                ],
                quantity: 1,
                like: 0,
                sizes: [30, 32, 34, 36]
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
            frontImg: "bcoatblack.jpg",
            coat: [
              {
                name: "Coat",
                price: '7000',
                image: [
                  {img: "bcoatblack.jpg", color: 'black',},
                ],
                quantity: 1,
                like: 0,
                sizes: [38, 40, 42, 44]
              },
              {
                name: "Coat",
                price: '7000',
                image: [
                  {img: "bcoatblue.jpg", color: 'blue',},
                ],
                quantity: 1,
                like: 0,
                sizes: [38, 40, 42, 44]
              },
              {
                name: "Coat",
                price: '7000',
                image: [
                  {img: "bcoatgrey.jpg", color: 'grey',},
                ],
                quantity: 1,
                like: 0,
                sizes: [38, 40, 42, 44]
              },
            ],
          },
          {
            name: "shirts",
            frontImg: "bshirtblack.jpg",
            shirts: [
              {
                name: "Shirts",
                price: '2500',
                image: [
                  {img: "bshirtblack.jpg", color: 'black',},
                ],
                quantity: 1,
                like: 0,
                sizes: [34, 36, 38, 40]
              },
              {
                name: "Shirts",
                price: '2500',
                image: [
                  {img: "bshirtwhite.jpg", color: 'white',},
                ],
                quantity: 1,
                like: 0,
                sizes: [34, 36, 38, 40]
              },
              {
                name: "Shirts",
                price: '2500',
                image: [
                  {img: "bshirtyellow.jpg", color: 'yellow',},
                ],
                quantity: 1,
                like: 0,
                sizes: [34, 36, 38, 40]
              },
            ],
          },
          {
            name: "shoes",
            frontImg: "bshoesbrown.jpg",
            shoes: [
              {
                name: "Shoes",
                price: '5000',
                image: [
                  {img: "bshoesbrown.jpg", color: 'brown',},
                ],
                quantity: 1,
                like: 0,
                sizes: [28, 30, 34, 36]
              },
              {
                name: "Shoes",
                price: '5000',
                image: [
                  {img: "bshoesblack.jpg", color: 'black',},
                ],
                quantity: 1,
                like: 0,
                sizes: [28, 30, 34, 36]
              },
              {
                name: "Shoes",
                price: '5000',
                image: [
                  {img: "bshoesblue.png", color: 'blue',},
                ],
                quantity: 1,
                like: 0,
                sizes: [28, 30, 34, 36]
              },
            ],
          },
          {
            name: "trousers",
            frontImg: "btrousersblack.jpg",
            trousers: [
              {
                name: "Trousers",
                price: '3000',
                image: [
                  {img: "btrousersblack.jpg", color: 'black',},
                ],
                quantity: 1,
                like: 0,
                sizes: [24, 26, 28, 30]
              },
              {
                name: "Trousers",
                price: '3000',
                image: [
                  {img: "btrousersblue.jpg", color: 'blue',},
                ],
                quantity: 1,
                like: 0,
                sizes: [24, 26, 28, 30]
              },
              {
                name: "Trousers",
                price: '3000',
                image: [
                  {img: "btrouserswhite.jpg", color: 'white',},
                ],
                quantity: 1,
                like: 0,
                sizes: [24, 26, 28, 30]
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
            frontImg: "gcoatblack.jpg",
            coat: [
              {
                name: "Coat",
                price: '7000',
                image: [
                  {img: "gcoatblack.jpg", color: 'black',},

                ],
                quantity: 1,
                like: 0,
                sizes: [34, 36, 38, 40]
              },
              {
                name: "Coat",
                price: '7000',
                image: [
                  {img: "gcoatblue.jpg", color: 'blue',},

                ],
                quantity: 1,
                like: 0,
                sizes: [34, 36, 38, 40]
              },
              {
                name: "CoatLight",
                price: '7000',
                image: [
                  {img: "gcoatred.jpg", color: 'red',},
                ],
                quantity: 1,
                like: 0,
                sizes: [34, 36, 38, 40]
              },
              {
                name: "CoatLight",
                price: '7000',
                image: [
                  {img: "gcoatwhite.jpg", color: 'white',},
                ],
                quantity: 1,
                like: 0,
                sizes: [34, 36, 38, 40]
              },
            ],
          },
          {
            name: "shirts",
            frontImg: "gshirtblue.jpg",
            shirts: [
              {
                name: "Shirts",
                price: '2500',
                image: [
                  {img: "gshirtblue.jpg", color: 'blue',},
                ],
                quantity: 1,
                like: 0,
                sizes: [32, 34, 36, 38]
              },
              {
                name: "Shirts",
                price: '2500',
                image: [
                  {img: "gshirtred.jpg", color: 'red',},
                ],
                quantity: 1,
                like: 0,
                sizes: [32, 34, 36, 38]
              },
              {
                name: "Shirts",
                price: '2500',
                image: [
                  {img: "gshirtwhite.jpg", color: 'white',},
                ],
                quantity: 1,
                like: 0,
                sizes: [32, 34, 36, 38]
              },
            ],
          },
          {
            name: "shoes",
            frontImg: "gshoesblue.jpg",
            shoes: [
              {
                name: "Shoes",
                price: '5000',
                image: [
                  {img: "gshoesblue.jpg", color: 'blue',},
                ],
                quantity: 1,
                like: 0,
                sizes: [30, 32, 34, 36]
              },
              {
                name: "Shoes",
                price: '5000',
                image: [
                  {img: "gshoesgrey.jpg", color: 'grey',},
                ],
                quantity: 1,
                like: 0,
                sizes: [30, 32, 34, 36]
              },
              {
                name: "Shoes",
                price: '5000',
                image: [
                  {img: "gshoespink.jpg", color: 'pink',},
                ],
                quantity: 1,
                like: 0,
                sizes: [30, 32, 34, 36]
              },
            ],
          },
          {
            name: "trousers",
            frontImg: "gtrousersblack.jpg",
            trousers: [
              {
                name: "Trousers",
                price: '3000',
                image: [
                  {img: "gtrousersblack.jpg", color: 'black',},
                ],
                quantity: 1,
                like: 0,
                sizes: [24, 26, 28, 30]
              },
              {
                name: "Trousers",
                price: '3000',
                image: [
                  {img: "gtrousersred.jpg", color: 'red',},
                ],
                quantity: 1,
                like: 0,
                sizes: [24, 26, 28, 30]
              },
              {
                name: "Trousers",
                price: '3000',
                image: [
                  {img: "gtrouserswhite.png", color: 'white',},
                ],
                quantity: 1,
                like: 0,
                sizes: [24, 26, 28, 30]
              },
            ],
          },
        ],
      },
    ],
    selectedCategory: [],
    selectedCatalog: [],
    selectedProduct: [],
    cart: [],
  },
  mutations: {
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
      if (state.selectedCatalog[index].like < 1) {
        state.selectedCatalog[index].like++
      }
    },
    DECREMENT_CATALOG: (state, index) => {
      if (state.selectedCatalog[index].like > 1) {
        state.selectedCatalog[index].like--
      }
      console.log('mutationLike: ', state.selectedCatalog[index].like)
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
    INCREMENT_LIKE_CATALOG({commit}, index) {
      commit('INCREMENT_CATALOG', index)
    },
    DECREMENT_LIKE_CATALOG({commit}, index) {
      commit('DECREMENT_CATALOG', index)
    }
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
