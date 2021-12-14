<template>
  <div>
    <h1>Catalog</h1>
    <div class="catalog">
      <catalog-items
          v-for="item in catalog"
          :key="item.id"
          :catalog_data="item"
      />
    </div>
  </div>
</template>

<script>
import catalogItems from "../components/catalogItems";
export default {
  name: "Catalog",
  components: {
    catalogItems,
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

<style scoped>
.catalog {
  margin-top: 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>