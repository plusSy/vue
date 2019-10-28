<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="fl slide-bar">
      <h1>route</h1>
      <br><br>
      <div class="define-class" v-for="(item, index) in routeConfig" :key="index" @click="changeRoute(`/${item.link}`)">{{item.name}}</div>
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
        {link: 'address', name: 'address'},
        {link: 'router', name: 'route'},
        {link: 'router/a', name: 'router/a'},
        {link: 'router/b', name: 'router/b'},
        {link: '', name: 'home'},
        {link: 'mock', name: 'mock'},
        {link: 'sort', name: 'sort'},
        {link: 'infinite', name: 'infinite'},
        // {link: 'tableFilter', name: 'tableFilter'},
        {link: 'tableMock', name: 'tableMock'},
        {link: 'templateRender', name: 'templateRender'},
        {link: 'echarts', name: 'echarts'},
        {link: 'nest', name: 'nest'},
        {link: 'tableCheck', name: 'tableCheck'}

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
  width: 20%;
  height: 100%;
}
.fr{
  float: right;
  width: 79%;
  height: 100%;
}
.slide-bar{
  border-right: 1px solid #000;
  text-align: center;
  background-color: rgb(64, 175, 226);
  position: fixed;
  top: 0;
  bottom: 0;
}
.define-class{
  margin-bottom: 10px;
  display: block;
  height: 40px;
  background-color: #fff;
  line-height: 40px;
  border: 1px solid #000;
  width: 80%;
  margin: 10px auto;
  cursor: pointer;
  font-size: 14px;
}
.define-class:hover{
  background-color: #2c3e50;
  color: #fff;
}
</style>
