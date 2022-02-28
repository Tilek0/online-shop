<template>
  <div>
    <div class="bagPack" v-for="(item, index) of bug" :key="index">
      <div class="bagPack-totalInfo">
        <p>{{item.name}} :{{ 'item' | localize }}</p>
        <p>{{ "subtotal" | localize }}: {{item.price}} {{ 'currency' | localize}}</p>
      </div>
      <div class="bagPack-item">
        <div class="bagPack-item-img" v-if="bug">
          <img :src="require('../assets/' + item.image.img)" alt="dresses">
        </div>
        <div class="bagPack-item-content">
          <div class="bagPack-item-content-title">
            <p>{{item.name}}</p>
            <my-button @myButtonEvent="deleteCard(index)"><img src="../assets/icons/exit.png" alt="#"></my-button>
          </div>
          <div class="bagPack-item-content_info">
            <div>
              <p>{{ 'price' | localize }}:</p>
              <p>{{ 'color' | localize }}:</p>
              <p>{{ 'size' | localize }}:</p>
            </div>
            <div>
              <p>{{item.price}} {{ 'currency' | localize}}</p>
              <p>{{item.image.color}}</p>
              <p>{{item.selectedSize}}</p>
            </div>
          </div>
          <div class="bagPack-item-content-quantity">
            <p>{{ 'quantity' | localize }}:</p>
            <div class="bagPack-item-content-quantity-btn">
              <my-button @myButtonEvent="increment(index)">
                <img src="../assets/icons/plus.png" alt="#">
              </my-button>
              <p v-if="item.quantity">{{item.quantity}}</p>
              <p v-else>1</p>
              <my-button @myButtonEvent="decrement(index)">
                <img src="../assets/icons/minus.png" alt="#">
              </my-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "./myButton";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "bagItem",
  components: {
    myButton
  },
  data() {
    return {
      bug: '',
    }
  },
  computed: {
    ...mapGetters([
        'GET_CART',
    ]),
  },
  mounted() {
    this.bug = this.GET_CART;
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_PRODUCT',
      'DECREMENT_PRODUCT'
    ]),
    deleteCard(i) {
      this.DELETE_FROM_CART(i)
    },
    increment(i) {
      this.INCREMENT_PRODUCT(i)
    },
    decrement(i) {
      this.DECREMENT_PRODUCT(i)
    }
  }
}
</script>

<style lang="scss" scoped>
.bagPack {
  font-family: Arial,serif;
  font-weight: bold;
  background: #ebc999;
  border-radius: 20px;
  width: 400px;
  height: 100%;
  margin-bottom: 12px;
  padding: 1%;
  &-totalInfo {
    display: flex;
    justify-content: space-around;
    p {
      font-size: 18px;
    }
  }
  &-item {
    display: flex;
    &-img {
      width: 200px;
      height: 100%;
      img {
        width: 100%;
        height: 90%;
        border-radius: 20px;
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      width: 40%;
      &-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        p {
          font-size: 25px;
          color: slategrey;
        }
        img {
          width: 25px;
          height: 25px;
        }
        ::v-deep{
          button {
            background: transparent;
            width: 100%;
            padding-top: 5px;
            &:active {
              background: #f26659;
            }
          }
        }
      }
      &_info {
        display: flex;
        justify-content: space-around;
        text-align: start;
      }
      &-quantity {
        display: flex;
        justify-content: space-around;
        &-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 25px;
            height: 25px;
          }
          p {
            margin: 0 5px;
          }
          ::v-deep{
            button {
              background: transparent;
              width: 100%;
              padding-top: 5px;
              &:active {
                background: #f26659;
              }
            }
          }
        }
      }
    }
  }
}
</style>