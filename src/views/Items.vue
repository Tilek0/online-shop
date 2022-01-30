<template>
  <div class="main">
    <div
        class="item"
        @mousemove="addMouse"
        @mouseenter="changeMouse"
        @mouseleave="resetMouse"
    >
      <div
          class="item-card"
          :style="rotateStyle"
      >
        <div class="item-card_staff" v-if="product">
          <div class="item-card_staff_circle"></div>
          <img
              :src="require('../assets/woman/' + product.image)"
              alt="shop"
              v-if="category.name === 'WOMAN'"
              :style="{transform: visualItem ? `translateZ(200px) rotate(-40deg)` : `translateZ(0) rotate(0)`}"
          >
          <img
              :src="require('../assets/man/' + product.image)"
              alt="shop"
              v-else-if="category.name === 'MAN'"
              :style="{transform: visualItem ? `translateZ(200px) rotate(-40deg)` : `translateZ(0) rotate(0)`}"
          >
          <img
              :src="require('../assets/girl/' + product.image)"
              alt="shop"
              v-else-if="category.name === 'GIRL'"
              :style="{transform: visualItem ? `translateZ(200px) rotate(-40deg)` : `translateZ(0) rotate(0)`}"
          >
          <img
              :src="require('../assets/boy/' + product.image)"
              alt="shop"
              v-else
              :style="{transform: visualItem ? `translateZ(200px) rotate(-40deg)` : `translateZ(0) rotate(0)`}"
          >
        </div>
        <div class="item-card_info">
          <div class="item-card_info__title">
            <h1 :style="{transform: visualItem ? `translateZ(150px)` : `translateZ(0)`}">
              {{ product.name }}
            </h1>
            <div class="item-card_info__title__like" @click="like">
              <img src="../assets/icons/emptyLike.png" alt="like" v-if="product.like === null">
              <img src="../assets/icons/like.png" alt="like" v-else>
            </div>
          </div>
          <h3 :style="{transform: visualItem ? `translateZ(125px)` : `translateZ(0)`}">
            Price: {{ product.price }}
          </h3>
          <h2>Size:</h2>
          <div class="item-card_info_sizes"
               v-for="one in product.size"
               :key="one"
               :style="{transform: visualItem ? `translateZ(100px) translateY(-8px)` : `translateZ(0) translateY(0)`}"
          >
            <my-button class="item-card_info_sizes__btn" @myButtonEvent="addSize(one)">{{ one }}</my-button>
          </div>
          <div
              class="item-card_info_purchase"
              :style="{transform: visualItem ? `translateZ(75px)` : `translateZ(0)`}"
          >
            <my-button class="item-card_info_purchase__btn" @myButtonEvent="addToBug">Add to bag</my-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "../components/myButton";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "item",
  components: {
    myButton
  },
  data() {
    return {
      selectedSize: '',
      product: '',
      category: '',
      visualItem: false,
      rotateStyle: {
        transform: ''
      },
    }
  },
  computed: {
    ...mapGetters([
        'GET_PRODUCT',
        'GET_CATEGORY',
    ])
  },
  mounted() {
    this.product = this.GET_PRODUCT;
    this.category = this.GET_CATEGORY;
  },
  methods: {
    ...mapActions([
        'CATCH_CART',
    ]),
    addToBug() {
      // this.CATCH_CART(this.product);
      this.product.selectedSize = this.selectedSize
      console.log(this.product)
    },
    addSize(one) {
      this.selectedSize = one;
    },
    addMouse: function (e) {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      this.rotateStyle.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    },
    changeMouse() {
      this.visualItem = true
      this.rotateStyle.transition = 'none'
    },
    resetMouse() {
      this.visualItem = false
      this.rotateStyle.transition = `all 0.5s ease`;
      this.rotateStyle.transform = `rotateY(0) rotateX(0)`;
    },
    like() {
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20%;

  .item {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 900px;

    &-card {
      transform-style: preserve-3d;
      background: #f0eff4;
      min-height: 80vh;
      width: 35rem;
      border-radius: 30px;
      padding: 0 4rem;
      box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.2);

      &_staff {
        transform-style: preserve-3d;
        height: 330px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 330px;
          z-index: 2;
          transition: all 0.75s ease-out;
        }
        &_circle {
          width: 15rem;
          height: 15rem;
          background: linear-gradient(
                  to right,
                  rgba(245, 70, 66, 0.75),
                  rgba(8, 83, 156, 0.75)
          );
          position: absolute;
          border-radius: 50%;
          z-index: 1;
        }
      }

      &_info {
        transform-style: preserve-3d;

        &__title {
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            font-size: 3rem;
            transition: all 0.75s ease-out;
          }
          &__like {
            width: 35px;
            height: 35px;
            padding: 5px;
            margin-left: 1rem;
            transform-style: preserve-3d;
            img {
              width: 100%;
              height: 100%;
              transition: .3s ease;
              &:hover {
                transform: perspective(500px) translate3d(0, -5px, 100px);
              }
            }
          }
        }


        h3 {
          font-size: 1.7rem;
          padding: .2rem 0;
          font-weight: lighter;
          transition: all 0.75s ease-out;
        }

        h2 {
          color: #8ca9d3;
        }

        &_sizes {
          transform-style: preserve-3d;
          transition: all 0.75s ease-out;
          display: inline-block;

          &__btn {
            margin: 0 .5rem;

            ::v-deep {
              button {
                background: #ebc999;
                padding: .5rem 2rem;

                &:active {
                  background: linear-gradient(160deg, #8ca9d3, #f0eff4);
                }
              }
            }
          }
        }

        &_purchase {
          transform-style: preserve-3d;
          margin-top: 2rem;
          transition: all 0.75s ease-out;
          width: 100%;

          &__btn {
            ::v-deep {
              button {
                background: transparent;
                border: 3px solid #f26659;
                transition: .2s ease-in;
                padding: .8rem 0;
                color: black;

                &:hover {
                  background: #f26659;
                  color: #f0eff4;
                  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.5);
                }

                &:active {
                  background: linear-gradient(160deg, #8ca9d3, #f0eff4);
                  border: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>