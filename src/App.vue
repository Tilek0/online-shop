<template>
  <div id="app">
    <div v-if="!GET_MOBILE">
      <navigation @openModal="openModal" class="navigation"/>
      <div class="showModal" v-if="modalView">
        <modal-bag
            @closeModal="closeModal"
        ></modal-bag>
      </div>
    </div>
    <div @click="closeModal">
      <router-view />
    </div>
    <mobile-nav v-if="GET_MOBILE"/>
    <footer-nav v-else ref="closeContact" />
  </div>
</template>
<script>
import navigation from "./components/navigation";
import footerNav from "./components/footerNav";
import modalBag from "./components/modalBag";
import mobileNav from "./mobile/mobileNav";
import {mapActions, mapGetters} from "vuex";
export default {
  components: {
    navigation,
    footerNav,
    modalBag,
    mobileNav
  },
  data() {
    return {
      modalView: false,
    }
  },
  created() {
    let mobileWidth = 820;
    if (window.screen.width <= mobileWidth) {
      this.CHANGE_MOBILE('true')
      document.body.style.background = '#f0eff4';
    }
  },
  computed: {
    ...mapGetters([
        'GET_MOBILE'
    ]),
  },
  methods: {
    ...mapActions([
      'CHANGE_MOBILE',
      'CLOSE_MOBILE_MODAL'
    ]),
    openModal() {
      if (!this.GET_MOBILE) {
        this.modalView = true;
      }
    },
    closeModal() {
      this.CLOSE_MOBILE_MODAL(false)
      if (!this.GET_MOBILE){
        this.modalView = false;
        this.$refs.closeContact.visibleForm = false;
      }
    }
  }
};
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, serif;
  font-size: 16px;
  background: linear-gradient(0.25turn, #8ca9d3, #f0eff4, #f26659);
}
#app {
  font-family: Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  .navigation {
    z-index: 10;
  }
  .showModal {
    width: max-content;
    padding-right: 3.3%;
    max-height: 65%;
    position: fixed;
    top: 10%;
    right: 15%;
    z-index: 3;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 20px;
  }
}
a {
  text-decoration: none;
  color: #000;
}
</style>
