<template>
  <div>
    <div class="mobileNav">
      <div
          v-for="(item,i) in navigation"
          :key="i"
          class="mobileNav-ul"
      >
        <div class="mobileNav-ul-li">
          <div class="mobileNav-ul-li-link" @click="openLink(item,i)">
            <span class="mobileNav-ul-li-link_icon" :class="{activeIcon: link === i}">
              <img :src="require('../assets/icons/' + item.icon)" alt="#">
            </span>
            <span class="mobileNav-ul-li-link_text" :class="{activeText: link === i}">{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="mobileNav-check">
        <div
            class="mobileNav-check-piece"
            :style="{transform: `translateX(${translateX}%)`}"
        >
          <div
              class="mobileNav-check-piece-indicator"
          ></div>
        </div>
      </div>
      <transition name="animateSearch">
        <div class="mobileNav-isSearch grassCard" v-show="isSearch">
          {{'clickOn' | localize}}
          <div class="mobileNav-isSearch_search">
            <div>
              <input
                  type="text"
                  @blur="clearText"
                  v-model="searchText"
              >
            </div>
          </div>
        </div>
      </transition>
      <transition name="animateProfile">
        <div class="mobileNav-isProfile grassCard" v-show="GET_MOBILE_MODAL">
          {{ 'setLanguage' | localize}}
          <div class="mobileNav-isProfile__preSwitch">
            <div class="switch grassCard" @click="switchLocale">
            <span class="switch-slider"
                  :style="{transform: IsLocale ? 'translateX(90%)': '',
                   background: IsLocale ? '#8ca9d3' : '#f26659'}"
            >{{localeName}}</span>
            </div>
          </div>
        </div>
      </transition>
      <p
          v-show="GET_CART.length"
          class="mobileNav-cartLength"
          :style="{top: activeCart ? '-37%' : '22%'}"
      >{{GET_CART.length}}</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import navigationMixin from "../mixins/navigationMixin";
export default {
  name: "mobileNav",
  data() {
    return {
      link: 0,
      translateX: null,
      activeCart: false,
      isSearch: false,
      navigation: [
        {name: 'Home', icon: 'home.png'},
        {name: 'Search', icon: 'search.png'},
        {name: 'Cart', icon: 'bag.png'},
        {name: 'Profile', icon: 'admin.png'},
      ]
    }
  },
  mixins: [navigationMixin],
  computed: {
    ...mapGetters([
        'GET_MOBILE_MODAL'
    ]),
  },
  methods: {
    ...mapActions([
      'CLOSE_MOBILE_MODAL'
    ]),
    clearText() {
      this.searchText = '';
      this.isSearch = false;
    },
    openLink(item,i) {
      this.link = i;
      this.translateX = 100 * i;
      switch (item.name) {
        case 'Home':
          this.activeCart = false;
          this.CLOSE_MOBILE_MODAL(false);
          this.isSearch = false;
          if (this.$route.path !== '/') {
            this.$router.push('/');
          } else {
            return ''
          }
          break;
        case 'Search':
          this.isSearch = true;
          this.CLOSE_MOBILE_MODAL(false);
          this.activeCart = false;
          break;
        case 'Cart':
          this.activeCart = true;
          this.CLOSE_MOBILE_MODAL(false);
          this.isSearch = false;
          if (this.$route.path !== '/MobileCart') {
            this.$router.push('MobileCart')
          } else {
            return ''
          }
          break;
        case 'Profile':
          this.CLOSE_MOBILE_MODAL(true)
          this.isSearch = false;
          this.activeCart = false;
          break;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.mobileNav {
  width: 100%;
  height: 70px;
  background: #ebc999;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  &-ul {
    display: flex;
    width: 30%;
    justify-content: center;
    &-li {
      width: 70px;
      height: 70px;
      z-index: 2;
      &-link {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        margin-bottom: 3%;
        .activeIcon {
          transform: translateY(-42px);
        }
        .activeText {
          opacity: 1;
          transform: translateY(10px);
        }
        &_icon {
          display: block;
          width: 45px;
          height: 45px;
          transition: all .5s ease;
          img {
            width: 100%;
            height: 100%;
          }
        }
        &_text {
          position: absolute;
          top: 28px;
          font-weight: 500;
          font-size: .85rem;
          letter-spacing: .05em;
          transition: all .5s ease;
          opacity: 0;
          transform: translateY(20px);
        }
      }
    }
  }
  &-check {
    width: 100%;
    height: 70px;
    position: absolute;
    top: -60%;
    &-piece {
      width: 25%;
      display: flex;
      justify-content: center;
      transition: .5s ease;
      &-indicator {
        position: absolute;
        width: 65px;
        height: 65px;
        background: #8ca9d3;
        border-radius: 50%;
        border: 6px solid #f0eff4;
        &::before {
          content: '';
          position: absolute;
          top: 36px;
          left: -22px;
          width: 20px;
          height: 20px;
          background: transparent;
          border-top-right-radius: 20px;
          box-shadow: 0 -10px 0 0  #f0eff4;
        }
        &::after {
          content: '';
          position: absolute;
          top: 36px;
          right: -22px;
          width: 20px;
          height: 20px;
          background: transparent;
          border-top-left-radius: 20px;
          box-shadow: 0 -10px 0 0 #f0eff4;
        }
      }
    }
  }
  .animateSearch-enter-active, .animateSearch-leave-active{
    transition: all .6s ease;
  }
  .animateSearch-enter, .animateSearch-leave-to {
    transform: translateY(-20vh) rotate(180deg);
  }
  &-isSearch {
    position: absolute;
    z-index: 3;
    top: -8rem;
    left: 27%;
    padding: 1%;
    width: border-box;
    height: 7vh;
    font-size: 14px;
    &_search {
      div {
        display: inline-block;
        position: relative;

        &:after {
          content: "";
          background: black;
          width: 3px;
          height: 15px;
          position: absolute;
          top: 25px;
          right: 0;
          transform: rotate(135deg);
        }

        input {
          color: black;
          font-size: 16px;
          background: transparent;
          width: 12px;
          height: 12px;
          padding: 7px;
          border: solid 3px black;
          outline: none;
          border-radius: 35px;
          transition: width 0.5s;

          &:focus, :not(:placeholder-shown) {
            width: 250px;
          }
        }
      }
    }
  }
  .animateProfile-enter-active, .animateProfile-leave-active {
    transition: all .6s ease;
  }
  .animateProfile-enter, .animateProfile-leave-to {
    transform: translateY(-20vh) rotate(-180deg);
  }
  &-isProfile {
    position: absolute;
    z-index: 3;
    top: -8rem;
    right: 1%;
    padding: 1%;
    width: 20%;
    height: 7vh;
    font-size: 13px;
    &__preSwitch {
      .switch {
        position: relative;
        display: inline-block;
        width: 65px;
        height: 35px;

        border-radius: 40px;
        &-slider {
          position: absolute;
          font-size: 12px;
          height: 30px;
          width: 30px;
          background: #f26659;
          left: 4px;
          bottom: 6.5%;
          border-radius: 50%;
          transition: 0.3s cubic-bezier(0.42, 0, 0, 1.68);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f0eff4;
        }
      }
    }
  }
  &-cartLength {
    position: absolute;
    left: 61.7%;
    color: red;
    font-weight: bold;
    transition: .5s ease;
  }
}

</style>