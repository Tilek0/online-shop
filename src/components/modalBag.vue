<template>
  <div class="modal">
    <div class="modal-title">
      <h2>Shopping Bag</h2>
      <div class="modal-title-exit">
        <my-button>X</my-button>
      </div>
    </div>
    <div class="modal-buttons">
      <my-button v-for="item in btn" :key="item" class="modal-buttons_btn">{{item.name}}</my-button>
    </div>
    <div class="modal-bag">
      <bag-item></bag-item>
    </div>
  </div>
</template>

<script>
import myButton from "./myButton";
import bagItem from "./bagItem";
export default {
  name: "modalBag",
  components: {
    myButton,
    bagItem
  },
  data() {
    return {
      btn: [
        {name: 'VIEW BAG', to: '/Bag'},
        {name: 'PROCEED TO CHECKOUT', to: '/Purchase'}
      ]
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
    &-exit {
      ::v-deep{
        button {
          background: transparent;
          padding: 5px 10px;
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