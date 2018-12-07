<template>
  <div>
    <br>
    routerCom: {{ new Date() }}

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'routerCom',
  created () {
    console.log(this.name)
  },
  updated () {
    console.log('更新了没?', +new Date())
  },
  mounted () {
    console.log('变了没?', +new Date())
  }
}
</script>
