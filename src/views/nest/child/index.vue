<template>
  <div>
    {{ childValue }}
     <el-tabs v-model="childData" @tab-click="handleClick">
      <template v-for="(item, index) in tabPanes">
        <el-tab-pane :key="index" :label="item.label" :name="item.name">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="日期"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'nest-child',
  props: {
    childValue: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      childData: '',
      tabPanes: [
        { label: '账号配置角色', name: 'first' },
        { label: '信天翁角色配置', name: 'second' },
        { label: '账户配置费收账号', name: 'third' }
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      multipleSelection: [],
      childObj: {
        parentsValue: '',
        childsData: []
      },
      childsData: []
    }
  },
  methods: {
    handleClick (value) {
      let obj = {}
      let { childValue } = this

      obj.name = value.name
      obj.label = value.label
      obj.selected = value.$children[0].selection
      this.childObj.parentsValue = childValue
      this.childObj.childsData.push(obj)

      this.$emit('input', this.childObj)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
