import Vue from 'vue'

export default Vue.observable({
  downOrUp: 'down',
  effectValue: [], // 展示内容
  selectArr: [], // 选中的路径
  currPath: [], // 当前路径
  panalArr: [
    [
      {
        value: 1001,
        label: '上海',
        parentId: 1,
        level: 1,
        indeterminate: false,
        checked: false
      },
      {
        value: 1002,
        label: '北京',
        parentId: 1,
        level: 1,
        indeterminate: false
      },
      {
        value: 1003,
        label: '山西',
        parentId: 1,
        level: 1
      }
    ]
  ]
})
