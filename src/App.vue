<template>
  <div id="app">
    <navigation @openModal="openModal" />
    <div class="showModal" v-if="modalView">
      <modal-bag
          @closeModal="closeModal"
      ></modal-bag>
    </div>
    <router-view />
    <footer-nav />
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
  background: radial-gradient(circle, rgba(140,169,211,1) 0%, rgba(240,239,244,1) 100%);
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
  .showModal {
    width: 30%;
    min-height: 60%;
    position: fixed;
    top: 10%;
    right: 15%;
    z-index: 1;
  }
}
a {
  text-decoration: none;
  color: #000;
  font-family: Lobster Two, serif;
}
</style>
