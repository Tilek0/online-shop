<template>
  <div>
    <h2>Catalog</h2>
    <div class="main">
      <div class="filterSide"></div>
      <div class="sideNav">
        <side-bar></side-bar>
      </div>
      <div class="catalog">
        <catalog-items />
      </div>
    </div>
  </div>
</template>

<script>
import catalogItems from "../components/catalogItems";
import sideBar from "../components/sideBar";

export default {
  name: "Catalog",
  components: {
    catalogItems,
    sideBar,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.main {
  margin-bottom: 20%;
  display: flex;
  flex-direction: row;
  position: relative;

  .catalog {
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .filterSide {
    width:460px;
    height: 100%;
  }

  .sideNav {
    z-index: 2;
    width: 25%;
    height: 85%;
    position: fixed;
    top: 15%;
    left: .5%;
  }
}


</style>