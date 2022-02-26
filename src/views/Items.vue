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
              :src="require('../assets/' + product.image[checkedColor].img)"
              alt="shop"
              :style="{transform: visualItem ? `translateZ(200px) rotate(-25deg)` : `translateZ(0) rotate(0)`}"
          >
        </div>
        <div class="item-card_info">
          <div class="item-card_info__title">
            <h1 :style="{transform: visualItem ? `translateZ(150px)` : `translateZ(0)`}">
              {{ product.name }}
            </h1>
          </div>
          <div class="item-card_info__underTitle">
            <h3 :style="{transform: visualItem ? `translateZ(125px)` : `translateZ(0)`}">
              {{ 'price'| localize }}: {{ product.price }} {{ 'currency' | localize}}
            </h3>
            <div class="item-card_info__underTitle__like" @click="like">
              <img src="../assets/icons/emptyLike.png" alt="like" v-if="!likeSwitch">
              <img src="../assets/icons/like.png" alt="like" v-else>
            </div>
            <div
                v-for="(color,i) in product.image"
                :key="i"
                class="item-card_info__underTitle__color"
                :style="{
                  background: i === checkedColor ? '#f26659' : '',
                  transform: visualItem ? `translateZ(100px) translateY(-8px)` : `translateZ(0) translateY(0)`
                  }"
            >
              <div
                  @click="takeColor(i)"
                  class="item-card_info__underTitle__color__selected"
                  :style="{background: color.color}"
              ></div>
            </div>
          </div>
          <h2>{{ 'size' | localize }}:</h2>
          <div class="item-card_info_sizes"
               v-for="(one,i) in product.sizes"
               :key="i"
               :style="{transform: visualItem ? `translateZ(100px) translateY(-8px)` : `translateZ(0) translateY(0)`}"
          >
            <div
                class="item-card_info_sizes__btn"
                @click="addSize(one)"
                :class="{activeSize: one === selectedSize}"
            >{{ one }}
            </div>
          </div>
          <div
              class="item-card_info_purchase"
              :style="{transform: visualItem ? `translateZ(75px)` : `translateZ(0)`}"
          >
            <my-button
                class="item-card_info_purchase__btn"
                @myButtonEvent="addToBug"
                :class="{'item-card_info_purchase__btn__empty' : emptySize }"
            >{{ buttonText | localize}}
            </my-button>
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
      buttonText: 'addToBag',
      emptySize: false,
      selectedSize: null,
      visualItem: false,
      rotateStyle: {
        transform: ''
      },
      likeSwitch: false,
      checkedColor: 0,
    }
  },
  mounted() {

  },

  computed: {
    ...mapGetters([
      'GET_PRODUCT',
    ]),
    product() {
      let getProduct = this.GET_PRODUCT
      getProduct.ID = this.uid;
      return getProduct
    }
  },

  methods: {
    ...mapActions([
      'CATCH_CART',
    ]),
    addToBug() {
      if (this.selectedSize !== null) {
        let image = JSON.parse(JSON.stringify(this.product));
        image.selectedSize = this.selectedSize;
        image.image = image.image[this.checkedColor];
        delete image.colors;
        this.CATCH_CART(image);
      } else {
        this.buttonText = 'selectSizeNote';
        this.emptySize = true;
      }
    },
    addSize(one) {
      this.selectedSize = one;
      this.emptySize = false;
      this.buttonText = 'addToBag';
    },
    addMouse: function (e) {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      this.rotateStyle.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    },
    changeMouse() {
      this.visualItem = true;
      this.rotateStyle.transition = 'none';
    },
    resetMouse() {
      this.visualItem = false
      this.rotateStyle.transition = `all 0.5s ease`;
      this.rotateStyle.transform = `rotateY(0) rotateX(0)`;
    },
    takeColor (i) {
      this.checkedColor = i;

    },
    like() {
      this.likeSwitch = !this.likeSwitch;
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
  margin-top: 4%;

  .item {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 900px;

    &-card {
      transform-style: preserve-3d;
      background: #f0eff4;
      min-height: 85vh;
      width: 35rem;
      border-radius: 30px;
      padding: 1rem 4rem;
      box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.2);

      &_staff {
        transform-style: preserve-3d;
        height: 330px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 330px;
          max-height: 410px;
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
          margin-top: 10%;
          transform-style: preserve-3d;
          display: flex;
          flex-direction: column;
          align-items: center;

          h1 {
            font-size: 3rem;
            color: slategrey;
            transition: all 0.75s ease-out;
          }
        }

        &__underTitle {
          display: flex;
          justify-content: space-around;
          align-items: center;
          transform-style: preserve-3d;

          &__like {
            width: 45px;
            height: 45px;
            padding: 5px;
            margin-left: 1rem;
            transform-style: preserve-3d;

            img {
              width: 100%;
              height: 100%;
              transition: .4s ease;

              &:hover {
                transform: perspective(500px) translate3d(0, -5px, 65px);
              }
            }
          }
          &__color {
            border-radius: 50%;
            display: inline-block;
            padding: 7px;
            transition: .5s ease;
            box-shadow: 0 0 20px 3px rgba(0, 0, 0, .8);
            &__selected {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              cursor: pointer;
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
            border: none;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
            border-radius: 30px;
            background: #ebc999;
            padding: .3rem 2rem;
            cursor: pointer;
            font-weight: bold;
          }

          .activeSize {
            background: linear-gradient(160deg, #8ca9d3, #f0eff4);
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
                font-size: 15px;
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

            &__empty {
              ::v-deep {
                button {
                  color: red !important;

                  &:hover {
                    background: transparent;
                  }
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