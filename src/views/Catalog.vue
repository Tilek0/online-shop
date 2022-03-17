<template>
  <div>
    <h2>{{ 'catalog'| localize }}</h2>
    <mobile-catalog v-if="GET_MOBILE"/>
    <div class="main" v-else>
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
import mobileCatalog from "../mobile/mobileCatalog";
import catalogItems from "../components/catalogItems";
import sideBar from "../components/sideBar";
import {mapGetters} from "vuex";

export default {
  name: "Catalog",
  components: {
    mobileCatalog,
    catalogItems,
    sideBar,
  },
  computed: {
    ...mapGetters([
        'GET_MOBILE'
    ])
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-bottom: 31%;
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
    width:655px;
    height: 100%;
  }

  .sideNav {
    z-index: 2;
    width: 23%;
    height: 85%;
    position: fixed;
    top: 15%;
    left: .5%;
  }
}
</style>