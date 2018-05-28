<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <b-button v-on:click="toggleLogin(true)" variant="primary" class="m-2">Login Tab</b-button>
        <b-button v-on:click="toggleLogin(false)" variant="primary" class="m-2">Register Tab</b-button>
      </div>
    </div>
    
    <div class="row">
      <div class="col-8 ml-auto mr-auto">
        <b-form-input v-model="name" type="text" placeholder="Enter your name" class="m-2"></b-form-input>
        <b-form-input v-model="password" type="text" placeholder="Enter your password" class="m-2"></b-form-input>
      </div>
    </div>
    <br>
    <b-button v-on:click="submitLogin" variant="success" v-if="login" id="loginBtn">Login</b-button>
    <b-button v-on:click="submitRegister" variant="success" v-else id="registerBtn">Register</b-button>
  </div>
</template>

<script>
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
      submitLogin: () => {
        
      }
    }
  }
</script>

<style scoped>

</style>
