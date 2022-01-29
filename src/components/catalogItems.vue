<template>
  <div class="catalog">
    <div class="catalog-items" v-for="(item, index) in catalog" :key="item.image">
      <div class="catalog-items_img" @click="toCard(item)">
        <img :src="require('../assets/man/'+ item.image)" alt="img" v-if="category.name === 'MAN'">
        <img :src="require('../assets/woman/'+ item.image)" alt="img" v-else-if="category.name === 'WOMAN'">
        <img :src="require('../assets/girl/'+ item.image)" alt="img" v-else-if="category.name === 'GIRL'">
        <img :src="require('../assets/boy/'+ item.image)" alt="img" v-else>
      </div>
      <div class="catalog-items_desc">
        <div @click="$router.push('/Items')">
          <p>{{item.name}}</p>
          <p>{{item.price}}</p>
        </div>
        <div class="catalog-items_desc__like" @click="like(index)">
          <img :src="require('../assets/icons/like.png')" alt="like" v-if="item.like !== null">
          <img :src="require('../assets/icons/emptyLike.png')" alt="like" v-else>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "catalogItems",
  data() {
    return {
      category: '',
      catalog: '',
    }
  },
  computed: {
    ...mapGetters([
      'GET_CATEGORY',
      'GET_CATALOG'
    ]),
  },
  mounted() {
    this.catalog = this.GET_CATALOG;
    this.category = this.GET_CATEGORY;
  },
  methods: {
    ...mapActions([
      'CATCH_PRODUCT',
      'LIKE_CATALOG'
    ]),
    toCard(i) {
      this.CATCH_PRODUCT(i)
      this.$router.push('/Items')
    },
    like(i) {
      this.LIKE_CATALOG(i)
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  &-items {
    margin: 8px;
    display: flex;
    flex-direction: column;
    transition: .3s ease-in;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.3);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    &:hover {
      color: #f26659;
      box-shadow: 7px 20px 20px 3px rgba(0, 0, 0, .4);
    }
    &_img {
      width: 200px;
      height: 300px;
      overflow: hidden;
      border-radius: 15px;
      img {
        width: 100%;
        height: 100%;
        transition: .5s ease;
        &:hover {
          transform: scale(1.2);
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