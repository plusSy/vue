<template>
  <div style="width: 930px; margin: 0 auto;">
    <el-table :data="lists" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份" width="120">
          </el-table-column>
          <el-table-column prop="city" label="市区" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="300">
          </el-table-column>
          <el-table-column prop="zip" label="邮编" width="120">
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>

    <div style="width: 100%; margin-top: 30px;">
      <table border cellspacing="0" style="width: 100%">
        <thead>
          <tr>
            <th v-for="(item, oneIdx) in one" :key="oneIdx" :rowspan="item.fatherColName ? null : 2" :colspan="item.colspan">
              <template v-if="item.colspan > 1">
                {{item.fatherColName}}
              </template>
              <template v-else>
                {{item.colName}}
              </template>
            </th>
          </tr>
          <tr>
            <th v-for="(item, twoIdx) in two" :key="twoIdx">{{item.colName}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/**
 * 表头合并例子
 */
import * as conTable from './element.json'
export default {
  data () {
    return {
      lists: [],
      tablesValues: [],
      emptyarr: [],
      samilerArr: [],
      samilerArrLength: null,
      one: [],
      two: []
    }
  },
  created () {
    this.title = conTable.titles
    this.lists = conTable.tableData
    this.tablesValues = conTable.tablesValues
    // console.log(data.tablesValues)
    this._dealThead()
  },
  methods: {
    _dealThead () {
      let headList = this.tablesValues.headList
      const one = []
      const two = []
      headList.forEach((item, index) => {
        item.colspan = 1
        if (index > 0 && one.length > 0) {
          if (item.fatherColName) {
            two.push(item)
          }
          if (item.fatherColName && item.fatherColName === one[one.length - 1].fatherColName) {
            one[one.length - 1].colspan++
          } else {
            one.push(item)
          }
        } else {
          one.push(item)
        }
      })
      // console.log('finishedOne', one)
      // console.log('finishedTwo', two)
      this.one = one
      this.two = two
    }
  }
}
</script>
