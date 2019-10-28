<template>
  <div class="addr-content" v-clickoutside="hidePanel">
    <addr-input></addr-input>
    <div v-show="downOrUp === 'up'" class="addr-panel">
      <em class="addr-options-icon el-icon-caret-top"></em>
      <div class="addr-options-group">
        <addr-options
          v-for="(panal, paIdx) in panalArr" 
          :key="paIdx" 
          :data="panal" 
          :optionsIdx="paIdx"
        ></addr-options>
      </div>
    </div>
  </div>
</template>

<style lang="css" src="./address.css"></style>

<script>
import addrInput from './addrInput/index.vue'
import addrOptions from './addrOptions/index.vue'

import store from './store.js'

export default {
  name: 'ComAddress',
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  components: {
    addrInput,
    addrOptions
  },
  computed: {
    downOrUp: {
      get () { return store.downOrUp },
      set (val) { return val }
    },
    panalArr: {
      get () { return store.panalArr },
      set (val) { return val }
    }
  },
  methods: {
    hidePanel () {
      store.downOrUp = 'down'
    }
  }
}
</script>