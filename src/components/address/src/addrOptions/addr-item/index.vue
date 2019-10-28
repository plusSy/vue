<template>
  <li class="addr-menu__item">

    <el-checkbox
      v-if="multiple"
      class="addr-resetEL"
      :indeterminate="isIndeterminate"
      :checked="checked"
      @change="chooseData"
      size="mini"
    ></el-checkbox>
    <el-radio
      v-else-if="checkStrictly"
      class="addr-resetEL"
      @change="chooseData"
      :label="data.value"
      :value="data"
    >
      <span></span>
    </el-radio>
    <i v-else-if="isLeaf && true" class="el-icon-check el-cascader-data__prefix"></i>


    <span :class="['addr-item__label', {'addr-item__check': multiple || checkStrictly}]" @click="handleEmitData">{{ data.label }}</span>

    <i v-if="loading" class="el-icon-loading el-cascader-data__postfix"></i>
    <i v-if="!loading && showExpand" class="el-icon-arrow-right el-cascader-data__postfix" @click="handleExpand"></i>
  </li>
</template>

<script>
// const stopPropagation = e => e.stopPropagation()

import addrOptions from './../index.vue'
import Store from '../../store'

export default {
  name: 'addr-item',
  components: {addrOptions},
  data () {
    return {
      loading: false,
      showExpand: true
    }
  },
  props: {
    data: { type: Object, default: () => { return {} } },
      // 是否最终子节点
    isLeaf: { type: Boolean, default: false },
      // 是否多选
    multiple: { type: Boolean, default: true },
      // 父子组件互不关联
    checkStrictly: { type: Boolean, default: false },
    optionsIdx: { type: Number },
    itemIdx: { type: Number }
  },
  computed: {
    checked () {
      return this.data.checked ? this.data.checked : false
    },
    isIndeterminate () {
      return this.data.indeterminate ? this.data.indeterminate : false
    }
  },
  mounted () {},
  methods: {
      // 后台数据更改
    handleExpand () {
      console.log('handleExpand')
      this.loading = true
      let child = []
      let { data: { value, checked } } = this

      setTimeout(() => {
        this.clearPath()

        if (value === 1001) {
          child = [
              { value: 1001001, label: '黄浦区', level: 2, parentId: 1001, children: null, indeterminate: null },
              { value: 1001002, label: '杨浦区', level: 2, parentId: 1001, children: null }
          ]
          child = this.checkChildStatus(checked, child)

          console.log('status change', child)
          Store.panalArr.push(child)
          Store.currPath.push(this.data)
        } else if (value === 1002) {
          child = [{ value: 1002001, label: '东城区', level: 2, parentId: 1002, children: null }]
          Store.panalArr.push(child)
          Store.currPath.push(this.data)
        } else if (value === 1001001) {
          child = [{ value: 1001001001, label: '街道', level: 3, parentId: 1001001, children: null }]
          child = this.checkChildStatus(checked, child)
          Store.panalArr.push(child)
          Store.currPath.push(this.data)
        } else {
          this.showExpand = false
        }

        console.log('Store.currPath', Store.currPath)

        this.loading = false
      }, 500)
    },
      // 选择节点
    handleEmitData () {
      if (this.multiple) return
      this.clearPath()
      Store.selectArr = [...Store.currPath, this.data]
      this.handleEffData()
    },
      // checkbox 操作
    chooseData () {
      this.clearPath()
      let { data: { checked } } = this
      let panalArr = Store.panalArr
      this.data.checked = !checked

        // panalArr.map(item => {
        //   item[0].indeterminate = true;
        //   item[0].checked = false;
        // })

      console.log('this.data', panalArr)
      debugger

        // if (!multiple) {
        //   Store.selectArr.push([...Store.currPath, this.data]);
        // } else {
        //   this.multipleData();
        // }
        // console.log('store selecteArr', Store.selectArr)
    },
      // 地址切换,清空panalArr, currPath
    clearPath () {
        // 删除当前节点的子节点
      Store.panalArr = Store.panalArr.splice(0, this.data.level)
        // 清除当前选中节点子节点
      Store.currPath = Store.currPath.splice(0, this.data.level - 1)
    },
      // 勾选子节点
    checkChildStatus (status, arr) {
      arr = arr.map(item => {
        item.checked = status
        return item
      })
      return arr
    },
      // 清洗展示数据
    handleEffData () {
      let selectArr = Store.selectArr
      let arr = []
      let newId = []
      let newName = []
      let newObj = {}

      if (selectArr.length > 0) {
        selectArr.map(item => {
          newId.push(item.value)
          newName.push(item.label)
        })

        newObj.id = newId.join(',')
        newObj.name = newName.join(' / ')
        arr.push(newObj)
      }
      console.log('handleEffData', arr)
      Store.effectValue = arr
    },
      // 多选时候数据清洗
    multipleData () {
      let panalArr = Store.panalArr

      console.log('多选时候数据清洗', panalArr)
    }
  }
}
</script>