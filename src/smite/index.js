import Vue from 'vue'

const smite = {
  install: function () {
    Vue.mixin({
      methods: {
        saveHello (a) {
          this.$store.commit('save', { id: this.$options.name, list: a })
        },
        clearHello () {
          this.$store.commit('save', { id: this.$options.name, list: null })
        },
        _ArrayProcessing () {
          // some、every、filter、forEach、map 对数组进行操作，接受三个参数（item,index,array）数组当前项对应的值，数组当前项的下标，数组

          // some 返回bollean 有满足条件着即返回true
          const newSome = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
          const some = newSome.some((item, index, array) => {
            return item > 4
          })
          console.log('some----->')
          console.log(some)

          // every 返回bollean 所有满足条件方可返回true
          const newEvery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
          const every = newEvery.every((item, index, array) => {
            return item > 4
          })
          console.log('every----->')
          console.log(every)

          // forEach 直接处理当前数组 对遍历的数组里面的数据进行计算
          let newforEach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
          newforEach.forEach((item, index, array) => {
            if (index === 0) { console.log('forEach----->') }
            console.log(item + 1)
          })

          // map 遍历每一个元素，返回函数运行后的结果（数组），该数组与原始数组长度一定是相同的
          let newMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
          let map = newMap.map((item, index, array) => {
            return item + 1
          })
          console.log('map----->')
          console.log(map)

          // filter 遍历每一个元素，返回函数运行后的结果（数组），该数组与原始数组长度可以不相同
          let newFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
          let filter = newFilter.filter((item, index, array) => {
            return item > 4
          })
          console.log('filter----->')
          console.log(filter)
        }
      }
    })
  }
}

export default smite
