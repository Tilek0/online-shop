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
          name: "Jeans",
          price: '150',
          image: "jeans.jpg",
        },
        {
          name: "Jeans",
          price: '150',
          image: "jeans.jpg",
        },
        {
          name: "Jeans",
          price: '150',
          image: "jeans.jpg",
        },
        {
          name: "Coat",
          price: '300',
          image: "coat.jpg"
        },
        {
          name: "Coat",
          price: '300',
          image: "coat.jpg"
        },
        {
          name: "Coat",
          price: '300',
          image: "coat.jpg"
        },
        {
          name: "Shirts",
          price: '100',
          image: "shirts.jpg"
        },
        {
          name: "Shirts",
          price: '100',
          image: "shirts.jpg"
        },
        {
          name: "Shirts",
          price: '100',
          image: "shirts.jpg"
        },
        {
          name: "Shoes",
          price: '250',
          image: "shoes.jpg"
        },
        {
          name: "Shoes",
          price: '250',
          image: "shoes.jpg"
        },
        {
          name: "Shoes",
          price: '250',
          image: "shoes.jpg"
        },
        {
          name: "Trousers",
          price: '150',
          image: "trousers.png"
        },
        {
          name: "Trousers",
          price: '150',
          image: "trousers.png"
        },
        {
          name: "Trousers",
          price: '150',
          image: "trousers.png"
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
    top: 12.5%;
    left: .5%;
  }
}


</style>