<template>
  <div>
    <br>
    routerCom: {{ new Date() }}

    <router-view></router-view>

    人民币: {{ 20 | MoneyFilter('￥') }}
    <br>
    美元: {{ 20 | MoneyFilter('$') }}


    <el-input type="textarea" v-html="textareaData"></el-input>
  </div>
</template>

<script>
export default {
  name: 'routerCom',
  data () {
    return {
      textareaData: '',
      searcg_result: {'response': [{'remark_name': 'u6587u535au54e5', 'user_id': 2, 'mobile': '13666666666', 'clerk_position': 'u5e97u957f', 'clerk_pic_url': '[{"type":"image","url":"//cdn-test.momowoo.com/1552439584000Desert.jpg"}]', 'clerk_intro': 'test123', 'wechat_account': '13822322232', 'wechat_qrcode': '[{"type":"image","url":"//cdn-test.momowoo.com/1552439670000eccb56ff-498b-4594-9e9f-1f873f9e9dab.png"}]', 'true_name': 'u535au54e5', 'id': 2, 'nick_name': 'u6587u535a', 'avatar': '//thirdwx.qlogo.cn/mmopen/PiajxSqBRaEJWeDiaURib4IHMycvKg8zAYzsjQbmq6YKVAkGibwIyafHtLsXULvcYJRBj7icd2y1bhn1VQMfoklntRA/132'}, {'remark_name': 'u4e0au6d77u7684u5201u6c11', 'user_id': 241, 'mobile': '18701719731', 'clerk_position': 'u5e97u957f', 'clerk_pic_url': '[{"type":"image","url":"//cdn-test.momowoo.com/1552442657000333.jpg"}]', 'clerk_intro': '33334u53cdu53cdu590du590du4ed8u4ed8', 'wechat_account': '33333', 'wechat_qrcode': '[{"type":"image","url":"//cdn-test.momowoo.com/1552442672000333.jpg"}]', 'true_name': 'u987eu6653u658c', 'id': 241, 'nick_name': 'u683cu5f0f', 'avatar': '//wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKz3TCp5qS3s1HnePlG553AuGIxTJBrbiajD2hQibbYcdBgCeu2Ly8eyswuia4Q84fTbKqYZQUkvoLOw/132'}]}
    }
  },
  created () {
    console.log(this.name)
    this.handleData()

    this.textareaData = "console.log('23')"
  },
  updated () {
    console.log('更新了没?', +new Date())
  },
  mounted () {
    console.log('变了没?', +new Date())
  },
  methods: {
    handleData () {
      let responce = this.searcg_result
      let newArr = []
      responce.response.map(item => {
        let url = JSON.parse(item.wechat_qrcode)[0].url
        item.wechat_qrcode = url
        newArr.push(item)
      })
      this.$set(this.searcg_result, 'response', newArr)

      console.log(this.searcg_result)
    }
  },
  filters: {
    moneyFilter (val, type) {
      console.log('val', val)
      return `${type}${val}`
    }
  }
}
</script>
