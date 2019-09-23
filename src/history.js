import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import './assets/css/style.css'
//import './assets/css/bootstrap.min.css'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    
    { path: '/about', component: About },
    {path: '/contact', component:Contact},
    { path: '*', component: Home },
  ],

  mode: 'history'
})

import router from '/router'
new Vue({
 router,
  render: h => h(App),
}).$mount('#app')
