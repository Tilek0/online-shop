<template>
  <div>
    <h2>{{ 'shoppingCart' | localize}}</h2>
    <h3
        v-if="!bagView.length"
        :style="{
          'font-size': '25px',
          color: '#f26659'
        }"
    >{{ 'cartIsEmpty' | localize}}</h3>
    <div class="bag">
      <div class="bag-item">
        <bag-item></bag-item>
      </div>
      <div class="bag-order" v-if="bagView.length">
        <h2>{{ 'orderSummary' | localize}}</h2>
        <div class="bag-order_sub">
          <p>{{ 'subtotal' | localize }}:</p>
          <p>{{totalPrice}}</p>
        </div>
        <div class="bag-order_total">
          <p>{{ 'orderTotal' | localize}}:</p>
          <p>{{totalPrice}}</p>
        </div>
        <div class="bag-order-btn">
          <my-button class="bag-order-btn_myBtn" @myButtonEvent="payment">{{ 'proceedToCheckout' | localize}}</my-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bagItem from "../components/bagItem";
import myButton from "../components/myButton";
import {mapGetters} from "vuex";
export default {
  name: "ShoppingBag",
  components: {
    bagItem,
    myButton,
  },
  data() {
    return {
      bagView: '',
    }
  },
  computed: {
    ...mapGetters([
      'GET_CART',
    ]),
    totalPrice() {
      const total = this.GET_CART.map(item => item.price);
      let sum = 0;
      for (let i = 0; i <= total.length; i++) {
        sum += Number(total[i]);
      }
      return sum;
    }
  },
  mounted() {
    this.bagView = this.GET_CART;
  },
  methods: {
    payment() {
      this.$router.push('/Payment');
    }
  }
}
</script>

<style lang="scss" scoped>
.bag {
  font-family: Arial,serif;
  font-weight: bold;
  margin-top: 5%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  &-item {
    width: 50%;
    height: 60%;
  }
  &-order {
    width: 30%;
    height: 25%;
    background: #ebc999;
    border-radius: 20px;
    padding: 0 3%;
    &_sub {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #000000;
    }
    &_total {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #000000;
    }
    &-btn {
      margin: 4% 0;
      ::v-deep {
        button {
          padding: .7rem 0;
          background: transparent;
          border: 3px solid #f26659;
          transition: .2s ease-in;
          &:hover {
            background: #f26659;
            color: #f0eff4;
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
</style>