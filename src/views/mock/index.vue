<template>
  <div class='mock'>
    <h1>
      <button class="button-normal" @click="fetchData">fetchData</button>
      <button class="button-normal" @click="clearList">clearList</button>
      <small>list_length &nbsp;{{ list.length }}</small>
    </h1>
    <table class='table-normal'>
      <thead>
        <tr>
          <th>序号</th>
          <th>选择</th>
          <th>权限代码</th>
          <th>正式名称</th>
          <th>备注</th>
          <th>作用名</th>
          <th>登记时间</th>
          <th>登记人</th>
          <th>更新时间</th>
          <th>更新人</th>
          <th>终端编号</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cell,index) in list" class="tr-normal">
          <td>{{index+1}}</td>
          <td>
            <input type="checkbox" name="" value="cell">
          </td>
          <td>{{ cell.authoridycd }}</td>
          <td>{{ cell.name }}</td>
          <td>{{ cell.notes }}</td>
          <td>{{ cell.rolename }}</td>
          <td>{{ cell.adddatetime }}</td>
          <td>{{ cell.addusercd }}</td>
          <td>{{ cell.upddatetime }}</td>
          <td>{{ cell.upduserName }}</td>
          <td>{{ cell.terminalcd }}</td>
          <td>
            <div class="operation" ><a>删除</a></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style src="./mock.css"  scoped></style>

<script>
import * as lists from './mock.json'
export default {
  name: 'proJ-mock',
  data () {
    return {
      list: [],
      checksel: []
    }
  },
  methods: {
    fetchData () {
      // const url = '/mfloc'
      // const params = {
      //   warehousecd: '101',
      //   zone: '',
      //   line: '',
      //   buil: '',
      //   range: '',
      //   step: '',
      //   actflg: '',
      //   loctype: '',
      //   emptyflg: '',
      //   loccd: '',
      //   locgroup: '',
      //   isOrder: ''
      // }
      // const url = '/twaybilllog/selectTwaybillLog'
      // const params = {
      //   startDate: '2017-09-01',
      //   endDate: '2017-09-21',
      //   ywType: '',
      //   rzType: '',
      //   wbNo: '',
      //   memo: ''
      // }
      // this.$http.post(url, params).then(res => {
      //   // const { data: { list } } = res
      //   this.$store.commit('mocks', {id: this.$options.name, list: [{id: 1, name: 'mocks'}]})
      //   this.list = this.$store.state.proJ.mocks
      // })
      this.list = lists.lists
      this.$store.commit('mocks', {id: this.$options.name, list: this.list})
      this.list = this.$store.state.proJ.mocks[this.$options.name]
    },
    clearList () {
      this.$store.commit('mocks', {id: this.$options.name, list: null})
      this.list = this.$store.state.proJ.mocks[this.$options.name]
      this.list = []
    }
  }
}
</script>
