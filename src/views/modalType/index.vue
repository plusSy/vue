<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="90%"
    @close="handleClose">
    <div class="audio">
      <!-- banner部分 -->
      <div class="banner">
        <!-- <img src="./resource/title.png"> -->
        <div>
            <p>智子电话机器人</p>
            <p>语音案例</p>
        </div>
        
        <!-- <img src="./resource/finance.png" class="finace"> -->
        <p>智子电话机器人推出“机器人+人工”的协同外呼新模式，通话中只要是意向客户，机器可以实现转接人工模式，让优质客户享受最专业的服务，令沟通更高效。</p>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'MODAL-CHILD',
  data () {
    return {
      dialogVisible: true
    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
      this.$emit('close')
    }
  }
}
</script>

