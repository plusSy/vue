<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-button @click="changeRoute('/router')">改变路由到route</el-button>
    <el-button @click="changeRoute('/router/a')">改变路由到route/a</el-button>
    <el-button @click="changeRoute('/router/b')">改变路由到route/b</el-button>
    <el-button @click="changeRoute('/')">改变路由到根</el-button>
    <el-button @click="changeRoute('/mock')">改变路由到mock</el-button>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
