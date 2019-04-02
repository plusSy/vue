<template>
  <div>
    <el-row>
      <el-select v-model="option" multiple placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-row>

    <el-row>
      <template v-for="(item, index) in option">
        <el-button type="text" :key="index" @click="changeSystem(item)">系统{{item}}</el-button>
      </template>

      <nestChild :childValue="childValue" v-model="childVal"></nestChild>
    </el-row>

    <el-row>
      <el-button @click="submit">提交</el-button>
    </el-row>


    {{ childVal  }}
  </div>
</template>
<script>
import nestChild from './child/index'
export default {
  name: 'nest',
  components: {
    nestChild
  },
  data () {
    return {
      option: [],
      options: [
        { label: '系统1', value: '1' },
        { label: '系统2', value: '2' },
        { label: '系统3', value: '3' }
      ],
      postData: [],
      childValue: '',
      childVal: {}
    }
  },
  methods: {
    changeSystem (item) {
      this.childValue = item
    },
    submit () {
      console.log('提交', this.childVal)
    }
  }
}
</script>

