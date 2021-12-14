<template>
  <div class="catalog">
    <div class="catalog-items" @click="$router.push('/Items')">
      <div class="catalog-items_img"><img :src="require('../assets/man/categories/'+ catalog_data.image)" alt="img"></div>
      <div class="catalog-items_desc">
        <p>{{catalog_data.name}}</p>
        <p>{{catalog_data.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "catalogItems",
  props: {
    catalog_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  &-items {
    display: flex;
    flex-direction: column;
    transition: .4s ease-in;
    border-radius: 15px;
    background: #f0eff4;
    &:hover {
      color: #f26659;
      box-shadow: 7px 7px 15px 2px rgba(0, 0, 0, .5);
    }
    &_img {
      width: 200px;
      height: 300px;
      overflow: hidden;
      border-radius: 15px;
      img {
        width: 100%;
        height: 100%;
        transition: .7s ease;
        &:hover {
          transform: scale(1.3);
        }
      }
    }
  }
}
</style>