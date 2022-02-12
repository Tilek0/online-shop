<template>
  <div class="catalog">
    <div class="catalog-items" v-for="(item,index) in catalog" :key="index">
      <div class="catalog-items_img"  @click="toCard(item)">
        <img
            :src="require(`../assets/${item.image[index === firstColor ? secondColor : 0].img}`)"
            alt="img"
        >
      </div>
      <div class="catalog-items_desc">
        <div>
          <p>{{item.name}}</p>
          <p>{{item.price}}</p>
          <div class="catalog-items_desc_color"
               v-for="(color,i) in item.image"
               :key="i"
               :style="{background: index === firstColor && i === secondColor ? '#f26659' : ''}"
          >
            <div
                @click="takeColor(color,index,i)"
                class="catalog-items_desc_color__selected"
                :style="{background: color.color}"
            ></div>
          </div>
        </div>
        <div class="catalog-items_desc__like" @click="likeSwitch(index)">
          <img :src="require('../assets/icons/like.png')" alt="like" v-if="item.like !== 0">
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
      firstColor: 0,
      secondColor: 0,
    }
  },
  watch: {
    catalog() {
      this.firstColor = 0;
      this.secondColor = 0;
    }
  },
  computed: {
    ...mapGetters([
      'GET_CATALOG',
    ]),
    catalog() {
      return this.GET_CATALOG;
    }
  },
  methods: {
    ...mapActions([
      'CATCH_PRODUCT',
      'INCREMENT_LIKE_CATALOG',
      'DECREMENT_LIKE_CATALOG',
    ]),
    toCard(i) {
      this.CATCH_PRODUCT(i);
      this.$router.push('/Items');
    },
    takeColor(color,index,i) {
      this.firstColor = index;
      this.secondColor = i;
    },
    likeSwitch(i) {
      this.like = !this.like;
      if (this.like === true) {
        this.INCREMENT_LIKE_CATALOG(i);
      }else {
        this.DECREMENT_LIKE_CATALOG(i);
      }
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
      justify-content: space-between;
      p {
        margin: 2px;
        text-align: start;
      }
      &_color {
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