<template>
  <div class="mobileMain">
    <div class="mobileItem grassCard" v-scroll-animation>
      <div class="mobileItem-image" v-if="data_item">
        <img :src="require('../assets/' + data_item.image[checkedColor].img)" alt="#" v-scroll-animation>
      </div>
      <div class="mobileItem-desc grassCard">
        <h2>{{data_item.name}}</h2>
        <div class="mobileItem-desc_text" v-scroll-animation>
          <p>{{ 'price'| localize }}: {{ data_item.price }} {{ 'currency' | localize}}</p>
          <div
              v-for="(color,i) in data_item.image"
              :key="i"
              class="mobileItem-desc_text__color"
              :style="{
                  background: i === checkedColor ? '#f26659' : '',
                  }"
          >
            <div
                @click="takeColor(i)"
                class="mobileItem-desc_text__color__selected"
                :style="{background: color.color}"
            ></div>
          </div>
        </div>
        <p>{{ 'size' | localize }}:</p>
        <div class="mobileItem-desc_size"
             v-for="(one,i) in data_item.sizes"
             :key="i"
        >
          <div
              class="mobileItem-desc_size__btn"
              @click="addSize(one)"
              :class="{activeSize: one === selectedSize}"
              v-scroll-animation
          >{{ one }}
          </div>
        </div>
        <div class="mobileItem-desc_purchase">
          <my-button
              class="mobileItem-desc_purchase__btn"
              @myButtonEvent="addToBug"
              :class="{'mobileItem-desc_purchase__btn__empty' : emptySize }"
              v-scroll-animation
          >{{ buttonText | localize}}
          </my-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myButton from "../components/myButton";
import itemMixin from "../mixins/itemMixin";
export default {
  name: "mobileItems",
  components: {
    myButton
  },
  mixins: [itemMixin],
}
</script>

<style lang="scss" scoped>
.mobileMain {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 4%;
  margin-bottom: 3%;
  .before-enter {
    transition: all 1s ease;
    opacity: 0;
    transform: translate(-100%, -100%);
  }
  .enter {
    opacity: 1;
    transform: translate(0);
  }
  .mobileItem {
    position: relative;
    width: 80%;
    height: 100%;
    padding: 0;
    transform: rotate(5deg);
    display: flex;
    justify-content: center;

    &-image {
      width: 45vh;
      height: 65vh;
      .before-enter {
        opacity: 0;
        transform: translateX(-100%);
        transition: all 2s ease;
      }
      .enter {
        opacity: 1;
        transform: translateX(0) rotate(-10deg);
      }

      img {
        width: 100%;
        height: 100%;
        transform: rotate(-5deg);
      }
    }

    &-desc {
      position: absolute;
      padding: 1rem .5rem;
      bottom: -12rem;
      font-size: 18px;
      transform: rotate(-5deg);
      width: 85%;
      height: content-box;
      h2 {
        margin: 0;
      }
      p {
        margin: 5px 0;
      }
      .before-enter {
        opacity: 0;
        transform: translateX(100%);
        transition: all 2.2s ease;
      }
      .enter {
        opacity: 1;
        transform: translateX(0);
      }
      &_text {
        display: flex;
        justify-content: space-evenly;
        &__color {
          border-radius: 50%;
          display: inline-block;
          padding: 5px;
          transition: .5s ease;
          box-shadow: 0 0 20px 3px rgba(0, 0, 0, .8);
          &__selected {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
          }
        }
      }
      &_size {
        display: inline-block;
        .before-enter {
          opacity: 0;
          transform: translateY(-100%);
          transition: all 2.5s ease;
        }
        .enter {
          opacity: 1;
          transform: translateY(0);
        }
        &__btn {
          margin: 0 .3rem 8px .3rem;
          border: none;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          background: #ebc999;
          padding: .2rem 1.5rem;
        }
        .activeSize {
          background: linear-gradient(160deg, #8ca9d3, #f0eff4);
        }
      }
      &_purchase {
        margin-top: 1rem;
        width: 100%;
        .before-enter {
          opacity: 0;
          transform: translateX(-100%);
          transition: all 2.7s ease;
        }
        .enter {
          opacity: 1;
          transform: translateX(0);
        }

        &__btn {
          ::v-deep {
            button {
              font-size: 15px;
              background: #f26659;
              transition: .2s ease-in;
              padding: .8rem 0;
              color: #f0eff4;
              border-radius: 0;
              &:active {
                color: black;
                background: #8ca9d3;
                box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.5);
              }
            }
          }
          &__empty {
            ::v-deep {
              button {
                background: darkgrey;
                color: red !important;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 470px) {
  .mobileMain {
    min-height: 90vh;
    margin-bottom: 0;
    .mobileItem {
      &-image {
        width: 30vh;
        height: 50vh;

        img {
          width: 100%;
          height: 100%;
          transform: rotate(-5deg);
        }
      }
      &-desc {
        h2 {
          font-size: 1.2rem;
        }
      }
    }
  }
}

</style>