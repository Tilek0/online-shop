<template>
  <div>
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
        {name: "Dresses", image: "dresses.jpg"},
        {name: "Jeans", image: "Jeans.jpg"},
        {name: "Coat", image: "Outerwear.png"},
        {name: "Shirts", image: "Shirts.jpg"},
        {name: "Shoes", image: "sneakers.jpg"},
      ],
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.category {
  margin-top: 5%;
  display: flex;
  justify-content: space-evenly;
}
</style>