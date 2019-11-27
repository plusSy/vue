/**
 * @module scripts
 * @description 页面快速生成脚本
 * @author syl
*/
const fs = require('fs')
const path = require('path')

const basePath = path.resolve(__dirname, '../src')
const dirName = process.argv[2]

if (!dirName) {
  console.log('文件夹名称不能为空!')
  console.log('template like this: npm run tpl ${fileName}')
  process.exit(0)
}

const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)

/**
 * @description Vue模板
*/
const VueTemplate = `
<template>
  <div class="${dirName}-wrap">
    {{ pageName }}
  </div>
</template>

<script src="./${dirName}.js"></script>

<style lang="css" scoped>
@import './${dirName}.css'
</style>
`

/**
 * @description Style模板
*/
const StyleTemplate = `
.${dirName}-wrap {
  width: 100%;
}
`

/**
 * @description JavaScript模板
*/
const JsTemplate = `
export default {
  name: "${capPirName}Template",
  data () {
    return {
      pageName: "${dirName}"
    }
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {}
}
`

// mkdir
fs.mkdirSync(`${basePath}/views/${dirName}`)
// cd views/${dirName}
process.chdir(`${basePath}/views/${dirName}`)
// touch files
fs.writeFileSync(`${dirName}.vue`, VueTemplate)
fs.writeFileSync(`${dirName}.css`, StyleTemplate)
fs.writeFileSync(`${dirName}.js`, JsTemplate)

console.log(`success: 模板${dirName}创建成功!`)

process.exit(0)
