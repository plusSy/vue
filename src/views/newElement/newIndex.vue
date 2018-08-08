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
        <thead id='tabHead'>

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
import * as data from './newElement.json'
export default {
  data () {
    return {
      lists: [],
      tablesValues: [],
      emptyarr: [],
      samilerArr: [],
      samilerArrLength: null
    }
  },
  mounted () {
    this.lists = data.tableData
    this.tablesValues = data.tablesValues
    this._coTehead()
  },
  methods: {
    _coTehead () {
      let headDom = document.getElementById('tabHead')
      let oneTr = document.createElement('tr')
      let twoTr = document.createElement('tr')
      let tabData = this.tablesValues.headList
      let arr = {}
      for (let i = 0; i < tabData.length; i++) {
        if (!tabData[i].category) {
          let th = document.createElement('th')
          th.innerText = tabData[i].colName
          th.setAttribute('rowspan', '2')
          oneTr.appendChild(th)
        } else {
          let a = tabData[i].category
          if (arr[a]) {
            arr[a]++
          } else {
            arr[a] = 1
          }
          let twoth = document.createElement('th')
          twoth.innerText = tabData[i].colName
          twoTr.appendChild(twoth)
        }
      }
      for (let j in arr) {
        let oneth = document.createElement('th')
        oneth.innerText = j
        oneth.setAttribute('colspan', arr[j])
        oneTr.appendChild(oneth)
      }
      headDom.appendChild(oneTr)
      headDom.appendChild(twoTr)
    }
  }
}
</script>
