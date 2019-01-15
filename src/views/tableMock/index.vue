<template>
  <div>
    <el-table :data="tableData">
      <template  v-for="(item, index) in dataKey">
        <el-table-column :prop="item"  :key="index" :label="item" v-if="item !== 'list'"></el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'tableMock',
  data () {
    return {
      tableData: [
        {
          account: '123',
          costTime: '2019-2-2',
          examTime: '30',
          score: '100',
          list: [
            {question1: '20'},
            {question2: '40'},
            {question3: '50'},
            {question4: '60'}
          ]
        },
        {
          account: '123',
          costTime: '2019-2-2',
          examTime: '30',
          score: '100',
          list: [
            {question1: '20'},
            {question2: '40'},
            {question3: '50'}
          ]
        }
      ]
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      let { tableData, dataKey = [], arr = [] } = this

      // 获取props
      tableData.map((item, index) => {
        // 获取一级props
        Object.keys(item).forEach(v => {
          dataKey = [...dataKey, v]
        })
        item.list.map(cell => {
           // 获取二级props
          Object.keys(cell).forEach(v => {
            dataKey = [...dataKey, v]
          })
        })
      })

      // 去重
      dataKey = dataKey.filter((element, index, self) => {
        return self.indexOf(element) === index
      })
      console.log('dataKey', dataKey)
      this.dataKey = dataKey

      // 数组提升层级
      arr = tableData.map(item => {
        item.list.map((cell, index) => {
          item['question' + (index + 1)] = cell['question' + (index + 1)]
        })
        delete item.list
        return item
      })
      console.log('arr', arr)
      this.tableData = arr
    }
  }
}
</script>
