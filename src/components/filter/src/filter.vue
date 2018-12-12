<template>
  <div class="ocj-filter" >
    <div :class="['filter-config']">
      <div v-for="(item, index) in localData" :key="index" class="filter-item" :style="`color: ${item.isActive ? activeColor : ''};${filterStyle}`" @click="changeSort(item, index)">
        <template v-if="item.type === 'normal'">
          {{ item.label }}
        </template>
        <template v-else-if="item.type === 'sort'">
          {{ item.label }}
          <template v-if="item.status === sortConfig.asc">
            <img :src="sortUpImg" @click="changeSort(item, index)" class="filter-icon">
          </template>
          <template v-else-if="item.status === sortConfig.desc">
            <img :src="sortDownImg" @click="changeSort(item, index)" class="filter-icon">
          </template>
          <template v-else>
            <img :src="sortDisImg" @click="changeSort(item, index)" class="filter-icon">
          </template>
        </template>
        <template v-else-if="item.type === 'filter'">
          {{ item.label }}
          <img :src="fillImg" class="filter-icon">
        </template>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcFilter',
  props: {
    // 过滤器数据配置
    filterConfig: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 默认值
    active: {
      type: String,
      default: ''
    },
    // 激活文字的颜色
    activeColor: {
      type: String,
      default: '#f0655d'
    },
    // font-size
    fontSize: {
      type: [String, Number],
      default: 13
    },
    // font-color
    fontColor: {
      type: String,
      default: '#666'
    },
    // 是否吸顶
    stick: {
      type: Boolean,
      default: false
    },
    // 排序配置
    sortConfig: {
      type: Object,
      default: () => {
        return {
          asc: 'asc',
          desc: 'desc'
        }
      }
    },
    /**
     * 范围 (缺省范围)
    */
    range: {
      type: [String, Number],
      default: 15
    }
  },
  data () {
    return {
      // sortDisImg: require('@/asserts/images/disSort.png'),
      // sortUpImg: require('@/asserts/images/top.png'),
      // sortDownImg: require('@/asserts/images/down.png'),
      // fillImg: require('@/asserts/images/fill.png'),
      sortDisImg: '',
      sortUpImg: '',
      sortDownImg: '',
      fillImg: '',
      localData: [],
      ceil: false
    }
  },
  created () {
    this.localData = this.filterConfig.map(item => {
      item.isActive = item.value === this.active
      item.status = item.type === 'sort' && item.isActive ? this.sortConfig.asc : ''
      return item
    })
  },
  computed: {
    filterStyle () {
      return {
        fontSize: this.fontSize + 'px',
        fontColor: this.fontColor
      }
    }
  },
  methods: {
    // 改变选项
    changeSort (cell, index) {
      let obj = {}
      this.localData = this.localData.map(item => {
        item.isActive = item.value === cell.value
        if (item.isActive) {
          if (item.type === 'sort') {
            item.status = item.status === this.sortConfig.asc ? this.sortConfig.desc : this.sortConfig.asc
          }
          obj = item
        } else {
          item.status = item.type === 'sort' ? '' : item.status
        }
        return item
      })
      let status = obj.type === 'sort' ? { status: obj.status } : {}
      this.$emit('changeSort', {label: obj.label, value: obj.value, type: obj.type, ...status})
    }
  }

}
</script>

<style lang="css" scoped>
.ocj-filter{
  background-color: #ffffff;
}
.filter-config{
  width: 100%;
  height: 40px;
  background-color: #fcfcfc;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
}
.filter-item{
  flex-grow: 1;
  position: relative;
}
.filter-icon{
  width: 10px;
  height: 13px;
  position: absolute;
  /* right: 23%; */
  margin-left: 5px;
}
.lodeMore{
  margin-bottom: 20px;
  width: 100%;
}
</style>
