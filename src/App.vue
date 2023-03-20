<template>
  <div class="body">

    <nav class="hnav">
      <router-link class="link" to="/">About</router-link>
      <router-link class="link" to="/counter">Go to counter</router-link>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  
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
*{
  background: whitesmoke
  ;
}
.hnav{
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1px;
 
}
.link{
  text-decoration: none;
  font-size: x-large;
  color: rgb(84, 82, 82);
}
.link:hover{
  color: rgb(161, 159, 159);
  transition: all 0.5s;
}
</style>
