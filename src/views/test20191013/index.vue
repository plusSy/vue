<template>
  <div>
    <hr>
    <ACom id="ddd" :injectData="obj" @acceptState="save"></ACom>
    <BCom :dataFun="dFun" @reciveTwo="recive"></BCom>
  </div>
</template>

<script>
import ACom from './child/a.vue'
import BCom from './child/b.vue'
export default {
  components: {
    ACom,
    BCom
  },
  data () {
    return {
      obj: {
        id: '100',
        name: 'febi'
      },
      dFun: [
        {
          id: '1',
          name: 'wyb'
        },
        {
          id: '2',
          name: 'wzc'
        }
      ]
    }
  },
  methods: {
    save (state, ss) {
      console.log(state, ss)
    },
    recive (n) {
      console.log(n)
    }
  }
}
</script>