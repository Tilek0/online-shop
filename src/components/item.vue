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
        <div class="item-card_staff">
          <div class="item-card_staff_circle"></div>
          <img
              :src="require('../assets/icons/' + product_data.img)"
              alt="shop"
              :style="{transform: visualItem ? `translateZ(200px) rotate(-40deg)` : `translateZ(0) rotate(0)`}"
          >
        </div>
        <div class="item-card_info">
          <h1 :style="{transform: visualItem ? `translateZ(150px)` : `translateZ(0)`}">
            {{product_data.title}}
          </h1>
          <h3 :style="{transform: visualItem ? `translateZ(125px)` : `translateZ(0)`}">
            Price: {{product_data.price}}
          </h3>
          <h2>Size:</h2>
          <div class="item-card_info_sizes"
               v-for="size in product_data.sizes"
               :key="size"
               :style="{transform: visualItem ? `translateZ(100px) translateY(-8px)` : `translateZ(0) translateY(0)`}"
          >
            <my-button class="item-card_info_sizes__btn">{{ size }}</my-button>
          </div>
          <div
              class="item-card_info_purchase"
              :style="{transform: visualItem ? `translateZ(75px)` : `translateZ(0)`}"
          >
            <my-button class="item-card_info_purchase__btn">Purchase</my-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "./myButton";
export default {
  name: "item",
  components: {
    myButton
  },
  props: {
    product_data: {
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      visualItem: false,
      rotateStyle: {
        transform: ''
      },
    }
  },
  computed: {},
  methods: {
    addMouse: function(e) {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      this.rotateStyle.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    },
    changeMouse() {
      this.visualItem = true
      this.rotateStyle.transition = 'none'
    },
    resetMouse() {
      this.visualItem = false
      this.rotateStyle.transition = `all 0.5s ease`;
      this.rotateStyle.transform = `rotateY(0) rotateX(0)`;
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

  .item {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 900px;
    &-card {
      transform-style: preserve-3d;
      background: #f0eff4;
      min-height: 80vh;
      width: 35rem;
      border-radius: 30px;
      padding: 0 4rem;
      box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.2);
      &_staff {
        transform-style: preserve-3d;
        min-height: 35vh;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 20rem;
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
        h1 {
          font-size: 3rem;
          transition: all 0.75s ease-out;
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
            ::v-deep {
              button {
                background: #ebc999;
                padding: .5rem 2rem;
                &:active {
                  background: linear-gradient(160deg, #8ca9d3, #f0eff4);
                }
              }
            }
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
                background: #f26659;
                padding: 1rem 0;
                color: black;
                &:hover {
                  color: #f0eff4;
                  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.5);
                }
                &:active {
                  background: linear-gradient(160deg, #8ca9d3, #f0eff4);
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