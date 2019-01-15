<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="fl slide-bar">
      <h1>route</h1>
      <el-button class="define-class" v-for="(item, index) in routeConfig" :key="index" @click="changeRoute(`/${item.link}`)">{{item.name}}</el-button>
    </div>
    <div class="fr">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      routeConfig: [
        {link: 'router', name: 'route'},
        {link: 'router/a', name: 'router/a'},
        {link: 'router/b', name: 'router/b'},
        {link: '', name: 'home'},
        {link: 'mock', name: 'mock'},
        {link: 'sort', name: 'sort'},
        {link: 'infinite', name: 'infinite'},
        // {link: 'tableFilter', name: 'tableFilter'},
        {link: 'tableMock', name: 'tableMock'}

      ]
    }
  },
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
  height: 100vh;
}
.fl{
  float: left;
  width: 10%;
  height: 100%;
}
.fr{
  float: right;
  width: 89%;
  height: 100%;
}
.slide-bar{
  border-right: 1px solid #000;
  text-align: center;
}
.define-class{
  margin-bottom: 10px;
  display: block;
}
</style>
