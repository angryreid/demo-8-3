<template>
  <div id="app">
    <img src="./assets/img/logo.png">
    <h1><a href="#/" class="btn btn-danger">开发组件</a></h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }


</script>

<style scoped>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 20px;
    }
    
    @import '../../node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.css'
</style>
