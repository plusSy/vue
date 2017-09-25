<template>
  <div class="con">
    <h1>{{ msg }}</h1>
    <button class="button-normal" @click='showHello'>点击测试</button>
  </div>
</template>

<style src="./hello.css" scoped></style>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
