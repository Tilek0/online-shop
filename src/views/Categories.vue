<template>
  <div class="main">
    <h1>Categories</h1>
    <div class="category">
      <category-item
          v-for="category in categories"
          :key="category.name"
          :category_data="category"
      />
    </div>
  </div>
</template>

<script>
import categoryItem from "../components/categoryItem";
export default {
  name: "Categories",
  components: {
    categoryItem
  },
  data () {
    return {
      categories: [
        {name: "Dresses", image: "dressBlack.jpg"},
        {name: "Trousers", image: "trousersBlue.jpg"},
        {name: "Coat", image: "coatWhite.png"},
        {name: "Shirts", image: "shirtPink.jpg"},
        {name: "Shoes", image: "shoesRed.jpg"},
      ],
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  .category {
    margin-top: 5%;
    display: flex;
    justify-content: space-evenly;
  }
}

</style>