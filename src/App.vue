<template>
  <div id="app">
    <navigation @openModal="openModal" class="navigation"/>
    <div class="showModal" v-if="modalView">
      <modal-bag
          @closeModal="closeModal"
      ></modal-bag>
    </div>
    <div @click="closeModal">
      <router-view/>
    </div>
    <footer-nav ref="closeContact" class="footer"/>
  </div>
</template>
<script>
import navigation from "./components/navigation";
import footerNav from "./components/footerNav";
import modalBag from "./components/modalBag";
export default {
  components: {
    navigation,
    footerNav,
    modalBag,
  },
  data() {
    return {
      modalView: false,
    }
  },
  methods: {
    openModal() {
      this.modalView = true;
    },
    closeModal() {
      this.modalView = false;
      this.$refs.closeContact.visibleForm = false;
    }
  }
};
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Lobster Two, serif;
  font-size: 16px;
  background-color: #f0eff4;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%238ca9d3' fill-opacity='0.60' fill-rule='evenodd'/%3E%3C/svg%3E");
}
#app {
  font-family: Lobster Two, sans-serif;
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
    width: 30%;
    min-height: 60%;
    position: fixed;
    top: 10%;
    right: 15%;
    z-index: 3;
  }
}
a {
  text-decoration: none;
  color: #000;
  font-family: Lobster Two, serif;
}
</style>
