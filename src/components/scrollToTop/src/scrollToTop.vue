<template>
  <div class="scroll-icon" @click="toTop">
    <slot>顶部</slot>
  </div>
</template>
<script>
export default {
  name: 'AcScrollToTop',
  props: {
    toTop: {
      type: Function,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<style lang="css" scoped>
  .scroll-icon {
    width: 45px;
    height:45px;
    line-height: 45px;
    position: fixed;
    z-index: 10;
    right: 15px;
    bottom: 50px;
    border: 1px solid;
    border-radius: 45px;
    background-color: #ffffff
  }
  img {
    width: 100%;
    height: 100%;
  }
</style>
