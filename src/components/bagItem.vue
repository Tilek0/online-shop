<template>
  <div class="bagPack">
    <div class="bagPack-totalInfo">
      <p>{{}} :item</p>
      <p>Subtotal: {{}}</p>
    </div>
    <div class="bagPack-item">
      <div class="bagPack-item-img">
        <img src="../assets/woman/dressBlue.jpg" alt="dresses">
      </div>
      <div class="bagPack-item-content">
        <div class="bagPack-item-content-title">
          <p>{{}}</p>
          <my-button><img src="../assets/icons/exit.png" alt="#"></my-button>
        </div>
        <div class="bagPack-item-content_info">
          <div>
            <p>Price:</p>
            <p>Colour:</p>
            <p>Size:</p>
          </div>
          <div>
            <p>{{}}</p>
            <p>{{}}</p>
            <p>{{}}</p>
          </div>
        </div>
        <div class="bagPack-item-content-quantity">
          <p>Quantity:</p>
          <div class="bagPack-item-content-quantity-btn">
            <my-button><img src="../assets/icons/plus.png" alt="#"></my-button>
            <p>1</p>
            <my-button><img src="../assets/icons/minus.png" alt="#"></my-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "./myButton";
export default {
  name: "bagItem",
  components: {
    myButton
  }
}
</script>

<style lang="scss" scoped>
.bagPack {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.3);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  &-totalInfo {
    display: flex;
    justify-content: space-around;
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