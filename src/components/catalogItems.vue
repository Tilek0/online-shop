<template>
  <div class="catalog">
    <div class="catalog-items grassCard" v-for="(item,index) in catalog" :key="index">
      <div class="catalog-items_img"  @click="toItem(item)">
        <img
            :src="require(`../assets/${item.image[index === firstColor ? secondColor : 0].img}`)"
            alt="img"
        >
      </div>
      <div class="catalog-items_desc">
        <div>
          <p>{{item.name}}</p>
          <p>{{item.price}} {{ 'currency' | localize}}</p>
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
import {mapActions} from "vuex";
import catalogMixin from "../mixins/catalogMixin";

export default {
  name: "catalogItems",
  mixins: [catalogMixin],
  methods: {
    ...mapActions([
      'INCREMENT_LIKE_CATALOG',
      'DECREMENT_LIKE_CATALOG',
    ]),

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
  display: flex;
  &-items {
    margin: 8px;
    display: flex;
    flex-direction: column;
    transition: .3s ease-in;
    border-radius: 15px;
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