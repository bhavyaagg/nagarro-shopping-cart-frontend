<template>
  <b-container>
    <b-row>
      <product v-for="productItem in products" :key="productItem.id"
      :name="productItem.name" :manufacturer="productItem.manufacturer"
      :price="productItem.price" :productId="productItem.id"
      ></product>
    </b-row>
  </b-container>

</template>

<script>
  import Product from './Product'
  import axios from 'axios'

  export default {
    name: "ViewProducts",
    components: {
      product: Product
    },
    data: function () {
      return {
        products: []
      }
    },
    created() {
      axios.get('http://localhost:2678/api/products').then((response) => {
        this.products = response.data
      })
    }

  }
</script>

<style scoped>

</style>
