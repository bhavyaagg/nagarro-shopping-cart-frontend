<template>
  <b-container>
    <b-row>
      <product v-for="productItem in products" :key="productItem.id"
               :name="productItem.name" :manufacturer="productItem.manufacturer"
               :price="productItem.price" :productId="productItem.id"
               :qtyObj="productItem.carts[0]"></product>
    </b-row>
    <div>
      <p id="errorRow" class="text-danger"></p>
    </div>
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
    mounted() {
      let name = window.localStorage.getItem("name")
      let password = window.localStorage.getItem("password");
      if (!name || !password) {
        // eslint-disable-next-line
        console.log(2)
        document.getElementById("errorRow").innerText = "Please Login First"
        return;
      }
      axios.get(`http://localhost:2678/api/products?name=${name}&password=${password}`).then((response) => {
        this.products = response.data
        //eslint-disable-next-line
        console.log(this.products)
      })
    }

  }
</script>

<style scoped>

</style>
