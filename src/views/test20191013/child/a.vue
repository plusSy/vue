<template>
  <div>
    {{AName}}

    <br><br>

    <button @click="handleEmit">发射</button>
  </div>
</template>

<script>
export default {
  props: {
    AName: {
      type: Number,
      default: 9000
    },
    id: {
      type: [
        Number,
        String
      ],
      default: null
    },
    injectData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  created () {
    console.log(this.id)
    console.log(this.injectData.name)
  },
  methods: {
    handleEmit () {
      this.$emit('acceptState', true, 'xz')
    }
  }
}
</script>