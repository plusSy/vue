import Vue from 'vue'

const smite = {
  install: function () {
    Vue.mixin({
      methods: {
        showHello () {
          console.log(this.$options.name)
        }
      }
    })
  }
}

export default smite
