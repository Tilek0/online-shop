<template>
  <div class="catalog">
    <div class="catalog-items">
      <div class="catalog-items_img" @click="$router.push('/Items')">
        <img :src="require('../assets/man/categories/'+ catalog_data.image)" alt="img">
      </div>
      <div class="catalog-items_desc">
        <div @click="$router.push('/Items')">
          <p>{{catalog_data.name}}</p>
          <p>{{catalog_data.price}}</p>
        </div>
        <div class="catalog-items_desc__like" @click="isLike = !isLike">
          <img src="../assets/icons/emptyLike.png" alt="like" v-if="!isLike">
          <img src="../assets/icons/like.png" alt="like" v-else>
        </div>
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
  },
  data() {
    return {
      isLike: false,
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
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.3);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
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
    &_desc {
      display: flex;
      justify-content: space-around;
      p {
        margin: 1px;
      }
      &__like {
        width: 35px;
        height: 35px;
        padding: 5px;
        img {
          width: 100%;
          height: 100%;
          transition: .3s ease;
          &:hover {
            transform: perspective(500px) translate3d(0, -5px, 100px);
          }
        }
      }
    }
  }
}
</style>