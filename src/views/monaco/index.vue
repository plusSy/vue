<template>
  <div class="text-left monaco" ref="main"></div>
</template>

<script>
import * as monaco from 'monaco-editor'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'

export default {
  name: 'Monaco',
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = monaco.editor.create(this.$refs.main, {theme: 'vs-dark', automaticLayout: false})

    this.cre()
  },
  methods: {
    cre () {
      this.editor.onDidChangeModelContent((e) => {
        // let model = this.editor.getModel()
        // 必须在nextTick处理，不然getPosition返回的位置有问题
        this.$nextTick(() => {
          // 获取当前的鼠标位置
          let pos = this.editor.getPosition()
          if (pos) {
            // 获取当前的行
            let line = pos.lineNumber
            // 如果当前行的内容为空，删除断点（空行不允许设置断点，我自己规定的，，，）
            if (this.editor.getModel().getLineContent(line).trim() === '') {
              this.removeBreakPoint(line)
            } else {
              // 如果当前行存在断点，删除多余的断点只保留一个
              if (this.hasBreakPoint(line)) {
                this.removeBreakPoint(line)
                this.addBreakPoint(line)
              }
            }
          }
        })
      })
    },
     // 添加断点
    async addBreakPoint (line) {
      let model = this.editor.getModel()
      if (!model) return
      let value = {range: new monaco.Range(line, 1, line, 1), options: { isWholeLine: true, linesDecorationsClassName: 'breakpoints' }}
      model.deltaDecorations([], [value])
    },
    // 删除断点，如果指定了line，删除指定行的断点，否则删除当前model里面的所有断点
    async removeBreakPoint (line) {
      let model = this.editor.getModel()
      if (!model) return
      let decorations
      let ids = []
      if (line !== undefined) {
        decorations = this.editor.getLineDecorations(line)
      } else {
        decorations = this.editor.getAllDecorations()
      }
      for (let decoration of decorations) {
        if (decoration.options.linesDecorationsClassName === 'breakpoints') {
          ids.push(decoration.id)
        }
      }
      if (ids && ids.length) {
        model.deltaDecorations(ids, [])
      }
    },
    // 判断该行是否存在断点
    hasBreakPoint (line) {
      let decorations = this.editor.getLineDecorations(line)
      for (let decoration of decorations) {
        if (decoration.options.linesDecorationsClassName === 'breakpoints') {
          return true
        }
      }
      return false
    }
  }
}
</script>
<style lang="css" scoped>
  .monaco{
    width: 100%;
    height: 700px;
  }
  .breakpoints{
    background: red;
    background: radial-gradient(circle at 3px 3px, white, red);
    width: 10px !important;
    height: 10px !important;
    left: 0px !important;
    top: 3px;
    border-radius: 5px;
  }x
</style>