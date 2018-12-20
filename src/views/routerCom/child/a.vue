<template>
  <div>
    <br>
    a: {{ new Date() }}
    
    <el-button @click="handleConsole">查看数据</el-button>
  </div>
</template>

<script>
import { fullMenuList } from './mockData'
export default {
  name: 'A',
  created () {
    console.log('处理前', fullMenuList)
    this.treeData = JSON.parse(JSON.stringify(fullMenuList))
  },
  data () {
    return {
      treeData: []
    }
  },
  mounted () {
    this.treeData = this.getArray(fullMenuList)
  },
  methods: {
    getArray (data) {
      let newArr = []
      let newData = JSON.parse(JSON.stringify(data))
      newArr = newData.map(item => {
        item.perList = []
        item.menuSelect = 'false'
        item.perList = false
        item.isControl = false
        item.disabled = false
        this.getArray(item.children)
        return item
      })
      return newArr
    },
    handleConsole () {
      console.log('处理后 treeData', this.treeData)
      console.log('处理后 fullMenuList', fullMenuList)
    }
  }
}
</script>
