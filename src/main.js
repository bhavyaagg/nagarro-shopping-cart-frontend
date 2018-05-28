import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AddProduct from './components/AddProduct'
import User from './components/User'
import ViewProducts from './components/ViewProducts'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/addProduct', component: AddProduct},
    {path: '/user', component: User},
    {path: '/viewProducts', component: ViewProducts}
  ],
  mode: 'history'
})

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
