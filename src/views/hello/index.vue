<template>
  <div class="con">
    <h1>{{ msg }}</h1>
    <div class='div-input'>
      <ac-input type='text' v-model='data'></ac-input>
    </div>
    <br><br><br>
    <button class="button-normal" @click='_queryBaiduMsg(data)'>查询</button>
    <button class="button-normal" @click='saveHello(list)'>存贮数据</button>
    <button class="button-normal" @click='clearHello'>删除数据</button>
    <button class="button-normal" @click='_ArrayProcessing'>测试过滤条件</button>
    <button class="button-normal" @click='changePagination'>改变vuexPagination</button>

    <button id="jqDemo" class="button-normal" @click='_Jquery'>Jquery</button>

    <button class="button-normal" @click='BtnJump'>BtnJump</button>

    <button class="button-normal" @click='openMoal()'>openMoal</button>



    <br><br><br>
    <hr>
    <br><br><br>
    <div class="pagination">
      {{ pagination }}
    </div>

    <componte :is="modal" @close="close" :injectData="injectData"></componte>
  </div>
</template>

<style src="./hello.css" scoped></style>

<script>
import { mapState } from 'vuex'
import ChildModal from './../modalType/index'

export default {
  name: 'hello',
  components: {
    ChildModal
  },
  data () {
    return {
      modal: null,
      msg: 'Welcome to Our Vue.js project 😊',
      list: '储存数据',
      data: '',
      injectData: {}
    }
  },
  computed: {
    ...mapState({
      pagination: (state) => {
        return state.pagination
      }
    })
  },
  methods: {
    changePagination () {
      this.$store.commit('changePagination', {})
    },
    _Jquery () {
      this.jQuery('#jqDemo').css({
        color: 'red'
      })
    },
    BtnJump () {
      this.$router.push('/infinite#tip')
    },
    openMoal () {
      this.modal = ChildModal
    },
    close () {
      this.modal = null
    }
  }
}
</script>
