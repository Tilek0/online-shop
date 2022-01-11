<template>
  <div>
    <h2>Catalog</h2>
    <div class="main">
      <div class="filterSide"></div>
      <div class="sideNav">
        <side-bar></side-bar>
      </div>
      <div class="catalog">
        <catalog-items
            v-for="item in catalog"
            :key="item.id"
            :catalog_data="item"
        />
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
  data () {
    return {
      catalog: [
        {
          name: "Trousers",
          price: '150',
          image: "trousersBlack.jpg",
        },
        {
          name: "Trousers",
          price: '150',
          image: "trousersBlue.jpg",
        },
        {
          name: "Trousers",
          price: '150',
          image: "trousersPink.jpg",
        },
        {
          name: "Coat",
          price: '300',
          image: "coatBlack.png"
        },
        {
          name: "Coat",
          price: '300',
          image: "coatRed.jpg"
        },
        {
          name: "Coat",
          price: '300',
          image: "coatWhite.png"
        },
        {
          name: "Shirts",
          price: '100',
          image: "shirtBlack.jpg"
        },
        {
          name: "Shirts",
          price: '100',
          image: "shirtRed.jpg"
        },
        {
          name: "Shirts",
          price: '100',
          image: "shirtPink.jpg"
        },
        {
          name: "Shoes",
          price: '250',
          image: "shoesBlue.jpg"
        },
        {
          name: "Shoes",
          price: '250',
          image: "shoesBlack.jpg"
        },
        {
          name: "Shoes",
          price: '250',
          image: "shoesPink.jpg"
        },
        {
          name: "Dress",
          price: '150',
          image: "dressBlack.jpg"
        },
        {
          name: "Dress",
          price: '150',
          image: "dressBlue.jpg"
        },
        {
          name: "Dress",
          price: '150',
          image: "dressWhite.jpg"
        },
      ],
    }
  },
  mounted() {
    this.addId()
  },
  methods: {
    addId() {
      this.catalog.forEach(item => {
        item.id = `${Date.now()}`
      })
    }
  }
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
    width: 68%;
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