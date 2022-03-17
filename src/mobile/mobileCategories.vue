<template>
  <div>
    <div @click="back" class="grassCard" :style="{width: '75px', height: '17px' ,'margin': '3%', padding: '1%'}">{{ 'back' | localize}}</div>
    <div class="mobileCategories" v-if="category_data.length">
      <div
          v-for="(item,i) in category_data"
          :key="i"
          class="mobileCategories-item grassCard"
          v-scroll-animation
      >
        <div class="mobileCategories-item-image" @click="toCatalog(item)">
          <img :src="require('../assets/'+ item.frontImg)" alt="#" v-scroll-animation>
        </div>
        <my-button @myButtonEvent="toCatalog(item)" v-scroll-animation>{{item.name | localize}}</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "../components/myButton";
import categoryMixin from "../mixins/categoryMixin";
export default {
  name: "mobileCatalog",
  components: {
    myButton
  },
  mixins: [categoryMixin],
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.mobileCategories {
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
    .before-enter {
      opacity: 0;
      transition: all 1.6s ease;
      transform: translateY(-100%);
    }
    .enter {
      opacity: 1;
      transform: translateY(0);
    }
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
    ::v-deep {
      button {
        border-radius: 0;
        padding: 2%;
        font-size: 16px;
        transform: rotate(-10deg);
        background: #f26659;
        color: #f0eff4;
      }
    }
  }
}
</style>