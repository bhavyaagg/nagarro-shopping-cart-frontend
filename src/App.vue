<template>
  <div id="app">
    <h1>Shopping Cart</h1>
    <router-link :to="'addProduct'">Add Product</router-link>
    <router-link :to="'addProduct'">S</router-link>
    <router-link :to="'addProduct'">S</router-link>
    <router-link :to="'addProduct'">S</router-link>
    <br/>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
