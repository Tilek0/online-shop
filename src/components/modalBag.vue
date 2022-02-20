<template>
  <div class="modal">
    <div class="modal-title">
      <h2>{{ 'shoppingCart' | localize }}</h2>
      <div class="modal-title-exit">
        <my-button @myButtonEvent="closeModal"><img src="../assets/icons/exit.png" alt="#"></my-button>
      </div>
    </div>
    <div class="modal-buttons">
      <my-button
          class="modal-buttons_btn"
          @myButtonEvent="bagLink"
      >{{ 'viewCart' | localize }}</my-button>
      <my-button
          class="modal-buttons_btn"
          @myButtonEvent="proceedLink"
      >{{ 'proceedToCheckout' | localize }}</my-button>
    </div>
    <div class="modal-bag">
      <div
          v-show="!bagView.length"
          :style="{
            'font-size': '25px',
            color: '#f26659'
          }">{{ 'cartIsEmpty' | localize}}</div>
      <bag-item></bag-item>
    </div>
  </div>
</template>

<script>
import myButton from "./myButton";
import bagItem from "./bagItem";
import {mapGetters} from "vuex";
export default {
  name: "modalBag",
  components: {
    myButton,
    bagItem
  },
  data() {
    return {
      bagView: ''
    }
  },
  computed: {
    ...mapGetters([
        'GET_CART'
    ])
  },
  mounted() {
    this.bagView = this.GET_CART;
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    bagLink() {
      this.$router.push('/Bag');
    },
    proceedLink() {
      this.$router.push('/Payment');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.3);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 3%;
  &-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
    &-exit {
      ::v-deep{
        button {
          background: transparent;
          width: 65%;
          padding-top: 5px;
          &:active {
            background: #f26659;
          }
        }
      }
    }
  }
  &-buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3%;
    align-items: center;
    &_btn {
      width: 100%;
      ::v-deep {
        button {
          background: transparent;
          line-height: 30px;
          width: 80%;
          border: 2px solid #f26659;
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