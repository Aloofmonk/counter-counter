<template>
  <nav>
    <router-link to="/">About</router-link> 
    <router-link to="/counter">Go to counter</router-link>
  </nav>
  
  <router-view></router-view>
</template>

<script>
// import MyCounter from './components/MyCounter'

export default {
  name: 'App',
  components: {
    // MyCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
