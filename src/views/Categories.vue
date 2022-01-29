<template>
  <div class="main">
    <h1>Categories</h1>
    <div class="main-category">
      <div
          v-for="item in category.clothes"
          :key="item.name"
          class="main-category-item"
          @click="toCatalog(item)"
      >
        <div class="main-category-item_icon">
          <img :src="require('../assets/man/' + item.frontImg)" alt="#" v-if="category.name === 'MAN'">
          <img :src="require('../assets/woman/' + item.frontImg)" alt="#" v-else-if="category.name === 'WOMAN'">
          <img :src="require('../assets/boy/' + item.frontImg)" alt="#" v-else-if="category.name === 'BOY'">
          <img :src="require('../assets/girl/' + item.frontImg)" alt="#" v-else>
        </div>
        <div class="main-category-item_desc">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
export default {
  name: "Categories",
  data () {
    return {
      category: '',
    }
  },
  computed: {
    ...mapGetters([
      'GET_CATEGORY',
    ]),
  },
  mounted() {
    this.category = this.GET_CATEGORY
  },
  methods: {
    ...mapActions([
      'CATCH_CATALOG'
    ]),
    toCatalog(i) {
      let catalog = this.category.clothes.find(item => item.name === i.name);
      switch (i.name) {
        case 'trousers':
          this.CATCH_CATALOG(catalog.trousers)
          break;
        case 'coat':
          this.CATCH_CATALOG(catalog.coat)
          break;
        case 'shirts':
          this.CATCH_CATALOG(catalog.shirts)
          break;
        case 'shoes':
          this.CATCH_CATALOG(catalog.shoes)
          break;
      }
      this.$router.push('/Catalog')
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  &-category {
    margin-top: 5%;
    display: flex;
    justify-content: space-evenly;
    &-item {
      display: flex;
      flex-direction: column;
      position: relative;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(2px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-right-color: rgba(255, 255, 255, 0.3);
      border-bottom-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
      transition: .5s ease;
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
        height: 470px;
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