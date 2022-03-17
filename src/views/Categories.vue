<template>
  <div class="main">
    <h1>{{ 'categories' | localize}}</h1>
    <mobile-categories :category_data="GET_CATEGORY.length ? GET_CATEGORY : category_data" v-if="GET_MOBILE"/>
    <div class="main-category" v-else>
      <div
          v-for="item in GET_CATEGORY.length ? GET_CATEGORY : category_data"
          :key="item.name"
          class="main-category-item grassCard"
          @click="toCatalog(item)"
      >
        <div class="main-category-item_icon" v-if="item.frontImg">
          <img :src="require('../assets/' + item.frontImg)" alt="#">
        </div>
        <div class="main-category-item_desc">{{item.name | localize}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import mobileCategories from "../mobile/mobileCategories";
import categoryMixin from "../mixins/categoryMixin";
import {mapGetters} from "vuex";
export default {
  name: "Categories",
  components: {
    mobileCategories
  },

  mixins: [categoryMixin],
  computed: {
    ...mapGetters([
      'GET_CATEGORY',
      'GET_MOBILE'
    ]),
  },
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  &-category {
    margin-top: 5%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    &-item {
      display: flex;
      flex-direction: column;
      position: relative;
      border-radius: 20px;
      transition: .5s ease;
      margin-bottom: 4%;
      &:hover {
        color: #f26659;
        transform: translate(-3%,-8%);
      }
      &::after {
        content: "";
        background: #8ca9d3;
        width: 100%;
        height: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all .4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        opacity: .4;
        border-radius: 20px;
      }
      &:hover::after {
        height: 100%;
      }
      &_icon {
        width: 250px;
        height: 400px;
        background: #f0eff4;
        overflow: hidden;
        border-radius: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

</style>