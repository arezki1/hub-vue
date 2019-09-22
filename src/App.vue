<template>
  <div id="app">
     <div>
      <b-nav>
        <b-nav-item active><router-link to='/'>Home</router-link></b-nav-item>
        <b-nav-item><router-link to='/About'>About</router-link></b-nav-item>
        <b-nav-item><router-link to='/Contact'>Contact</router-link></b-nav-item>
      
      </b-nav>
  </div>
     <router-view/> 
  </div>
</template>

<script>
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    Contact,
    Home,
    About
    
  }
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
