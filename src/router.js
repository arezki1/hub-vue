import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    
    { path: '/about', component: About },
    {path: '/contact', component:Contact},
    { path: '*', component: Home },
  ],

  mode: 'history'
})

export default router
