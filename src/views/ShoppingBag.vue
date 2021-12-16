<template>
  <div>
    <h2>Shopping Bag</h2>
    <div class="bag">
      <div class="bag-item">
        <bag-item></bag-item>
      </div>
      <div class="bag-order">
        <h2>Order Summary</h2>
        <div class="bag-order_sub">
          <p>Subtotal:</p>
          <p>{{}}</p>
        </div>
        <div class="bag-order_total">
          <p>Order Total:</p>
          <p>{{}}</p>
        </div>
        <div class="bag-order-btn">
          <my-button class="bag-order-btn_myBtn">Proceed to Checkout</my-button>
        </div>
      </div>
    </div>
    <div class="showModal">
      <modal-bag></modal-bag>
    </div>
  </div>
</template>

<script>
import bagItem from "../components/bagItem";
import myButton from "../components/myButton";
import modalBag from "../components/modalBag";
export default {
  name: "ShoppingBag",
  components: {
    bagItem,
    myButton,
    modalBag
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.showModal {
  width: 30%;
  position: fixed;
  top: 10%;
  right: 15%;
  ::v-deep {
    .bagPack {
      background: #f0eff4;
    }
  }
}
.bag {
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
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.3);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
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