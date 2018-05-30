<template>
  <div class="container">
    <div class="row">
      <div class="col ml-auto mr-auto">
        <b-form-input v-model="name" type="text" placeholder="Enter Products name" class="m-2"></b-form-input>
        <b-form-input v-model="manufacturer" type="text" placeholder="Enter Manufacturer's Name"
                      class="m-2"></b-form-input>
        <b-form-input v-model="price" type="number" placeholder="Enter Product's Price" class="m-2"></b-form-input>
        <b-button v-on:click="submitAdd" variant="success" id="addBtn">Add</b-button>
        <p id="msgRow"></p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "AddProduct",
    data: function () {
      return {
        name: '',
        manufacturer: '',
        price: ''
      }
    },
    methods: {
      submitAdd: function () {
        let name = this.name;
        let manufacturer = this.manufacturer;
        let price = this.price;
        axios.post('http://localhost:2678/api/products/', {
          name, manufacturer, price
        }).then((response) => {
          let data = response.data;
          if (data.success) {
            document.getElementById("msgRow").innerText = "Product Successfully Added"
          } else {
            document.getElementById("msgRow").innerText = "Could not add the Product"
          }
        })

      }
    }
  }
</script>

<style scoped>

</style>
