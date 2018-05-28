<template>
  <div class="col-4 card p-3">
    <h4 class="product-name">{{name}}</h4>
    <div class="product-manufacturer">{{manufacturer}}</div>
    <div class="row">
      <div class="col m-3 p-3">
        <b>Rs. {{price}}</b>
      </div>
      <button v-on:click="addProduct('{{productId}}')" class="col btn btn-primary m-3">Buy</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Product",
    props: {
      name: String,
      manufacturer: String,
      price: Number,
      productId: String
    },
    methods: {
    
    }
  }
</script>

<style scoped>

</style>
