<template>
  <div class="addr-option">
    <div class="addr-menu__wrap">
      <ul class="addr-menu__list">
        <addr-item 
          v-for="(item, index) in data" 
          :key="index" 
          :data="item" 
          :itemIdx="index"
          :optionsIdx="optionsIdx"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../store.js'
import addrItem from './addr-item/index.vue'

export default {
  name: 'addrOptions',
  components: { addrItem },
  data () {
    return {
      value: null
    }
  },
  props: {
    optionsIdx: {
      type: Number
    },
    data: {
      type: Array,
      default: () => { return [] }
    }
  },
  computed: {
    downOrUp: {
      get () { return store.downOrUp },
      set (val) { return val }
    }
  },
  created () {
    let nextIndex = this.idx + 1
    let value = this.$parent.value
    if (!value || value.length < nextIndex) {
      return
    }
    // ajax
  }
}
</script>