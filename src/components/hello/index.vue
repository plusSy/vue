<template>
  <div class="con">
    <h1>{{ msg }}</h1>
    <button class="button-normal" @click='saveHello(list)'>存贮数据</button>
    <button class="button-normal" @click='clearHello'>删除数据</button>
    <button class="button-normal" @click='_ArrayProcessing'>测试过滤条件</button>
  </div>
</template>

<style src="./hello.css" scoped></style>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: '储存数据'
    }
  }
}
</script>
