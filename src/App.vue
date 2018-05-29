<template>
  <div id="app">
    <h1>Shopping Cart</h1>
    <router-link class="tab" :to="'user'">Login</router-link>
    <router-link class="tab" :to="'viewProduct'">View Products</router-link>
    <router-link class="tab" :to="'addProduct'">Add Product</router-link>
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
  
  .tab {
    margin: 10px
  }

</style>
