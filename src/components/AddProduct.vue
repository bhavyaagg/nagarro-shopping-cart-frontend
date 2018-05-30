<template>
  <div class="container">
    <div class="row">
      <div class="col ml-auto mr-auto">
        <b-form-input v-model="name" type="text" placeholder="Enter Products name" class="m-2"></b-form-input>
        <b-form-input v-model="manufacturer" type="text" placeholder="Enter Manufacturer's Name" class="m-2"></b-form-input>
        <b-form-input v-model="price" type="number" placeholder="Enter Product's Price" class="m-2"></b-form-input>
        <button></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddProduct",
    data: function () {
      return {
        name: '',
        manufacturer: '',
        price: ''
      }
    },
    methods: function () {
    
    }
  }
</script>

<style scoped>

</style>
