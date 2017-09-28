import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'

import proJ from './modules/proJ'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  modules: {proJ}
})

export default store
