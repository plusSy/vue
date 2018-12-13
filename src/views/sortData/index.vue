<template>
  <div>
    <el-button @click="sort">排序</el-button>

    <ul>
      <li v-for="(item, index) in localData" :key="index" class="li-item">
       <el-row>
         <el-col :span="6" :offset="4"> en:&nbsp;&nbsp;&nbsp;{{ item.en }}</el-col>
         <el-col :span="6" :offset="4"> zh:&nbsp;&nbsp;&nbsp;{{ item.name }}</el-col>
       </el-row>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>

li{
  list-style: none;
}
.li-item{
  height: 18px;
  line-height: 18px;
  font-size: 16px;
  text-align: left;
}
</style>

<script>
import { phoneAreaCode } from './phoneAreaCode'

export default {
  name: 'Sort',
  data () {
    return {
      localData: []
    }
  },
  created () {
    this.localData = phoneAreaCode
  },
  methods: {
    sort () {
      this.localData = this.localData.sort((x, y) => {
        return x.en > y.en ? 1 : x.en < y.en ? -1 : 0
      })
    }
  }
}
</script>


