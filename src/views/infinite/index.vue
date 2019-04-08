<template lang="html">
  <div class="">
    <AcFilter :filterConfig="filterConfig" active="price" active-color="#f0655d" :stick="true" @changeSort="changeSort">
      <AcInfinite @loadMoreStatus="handleLoadMore" @refreshStatus="handleRefresh" @ceilStatus="handleCeil" showBack distance="40">
        <template slot="content">
          <div class="item" v-for="index in rangeData" :key="index">{{ index }}</div>
        </template>
        <template slot="loader">
          <AcLoader :text="localLoaderText"></AcLoader>
        </template>
      </AcInfinite>
      <div id="tip" style="width: 100%; height: 1000px; background-color: red;">tip</div>
    </AcFilter>
    <template>
      <div v-if="ceil" :class="{'stick' : ceil}">
        <AcFilter :filterConfig="filterConfig" active="price" active-color="#f0655d" :stick="true" @changeSort="changeSort"></AcFilter>
      </div>
    </template>
    <AcScrollToTop :toTop="backToTop" />
  </div>
</template>

<script>
export default {
  name: 'Infinite',
  data () {
    return {
      ceil: false,
      localLoaderText: '上拉刷新',
      filterConfig: [
        {
          label: '销量',
          type: 'normal',
          value: 'order'
        },
        {
          label: '新品',
          type: 'normal',
          value: 'sdate'
        },
        {
          label: '价格',
          type: 'sort',
          value: 'price'
        },
        {
          label: '筛选',
          type: 'filter',
          value: 'filter'
        }
      ],
      rangeData: 100
    }
  },
  mounted () {
    let a = document.createElement('a')
    a.href = this.$route.hash
    a.click()
    a = null
  },
  methods: {
    refresh () {
      this.timer = setTimeout(() => {
        this.rangeData = this.rangeData + 50
        this.localLoaderText = '上拉加载'
      }, 3000)
    },
    handleLoadMore (status) {
      if (status) {
        this.refresh()
        this.localLoaderText = '加载中'
      } else {
        clearTimeout(this.timer)
      }
    },
    handleRefresh (status) {
      return status ? console.log('顶部') : ''
    },
    handleCeil (status) {
      this.ceil = status
    },
    changeSort (cell) {
      console.log('changeSort', cell)
      if (cell.name === '筛选') {
        alert('打开筛选弹层')
      }
      this.backToTop()
    },
    // 返回顶部
    backToTop () {
      window.scrollTo(0, 100)
    }
  }
}
</script>

<style>
.item{
height: 40px;
width: 100%;
line-height: 40px;
border-bottom: 1px solid;
}
.stick{
width: 100%;
position: fixed;
top: 0px;
}
</style>
