<template>
  <div class="col-4 card p-3">
    <h4>{{name}}</h4>
    <div>{{manufacturer}}</div>
    <div><b>Rs. {{price}}</b></div>
    <div class="row">
      <div class="col">
        <button v-on:click="incProduct('{{productId}}')" class="btn btn-primary">+</button>
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        {{(qty?qty.qty:0)}}
      </div>
      <div class="col">
        <button v-on:click="decProduct('{{productId}}')" class="btn btn-primary">-</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Product",
    props: {
      name: String,
      manufacturer: String,
      price: Number,
      productId: Number,
      qty: Number
    },
    methods: {
      incProduct: function () {
        axios.post('http://localhost:2678/api/products', {
          name: window.localS
        })
      }
    }
  }
</script>

<style scoped>

</style>
