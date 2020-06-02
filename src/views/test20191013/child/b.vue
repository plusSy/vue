<template>
  <div>
    <button @click="sendTwo">点一下</button>
  </div>
</template>

<script>
export default {
  props: {
    dataFun: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  created () {
    console.log(this.dataFun)
  },
  methods: {
    sendTwo () {
      this.$emit('reciveTwo', this.dataFun[1].name)
    }
  }
}
</script>