<template>
  <div>
    <div class="bagPack" v-for="(item, index) of bug" :key="index">
      <div class="bagPack-totalInfo">
        <p>{{item.name}} :item</p>
        <p>Subtotal: {{}}</p>
      </div>
      <div class="bagPack-item">
        <div class="bagPack-item-img" v-if="bug">
          <img :src="require('../assets/woman/' + item.image)" alt="dresses" v-if="category.name === 'WOMAN'">
          <img :src="require('../assets/man/' + item.image)" alt="dresses" v-else-if="category.name === 'MAN'">
          <img :src="require('../assets/girl/' + item.image)" alt="dresses" v-else-if="category.name === 'GIRL'">
          <img :src="require('../assets/boy/' + item.image)" alt="dresses" v-else>
        </div>
        <div class="bagPack-item-content">
          <div class="bagPack-item-content-title">
            <p>{{item.name}}</p>
            <my-button @myButtonEvent="deleteCard(index)"><img src="../assets/icons/exit.png" alt="#"></my-button>
          </div>
          <div class="bagPack-item-content_info">
            <div>
              <p>Price:</p>
              <p>Colour:</p>
              <p>Size:</p>
            </div>
            <div>
              <p>{{item.price}}</p>
              <p>{{item.color}}</p>
              <p>{{}}</p>
            </div>
          </div>
          <div class="bagPack-item-content-quantity">
            <p>Quantity:</p>
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
      category: '',
    }
  },
  computed: {
    ...mapGetters([
        'GET_BUG',
      'GET_CATEGORY',
    ]),
  },
  mounted() {
    this.bug = this.GET_BUG;
    this.category = this.GET_CATEGORY
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_BUG',
      'INCREMENT_PRODUCT',
      'DECREMENT_PRODUCT'
    ]),
    deleteCard(i) {
      this.DELETE_FROM_BUG(i)
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
  background: #ebc999;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  margin-bottom: 12px;
  &-totalInfo {
    display: flex;
    justify-content: space-around;
    p {
      font-size: 20px;
    }
  }
  &-item {
    display: flex;
    justify-content: space-around;
    &-img {
      width: 200px;
      height: 280px;
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
        padding: 0 3%;
        p {
          font-size: 25px;
        }
        img {
          width: 100%;
          height: 100%;
        }
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
      &_info {
        display: flex;
        justify-content: space-around;
      }
      &-quantity {
        display: flex;
        justify-content: space-around;
        &-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: 100%;
          }
          p {
            margin: 0 5px;
          }
          ::v-deep{
            button {
              background: transparent;
              width: 60%;
              padding-top: 5px;
              font-size: 16px;
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