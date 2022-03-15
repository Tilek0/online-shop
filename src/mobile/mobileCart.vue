<template>
  <div>
    <div class="mobileCart">
      <h2>{{ 'shoppingCart' | localize}}</h2>
      <h3
          v-if="!GET_CART.length"
          :style="{
          'font-size': '25px',
          color: '#f26659'
        }"
      >{{ 'cartIsEmpty' | localize}}</h3>
      <div class="mobileCart-item grassCard"
           v-for="(item,index) in GET_CART"
           :key="index"
           v-scroll-animation
      >
        <div class="mobileCart-item-name grassCard">
          <p>{{item.name}} :{{ 'item' | localize }}</p>
          <p>{{ "subtotal" | localize }}: {{item.price}} {{ 'currency' | localize}}</p>
          <my-button @myButtonEvent="deleteCard(index)"><img src="../assets/icons/exit.png" alt="#"></my-button>
        </div>
        <div class="mobileCart-item-photo" v-if="GET_CART.length">
          <img :src="require('../assets/' + item.image.img)" alt="dresses" v-scroll-animation>
        </div>
        <div class="mobileCart-item-desc grassCard" v-scroll-animation>
          <h2>{{item.name}}</h2>
          <div class="mobileCart-item-desc_blocks">
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
          <div class="mobileCart-item-desc_quantity">
            <p>{{ 'quantity' | localize }}:</p>
            <div class="mobileCart-item-desc_quantity__btn">
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
      <div class="mobileCart-total grassCard" v-if="GET_CART.length">
        <div class="mobileCart-total_sub">
          <p>{{ 'subtotal' | localize }}:</p>
          <p>{{totalPrice}} {{ 'currency' | localize}}</p>
        </div>
        <div class="mobileCart-total_total">
          <p>{{ 'orderTotal' | localize}}:</p>
          <p>{{totalPrice}} {{ 'currency' | localize}}</p>
        </div>
        <my-button @myButtonEvent="payment">{{ 'proceedToCheckout' | localize}}</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import cartMixin from "../mixins/cartMixin";
export default {
  name: "mobileCart",
  mixins: [cartMixin],
  computed: {
    totalPrice() {
      const total = this.GET_CART.map(item => item.price);
      let sum = 0;
      for (let i = 0; i <= total.length; i++) {
        sum += Number(total[i]);
      }
      return sum;
    }
  },
  methods: {
    payment() {
      this.$router.push('/Payment');
    }
  }
}
</script>

<style lang="scss" scoped>
.mobileCart {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .before-enter {
    transition: all 1s ease;
    opacity: 0;
    transform: translate(-100%, -100%);
  }
  .enter {
    opacity: 1;
    transform: translate(0) rotate(10deg);
  }
  &-item {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5%;
    margin-bottom: 8%;
    transform: rotate(10deg);
    transition: all .5s ease;

    &-name {
      display: flex;
      justify-content: space-around;
      width: 100%;
      align-items: center;
      transform: rotate(-10deg) translateX(-10%);
      margin-bottom: 2%;
      p {
        font-size: 1.4rem;
        color: slategrey;
        margin: 2% 0;
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
    &-photo {
      width: 45vh;
      height: 55vh;
      .before-enter {
        opacity: 0;
        transform: translateX(-100%);
        transition: all 2s ease;
      }
      .enter {
        opacity: 1;
        transform: translateX(0)
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .before-enter {
      opacity: 0;
      transition: all 1.6s ease;
      transform: translateY(-100%);
    }
    .enter {
      opacity: 1;
      transform: translateY(0) rotate(-10deg);
    }
    &-desc {
      width: 70%;
      height: content-box;
      display: flex;
      flex-direction: column;
      padding: 1%;
      margin-top: 3%;
      transform: rotate(-10deg);
      h2 {
        color: slategrey;
      }
      &_blocks {
        display: flex;
        justify-content: space-around;
      }
      &_quantity {
        display: flex;
        justify-content: space-around;
        &__btn {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
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
  &-total {
    width: 50%;
    padding: 2% 3%;
    margin-bottom: 16%;
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
    ::v-deep {
      button {
        padding: .7rem 0;
        transition: .2s ease-in;
        background: #f26659;
        margin-top: 4%;
        border-radius: 0;
        &:active {
          background: linear-gradient(160deg, #8ca9d3, #f0eff4);
        }
      }
    }
  }
}
@media (max-width: 470px) {
  .mobileCart {
    &-item {
      &-photo {
        width: 35vh;
        height: 45vh;
      }
    }
    &-total {
      margin-bottom: 24%;
    }
  }
}
</style>