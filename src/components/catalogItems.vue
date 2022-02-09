<template>
  <div class="catalog">
    <div class="catalog-items" v-for="(item,index) in catalog" :key="index">
      <div class="catalog-items_img"  @click="toCard(item)">
        <img
            :src="require(`../assets/${item.image.img}`)"
            alt="img"
        >
      </div>
      <div class="catalog-items_desc">
        <div>
          <p>{{item.name}}</p>
          <p>{{item.price}}</p>
          <div
              v-for="(color,i) in item.color"
              :key="i"
              @click="takeColor(color,index)"
              class="catalog-items_desc_color"
              :style="{background: color}"
          ></div>
        </div>
        <div class="catalog-items_desc__like" @click="likeSwitch">
          <img :src="require('../assets/icons/like.png')" alt="like" v-if="like">
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
      like: false,
      catalog: ''
    }
  },
  mounted() {
    this.catalog = JSON.parse(JSON.stringify(this.GET_CATALOG))
    let colors = this.catalog.map(item => item.image.map(item => item.color));
    let firstImage = this.catalog.map(item => item.image[0]);
    this.catalog.forEach((item, index) => {
      item.image = firstImage[index];
      item.color = colors[index];
    })
  },
  computed: {
    ...mapGetters([
      'GET_CATALOG',
    ]),
  },
  methods: {
    ...mapActions([
      'CATCH_PRODUCT',
    ]),
    toCard(i) {
      this.CATCH_PRODUCT(i)
      this.$router.push('/Items')
    },
    takeColor(color,i) {
      this.catalog[i].image = this.GET_CATALOG[i].image.find(item => item.color === color)
    },
    likeSwitch() {
      this.like = !this.like
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
      &_color {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
        margin: 5px 5px;
        display: inline-block;
        cursor: pointer;
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