// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import smite from './smite'
import store from './store'
import http from './http'

import components from './components'

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(smite)

components.map(component => {
  Vue.component(component.name, component)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
