<template>
  <div>
    <br>
    routerCom: {{ new Date() }}

    <router-view></router-view>

    人民币: {{ 20 | MoneyFilter('￥') }}
    <br>
    美元: {{ 20 | MoneyFilter('$') }}
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
  },
  filters: {
    moneyFilter (val, type) {
      console.log('val', val)
      return `${type}${val}`
    }
  }
}
</script>
