<template>
  <div class="nav" @mouseleave="hideLinks = ''">
    <div class="nav-divider">
      <img src="../assets/icons/waves.svg" alt="img">
    </div>
    <div class="nav-link">
      <div
          class="to"
          v-for="(val,i) in product"
          :key="val.name"
          @mouseover="dropLinks(i)"
          @click="link(val)"
      >{{ val.name | localize}}
      </div>
    </div>
    <div class="nav-hideLinks" v-if="hideLinks">
      <div
          class="to"
          v-for="item in hideLinks.clothes"
          :key="item.name"
          @click="nestedLink(item)"
      >{{ item.name | localize}}
      </div>
    </div>
    <div class="nav-icons">
      <div class="nav-icons_search">
        <div>
          <input
              type="text"
              @blur="clearText"
              v-model="searchText"
          >
        </div>
      </div>
      <div>
        <img src="../assets/icons/admin.png" alt="img">
      </div>
      <div @click="openModal">
        <img src="../assets/icons/bag.png" alt="img" @mouseover="countMove = true"
             @mouseleave="countLeave">
        <div class="nav-icons_bagCount" :class="{'nav-icons_dinamicStyle': countMove}">
          {{ this.GET_CART.length }}
        </div>
      </div>
      <div class="nav-icons__switch">
        <div class="switch" @click="switchLocale">
          <span class="switch-slider"
                :style="{transform: IsLocale ? 'translateX(85%)': '',
                 background: IsLocale ? '#8ca9d3' : '#f26659'}"
          >{{localeName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {debounce} from "lodash/function";

export default {
  name: "navigation",
  data() {
    return {
      locale: [
        'ru-RU',
        'en-US'
      ],
      countMove: false,
      searchText: '',
      hideLinks: '',
      foundFilter: '',
      IsLocale: false,
    }
  },
  mounted() {
    this.CATCH_FOR_FILTER();
  },
  watch: {
    searchText: function(searchText) {
      this.setQuery(searchText);
    }
  },
  computed: {
    ...mapGetters([
      'GET_CART',
      'GET_PRODUCTS',
      'GET_FOR_FILTER',
    ]),
    product() {
      return this.GET_PRODUCTS;
    },
    localeName() {
      if (this.IsLocale) {
        this.CHANGE_LOCALE(this.locale[0]);
        return this.locale[0];
      }else {
        this.CHANGE_LOCALE(this.locale[1]);
        return this.locale[1];
      }
    }
  },
  methods: {
    ...mapActions([
      'CATCH_CATEGORY',
      'CATCH_CATALOG',
      'CATCH_SEARCH',
      'CATCH_FOR_FILTER',
      'CHANGE_LOCALE',
    ]),
    switchLocale() {
      this.IsLocale = !this.IsLocale;
    },
    setQuery: debounce(function (searchText){
      if (searchText) {
        this.foundFilter = this.GET_FOR_FILTER.filter(item => {
          return item.name.toLowerCase() === searchText.toLowerCase();
        })
        if (this.foundFilter.length) {
          this.CATCH_CATALOG(this.foundFilter);
          if (this.$route.path !== '/Catalog') {
            this.$router.push('/Catalog');
          }
          return '';
        }
      }
    }, 500),
    link(i) {
      let category = this.product.find(item => {
        return item.name === i.name;
      })
      this.CATCH_CATEGORY(category)
      if (category.name === 'HOME') {
        if (this.$route.fullPath !== '/') {
          this.$router.push('/');
        }
        return ''
      } else {
        if (this.$route.fullPath !== '/Categories') {
          this.$router.push('/Categories');
        }
        return '';
      }
    },
    dropLinks(i) {
      this.hideLinks = this.product.find((item, index) => {
        return index === i;
      });
    },
    nestedLink(i) {
      let catalog = this.hideLinks.clothes.find(item => item.name === i.name);
      switch (i.name) {
        case 'trousers':
          this.CATCH_CATALOG(catalog.trousers);
          break;
        case 'coat':
          this.CATCH_CATALOG(catalog.coat);
          break;
        case 'shirts':
          this.CATCH_CATALOG(catalog.shirts);
          break;
        case 'shoes':
          this.CATCH_CATALOG(catalog.shoes);
          break;
        case 'outwear':
          this.CATCH_CATALOG(catalog.jacket);
          break;
      }
      if (this.$route.fullPath !== '/Catalog') {
        this.$router.push('/Catalog');
      }
      return '';
    },
    clearText() {
      this.searchText = '';
    },
    openModal() {
      this.$emit('openModal');
    },
    countLeave() {
      this.countMove = false;
    }
  }
}
</script>

<style lang="scss" scoped>
$search-time: 800ms;
$reset-time: 150ms;
$color-pink: #f26659;
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;

  &-divider {
    position: relative;

    img {
      width: 100%;
      height: 70px;
    }
  }

  .to {
    color: black;
    font-size: 18px;
    margin: 0 6px;

    &:hover {
      color: $color-pink;
      border-bottom: 1px solid $color-pink;
    }
  }

  &-link {
    position: absolute;
    top: 8%;
    left: 4%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.3);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    width: auto;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    cursor: pointer;

    .activeName {
      color: $color-pink;
      border-bottom: 1px solid $color-pink;
    }
  }

  &-hideLinks {
    position: absolute;
    top: 80%;
    left: 4%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.3);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    width: 25%;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    cursor: pointer;
  }

  &-icons {
    position: absolute;
    top: 8%;
    right: 15%;
    display: flex;
    align-items: center;

    :nth-child(n) {
      margin: 0 9%;
    }

    img {
      width: 27px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(2px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-right-color: rgba(255, 255, 255, 0.3);
      border-bottom-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
      padding: 13px;
      border-radius: 20px;
      transition: .5s;

      &:hover {
        transform: perspective(500px) translate3d(0, 10px, 150px);
      }
    }

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
          right: -10%;
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

    &_dinamicStyle {
      transform: perspective(500px) translate3d(0, 10px, 150px);
    }

    &_bagCount {
      position: absolute;
      top: 70%;
      left: 70%;
      font-weight: bold;
      font-size: 20px;
      transition: .5s;
    }
    &__switch {
      .switch {
        position: relative;
        display: inline-block;
        width: 100px;
        height: 50px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(2px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-right-color: rgba(255, 255, 255, 0.3);
        border-bottom-color: rgba(255, 255, 255, 0.1);
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
        border-radius: 40px;
        &-slider {
          position: absolute;
          cursor: pointer;
          right: 0;
          height: 45px;
          width: 45px;
          background: $color-pink;
          left: 0;
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
}
</style>