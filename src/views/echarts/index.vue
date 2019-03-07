<template>
  <div>
    <div id="charts1" style="width: 1000px; height: 800px;"></div>
  </div>
</template>

<script>
export default {
  name: 'echartsDemo',
  data () {
    return {}
  },
  mounted () {
    this.initEcharts()
  },
  methods: {
    initEcharts () {
      // 获取容器
      let myChart = this.$echarts.init(document.getElementById('charts1'))

      // 配置参数
      let options = {
        title: {
          text: '2016年12月长宁区合规成本分析'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['包租费', '装修费', '保洁费', '物业费'],
          align: 'right',
          right: 10
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北']
        }],
        yAxis: [{
          type: 'value',
          name: '总价(万元)',
          axisLabel: {
            formatter: '{value}'
          }
        }],
        series: [{
          name: '包租费',
          type: 'bar',
          data: [20, 12, 31, 34, 31]
        }, {
          name: '装修费',
          type: 'bar',
          data: [10, 20, 5, 9, 3]
        }, {
          name: '保洁费',
          type: 'bar',
          data: [1, 1, 2, 3, 1]
        }, {
          name: '物业费',
          type: 'bar',
          data: [0.1, 2, 3, 1, 0.5]
        }]
      }

      // 绘制图表
      myChart.setOption(options)
    }
  }
}
</script>

