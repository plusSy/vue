<template>
  <div>
    <el-input v-model="selectKey" @change="handleSearch"></el-input>

    <el-table ref="multipleTable" :data="list" @selection-change="handleSelectionChange">
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column label="日期">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="姓名"> </el-table-column>
    <el-table-column prop="address" label="地址" show-overflow-tooltip> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableFilter',
  data () {
    return {
      list: [],
      baseData: [
        {date: '2018年12月20日', name: '111111111111111', address: '上海市杨浦区', isChecked: false},
        {date: '2018年12月21日', name: '1111112221', address: '上海市杨浦区', isChecked: true},
        {date: '2018年12月22日', name: '1111133331111', address: '上海市杨浦区', isChecked: true},
        {date: '2018年12月23日', name: '1114444111111', address: '上海市杨浦区', isChecked: false},
        {date: '2018年12月24日', name: '333333', address: '上海市杨浦区', isChecked: false},
        {date: '2018年12月25日', name: '555555555555555555', address: '上海市杨浦区', isChecked: false},
        {date: '2018年12月26日', name: '66666666666666666666', address: '上海市杨浦区', isChecked: true},
        {date: '2018年12月27日', name: '555555555544444444444433333333333', address: '上海市杨浦区', isChecked: false}
      ],
      selectKey: '',
      multipleSelection: []
    }
  },
  created () {
    this.list = this.baseData
  },
  mounted () {
    this.setSelectStatus()
  },
  methods: {
    // change事件调用
    handleSearch () {
      let {baseData, selectKey, multipleSelection} = this
      let filterArr = []
      let newArr = []
      // 过滤
      baseData.map(item => {
        if (item.name.indexOf(selectKey) > -1) {
          filterArr.push(item)
        }
      })
      this.list = filterArr
      // 勾选赋值
      this.list.map(item => {
        multipleSelection.map(cell => {
          if (item.name === cell.name) {
            newArr.push(item)
          }
        })
      })
      setTimeout(() => {
        this.setSelectStatus(newArr.length > 0 ? newArr : multipleSelection)
      }, 0)
    },
    // 设置 勾选状态
    setSelectStatus () {
      let { baseData } = this
      console.log('状态序列', baseData)
      baseData.map(row => {
        if (row.isChecked) {
          this.$refs.multipleTable.toggleRowSelection(row)
        }
      })
    },
    handleSelectionChange (val) {
      let { baseData } = this
      baseData = baseData.map(item => {
        val.map(cell => {
          item.isChecked = item.name === cell.name ? true : item.isChecked
        })
        return item
      })
      this.baseData = baseData
      this.multipleSelection = val
      this.setSelectStatus()
    }
  }
}
</script>
