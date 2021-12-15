<template>
  <div class="main">
    <h1>{{product.title}}</h1>
    <item :product_data="product"/>
  </div>
</template>

<script>
import item from "../components/item";
export default {
  name: "Items",
  components: {
    item
  },
  data() {
    return {
      product: {
        title: 'Adidas',
        img: 'adidas.png',
        sizes: [39,40,42,44],
        price: 200,
        article: Date.now(),
      }
    }
  },
  methods: {
    mounted() {
      console.log(this.product.article)
    }
  }
}
</script>

<style scoped>
.main {
  margin-bottom: 7%;
}
</style>