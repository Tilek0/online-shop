<template>
  <div>
    <div class="mobileHome">
      <div
          v-for="(item,i) in homePage"
          :key="i"
          class="mobileHome-item grassCard"
          v-scroll-animation
      >
        <div class="mobileHome-item-image" @click="toCategory(item.name)" v-scroll-animation>
            <img :src="require('../assets/'+ item.src)" alt="#">
        </div>
        <my-button @myButtonEvent="toCategory(item.name)" v-scroll-animation>{{item.name | localize}}</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "../components/myButton.vue";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "mobileHome",
  components: {
    myButton
  },
  data() {
    return {
      homePage: [
        {name: 'MAN', src: 'man.png'},
        {name: 'WOMAN', src: 'woman.png'},
        {name: 'BOY', src: 'boy.png'},
        {name: 'GIRL', src: 'girl.png'},
      ]
    }
  },
  mounted() {
    this.CATCH_ALL_PRODUCTS();
  },
  computed: {
    ...mapGetters([
      'GET_PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'CATCH_ALL_PRODUCTS'
    ]),
    toCategory(i) {
      let category = this.GET_PRODUCTS.find(item => item.name === i)
      this.$router.push({name: 'Categories', query: {category: i}, params: {category_data: category}});
    }
  }
}
</script>

<style lang="scss" scoped>
.mobileHome {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15%;
  .before-enter {
    opacity: 0;
    transform: translate(-100%,-100%) rotate(180deg);
    transition: all 1s ease;
  }
  .enter {
    opacity: 1;
    transform: translate(0) rotate(10deg);
  }
  &-item {
    width: 30vh;
    height: 40vh;
    margin: 10% 5%;
    padding: 3% 2%;
    transform: rotate(10deg);
    .before-enter {
      opacity: 0;
      transition: all 1.5s ease;
      transform: translateY(-100%);
    }
    .enter {
      opacity: 1;
      transform: translateY(0) ;
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
