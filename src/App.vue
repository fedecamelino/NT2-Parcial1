<template>
  <div id="app" class="container-fluid">
    <div class="jumbotron">
      <h1> 
        <u> Gastos </u>
      </h1>
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
  
  import Navbar from './components/Navbar.vue'

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    margin-top: 60px;
  }
  </style>
