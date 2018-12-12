<template>
  <div class="ac-loader" v-if="text">
    --- {{text}} ---
  </div>
</template>

<script>
export default {
  name: 'AcLoader',
  props: {
    text: {
      type: String,
      default: '加载中'
    }
  }
}
</script>

<style lang="css" scoped>
.ac-loader{
  width: 100%;
  padding: 20px 0;
  text-align: center;
}
</style>
