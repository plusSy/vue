// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import smite from './smite'
import store from './store'
import http from './http'

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(smite)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
