<template>
  <div>
    <mobile-home v-if="GET_MOBILE" />
    <div class="home" v-else>
      <div class="home-main">
        <div class="home-main-preCard">
          <div
              class="home-main-preCard-cards grassCard"
              v-for="(item,index) in mainPage"
              :key="item.name"
              @mouseover="showPhoto(index)"
              @mouseleave="clearHover"
              @click="toCategory(item.name)"
          >
            <my-button class="home-main-preCard-cards_text" @myButtonEvent="toCategory(item.name)">{{item.name | localize}}</my-button>
            <div class="home-main-preCard-cards_png" :style="item.style">
              <img :src="require('../assets/'+ item.image)" alt="img">
            </div>
          </div>
          <div class="home-main-preCard-backPng" v-if="hoverImage.backSide" :style="hoverImage.style">
            <img :src="require('../assets/'+ hoverImage.backSide)" alt="#">
          </div>
        </div>
      </div>
      <div class="home-gift">
        <div class="home-gift_tag">{{ 'forGift' | localize}}</div>
        <div class="home-gift-adults">
          <div class="giftLinks">
            <router-link to="/Gift" v-for="gift in gifts" :key="gift">{{ gift | localize}}</router-link>
          </div>
          <img src="../assets/man&woman.jpg" alt="img" class="giftImg">
        </div>
        <div class="home-gift-kids">
          <div class="giftLinks">
            <router-link to="/Gift" v-for="gift in gifts" :key="gift">{{ gift | localize}}</router-link>
          </div>
          <img src="../assets/junior.jpg" alt="img" class="giftImg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "../components/myButton";
import mobileHome from "../mobile/mobileHome";
import {mapGetters} from "vuex";
import homeMixin from "../mixins/homeMixin";
export default {
  name: "Home",
  components: {
    myButton,
    mobileHome
  },
  data() {
    return {
      mainPage: [
        {name: 'WOMAN', image: 'woman.png', style: {right: '-93%', width: '200%',}},
        {name:'MAN',image: 'man.png', style: {right: '-88%', width: '130%',}},
        {name: 'GIRL',image: 'girl.png', style: {left: '-103%', width: '200%',}},
        {name:'BOY',image: 'boy.png', style: {left: '-67%', width: '130%',}},
      ],
      backImage: [
        {backSide: 'woman.png', style: {left: '4%', width: '30%',}},
        {backSide: 'man.png',style: {left: '39.5%', width: '17%',}},
        {backSide: 'girl.png',style: {left:'40.1%', width: '29%',}},
        {backSide: 'boy.png',style: {right: '10.3%', width: '20%',}},
      ],
      hoverImage: '',
      gifts: ['forHim','forHer'],
    }
  },
  mixins: [homeMixin],
  computed: {
    ...mapGetters([
      'GET_MOBILE'
    ])
  },
  methods: {
    showPhoto(i) {
      this.hoverImage = this.backImage.find((item, index) => {
        return index === i;
      });
    },
    clearHover() {
      this.hoverImage = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 0;
  margin: 0;
  overflow: hidden;
  &-main {
    padding-top: 8%;
    width: 100%;
    height: 100vh;
    &-preCard {
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      position: relative;
      &-cards {
        z-index: 1;
        width: 15%;
        height: 70%;
        border-radius: 25px;
        overflow: hidden;
        position: relative;
        transition: .4s ease-out;
        &:hover {
          background: rgba(255, 255, 255, 0.9);
        }
        &_text {
          width: 50%;
          position: absolute;
          top: 40%;
          left: 30%;
          z-index: 3;
        }
        ::v-deep {
          button {
            padding: 8%;
            background: transparent;
            border: 2px solid #f26659;
            transition: .2s ease-in;
            width: max-content;
            font-size: 25px;
            &:hover {
              background: #f26659;
              color: #f0eff4;
            }
            &:active {
              background: linear-gradient(160deg, #8ca9d3, #f0eff4);
              border: none;
            }
          }
        }

        &_png {
          height: 100%;
          z-index: 1;
          position: absolute;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      &-backPng {
        position: absolute;
        top: 0;
        height: 70%;
        z-index: -1;
        opacity: .8;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  &-gift{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    &_tag {
      font-size: 5rem;
      font-weight: bold;
    }
    .giftImg {
      width: 100%;
      height: 100%;
      border-radius: 25px;
    }
    .giftLinks {
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: 60px;
      :nth-child(1) {
        position: absolute;
        top: 50%;
        left: 25%;
        padding: .5% 2%;
        &::after{
          padding-right: 40%;
          content: "";
          background-image: url("../assets/icons/gift.png");
          width: 38px;
          height: 0;
          position: absolute;
          bottom: -4px;
          left: 20%;
          transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
          opacity: .9;
          border-radius: 20px;
        }

        &:hover::after{
          height: calc(100% + 8px)
        }
      }
      :nth-child(2) {
        position: absolute;
        top: 50%;
        right: 20%;
        padding: .5% 2%;
        &::after{
          content: "";
          background-image: url("../assets/icons/gift.png");
          width: 120px;
          height: 0;
          position: absolute;
          bottom: -4px;
          right: 20%;
          transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
          opacity: .8;
          border-radius: 20px;
        }

        &:hover::after{
          height: calc(100% + 8px);
        }
      }
    }
    &-adults {
      height: 60vh;
      width: 60%;
      position: relative;
      padding: 0;
      margin-top: 7%;
      transition: .7s ease;
      transform: rotate(-15deg);
      align-self: self-start;
      &:hover {
        transform: scale(1.2);
      }
    }
    &-kids {
      height: 60vh;
      width: 60%;
      position: relative;
      padding: 0;
      margin: 0;
      transition: .7s ease;
      transform: rotate(-15deg);
      align-self: flex-end;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
@media (max-width: 1400px) {
  .home {
    &-main {
      &-preCard {
        &-cards {
          ::v-deep {
            button {
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .home {
    &-main {
      &-preCard {
        &-cards {
          ::v-deep {
            button {
              font-size: 1em;
            }
          }
        }
      }
    }
    &-gift {
      &_tag {
        font-size: 4rem;
      }
      .giftLinks {
        font-size: 3rem;
      }
    }
  }
}
@media (max-width: 990px) {
  .home {
    &-main {
      &-preCard {
        &-cards {
          &_text {
            left: 20%;
          }
          ::v-deep {
            button {
              font-size: .9rem;
            }
          }
        }
      }
    }
    &-gift {
      .giftLinks {
        font-size: 2rem;
      }
    }
  }
}
</style>