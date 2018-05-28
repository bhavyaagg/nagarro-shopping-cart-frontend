<template>
  <b-container>
    <b-row>
      <b-col>
        <b-button v-on:click="toggleLogin(true)" variant="primary" class="m-2">Login Tab</b-button>
        <b-button v-on:click="toggleLogin(false)" variant="primary" class="m-2">Register Tab</b-button>
      </b-col>
    </b-row>
    
    <b-row>
      <b-col class="ml-auto mr-auto">
        <b-form-input v-model="name" type="text" placeholder="Enter your name" class="m-2"></b-form-input>
        <b-form-input v-model="password" type="text" placeholder="Enter your password" class="m-2"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p id="errorRow" class="text-danger"></p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button v-on:click="submitLogin" variant="success" v-if="login" id="loginBtn">Login</b-button>
        <b-button v-on:click="submitRegister" variant="success" v-else id="registerBtn">Register</b-button>
      </b-col>
    </b-row>
  
  </b-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "User",
    data: function () {
      return {
        login: true,
        name: '',
        password: ''
      }
    },
    methods: {
      toggleLogin: function (login) {
        this.login = login;
      },
      submitLogin: function () {
        let name = this.name;
        let password = this.password
        axios.post('http://localhost:2678/api/users/login', {
          name: name,
          password: password
        }).then((response) => {
          let data = response.data;
          if (data.success) {
            window.localStorage.setItem("name", name);
            window.localStorage.setItem("password", password);
            window.location.replace('/viewProducts')
          } else {
            document.getElementById('errorRow').innerText = data.msg;
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
