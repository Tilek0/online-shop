<template>
  <div>
    <div class="mobileCatalog" v-if="catalog.length">
      <div
          v-for="(item,index) in catalog"
          :key="index"
          class="mobileCatalog-item grassCard"
          v-scroll-animation
      >
        <div class="mobileCatalog-item-image" @click="toItem(item)">
          <img
              :src="require(`../assets/${item.image[index === firstColor ? secondColor : 0].img}`)"
              alt="#" v-scroll-animation>
        </div>
        <div class="mobileCatalog-item-text grassCard" v-scroll-animation>
          <div>
            <p>{{item.name}}</p>
            <p>{{item.price}} {{ 'currency' | localize}}</p>
          </div>
          <div class="mobileCatalog-item-text__color"
               v-for="(color,i) in item.image"
               :key="i"
               :style="{background: index === firstColor && i === secondColor ? '#f26659' : ''}"
          >
            <div
                @click="takeColor(color,index,i)"
                class="mobileCatalog-item-text__color__selected"
                :style="{background: color.color}"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import catalogMixin from "../mixins/catalogMixin";
export default {
  name: "mobileCatalog",
  mixins: [catalogMixin],
}
</script>

<style lang="scss" scoped>
.mobileCatalog {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15%;
  .before-enter {
    opacity: 0;
    transition: all 1.6s ease;
    transform: translate(-100%,-100%) rotate(180deg);
  }
  .enter {
    opacity: 1;
    transform: translateX(0) rotate(10deg);
  }

  &-item {
    width: 30vh;
    height: 40vh;
    margin: 10% 5%;
    padding: 4% 2%;
    transform: rotate(10deg);

    &-image {
      width: 100%;
      height: 100%;
      .before-enter {
        opacity: 0;
        transition: all 2s ease;
        transform: translateX(100%);
      }
      .enter {
        opacity: 1;
        transform: translateX(0) rotate(-10deg);
      }
      img {
        width: 100%;
        height: 100%;
        transform: rotate(-10deg);
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
    &-text{
      font-size: 18px;
      transform: rotate(-10deg);
      width: 100%;
      height: content-box;
      p {
        margin: 5px;
      }
      &__color {
        border-radius: 50%;
        display: inline-block;
        margin: 0 3px;
        box-shadow: 0 0 20px 3px rgba(0, 0, 0, .6);
        &__selected {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin: 5px 5px;
          cursor: pointer;
        }
      }
    }
  }
}
@media (max-width: 530px) {
  .mobileCatalog {
    margin-bottom: 30%;
    &-item {
      margin: 18% 1%;
    }
  }
}
</style>