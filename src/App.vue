<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-button @click="changeRoute('/router')">route</el-button>
    <el-button @click="changeRoute('/router/a')">route/a</el-button>
    <el-button @click="changeRoute('/router/b')">route/b</el-button>
    <el-button @click="changeRoute('/')">home</el-button>
    <el-button @click="changeRoute('/mock')">mock</el-button>
    <el-button @click="changeRoute('/infinite')">infinite</el-button>
    <el-button @click="changeRoute('/sort')">sort</el-button>
    <el-button @click="changeRoute('/tableFilter')">tableFilter</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    changeRoute (router) {
      this.$router.push({path: router, query: {t: +new Date()}})
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
}
</style>
