<template>
  <div style="width: 930px; margin: 0 auto;">
    <el-table
      :data="lists"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column label="地址">
          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>


    <div style="width: 100%; margin-top: 30px;">
      <table border cellspacing="0" style="width: 100%">
        <thead id='appendchild'>
          <tr>
            <th v-for="(th, thIdx) in tablesValues.headList" :key="thIdx" v-if="thIdx in emptyarr" rowspan="2">{{ th.colName }}</th>
            <th v-for="(th, thIdx) in tablesValues.headList" :key="thIdx" v-if="thIdx in samilerArr" >{{ th.category }}</th>  <!-- :colspan='`${samilerArrLength + 1}`' -->
            <th rowspan='2'>操作</th>
          </tr>
          <tr>
            <th v-for="(th, thIdx) in tablesValues.headList" :key="thIdx" v-if="thIdx in samilerArr">{{ th.colName }}</th>
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
  import * as data from './element.json'
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
    created () {
      this.title = data.titles
      this.lists = data.tableData
      this.tablesValues = data.tablesValues
      // console.log(data.tablesValues)
      this._coTehead()
    },
    methods: {
      _coTehead () {
        let headList = this.tablesValues.headList
        let emptyarr = []
        let samilerArr = []
        let newSamilerArr = []
        headList.forEach((value, index, array) => {
          if (value.category === '') {
            emptyarr.push(index)
          } else if (value.category && array[index].category === array[index - 1].category) {
            samilerArr.push(index - 1)
            samilerArr.push(index)
          }
        })
        samilerArr.forEach((value, index) => {
          for (let i = 0; i < samilerArr.length; i++) {
            if (newSamilerArr.indexOf(samilerArr[i]) === -1) {
              newSamilerArr.push(samilerArr[i])
            }
          }
          headList[value].category = ''
        })
        samilerArr = newSamilerArr
        emptyarr.forEach((value) => {
          headList[value].category = headList[value].colName
        })
        this.emptyarr = emptyarr
        this.samilerArr = samilerArr
        this.samilerArrLength = samilerArr.length
        console.log('空的', emptyarr)
        console.log('有的', samilerArr)
        console.log(headList)
        // document.getElementById('appendchild').appendchild('tr')
        // let trCon = document.getElementById('appendchild')
        // console.log(trCon)
      }
    }
  }
</script>
