<template>
  <div>
    <h1>Catalog</h1>
    <div class="catalog">
      <catalog-items
          v-for="item in catalog"
          :key="item.name"
          :catalog_data="item"
      />
    </div>
  </div>
</template>

<script>
import CatalogItems from "../components/catalogItems";
export default {
  name: "catalog",
  components: {
    CatalogItems,
  },
  data () {
    return {
      catalog: [
        {
          name: "Jeans",
          price: '150',
          image: "jeans.jpg"
        },
        {
          name: "Jeans",
          price: '150',
          image: "jeans.jpg"
        },
        {
          name: "Jeans",
          price: '150',
          image: "jeans.jpg"
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
  }
}
</script>

<style scoped>
.catalog {
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>