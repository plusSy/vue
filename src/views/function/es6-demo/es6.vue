<template>
  <div class="es6-demo">
    <div class="button-group">
      <button class="primay" @click="handleLoopResult">循环</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ES6-DEMO',
  methods: {
    handleLoopResult () {
      let x = 1
      for (let i = 1; i <= 10; i++) {
        x = x * i
      }
      console.log('结果输出', x)
    }
  }
}
</script>

<style lang="css" scoped>
.es6-demo {
  margin: 0 auto;
  width: 100%;
  height: 98vh;
  border: 1px solid #000000;
}
.button-group {
  margin-top: 20px;
}
.primay {
  padding: 2px 12px;
  background-color: aliceblue;
  border: 1px solid #000000;
  border-radius: 2px;
  outline: none;
  font-size: 12px;
}
</style>

