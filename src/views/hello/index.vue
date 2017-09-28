<template>
  <div class="con">
    <h1>{{ msg }}</h1>
    <input type="text" class="input-normal" v-model='data'>
    <br><br><br>
    <button class="button-normal" @click='_queryBaiduMsg(data)'>查询</button>
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
      msg: 'Welcome to Our Vue.js App',
      list: '储存数据',
      data: ''
    }
  }
}
</script>
