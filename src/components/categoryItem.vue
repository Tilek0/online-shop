<template>
  <div>
    <div class="category" @click="$router.push('Catalog')">
      <div class="category-icon">
        <img :src="require('../assets/woman/categories/' + category_data.image)" alt="img">
      </div>
      <div class="category-desc">{{category_data.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "categoryItem",
  props: {
    category_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 7px 7px 15px 2px rgba(0, 0, 0, .6);
  border-radius: 20px;
  background: #f0eff4;
  transition: .5s ease;
  &:hover {
    color: #f26659;
    transform: translate(-3%,-8%);
  }
  &::after {
    content: "";
    background: #ebc999;
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
  &-icon {
    width: 250px;
    height: 350px;
    background: #f0eff4;
    overflow: hidden;
    border-radius: 20px;
    img {
      width: 100%;
      height: 100%;
    }
   }
}
</style>