<template>
  <div class="templateRender">
    <el-form :model="cateAttrFilter" :rules="cateAttrRules" ref="cateAttrFormForm" label-width="220px" class="demo-dynamic">
      <section v-for="(item, index) in cateAttrFormData" :key="index">
        <el-form-item
          :label="item.attrName"
          :prop="item.attrDescCode"
          v-if="item.display">
          <!-- TEXT 长文本 -->
          <template v-if="['TEXT'].includes(item.attrMaintMed)">
            <el-input
              :value="cateAttrFilter[item.attrDescCode]"
              type="textarea"
              autosize
              placeholder="请输入内容"
              :disabled="item.attrEditYn === '0'"
              @blur="handleValueChange('cateAttrFilter', $event, index, item.attrDescCode, 'TEXT')"></el-input>
          </template>

          <!-- INPUT 输入框 -->
          <template v-else-if="['INPUT'].includes(item.attrMaintMed)">
            <el-input
              :value="cateAttrFilter[item.attrDescCode]"
              :disabled="item.attrEditYn === '0'"
              @blur="handleValueChange('cateAttrFilter', $event, index, item.attrDescCode, 'INPUT')"></el-input>
          </template>

          <!-- CHECKBOX -->
          <template v-else-if="['CHECKBOX'].includes(item.attrMaintMed)">
            <el-checkbox-group
              :value="cateAttrFilter[item.attrDescCode]"
              :disabled="item.attrEditYn === '0'"
              @change="handleLinkAttrVal(item, $event)"
              @input="handleValueChange('cateAttrFilter', $event, index, item.attrDescCode, 'CHECKBOX')">
              <el-checkbox v-for="(cell, cellIdx) in item.dictValues" :label="cell.dictValueCode" :key="cellIdx">{{ cell.dictValue }}</el-checkbox>
            </el-checkbox-group>
          </template>

          <!-- RADIO -->
          <template v-else-if="['RADIO'].includes(item.attrMaintMed)">
            <el-radio-group
              :value="cateAttrFilter[item.attrDescCode]"
              :disabled="item.attrEditYn === '0'"
              @change="handleLinkAttrVal(item, $event)"
              @input="handleValueChange('cateAttrFilter', $event, index, item.attrDescCode, 'RADIO')">
              <el-radio v-for="(cell, cellIdx) in item.dictValues  " :label="cell.dictValueCode" :key="cellIdx">{{ cell.dictValue }}</el-radio>
            </el-radio-group>
          </template>

          <!-- SELECT -->
          <template v-else-if="['SELECT'].includes(item.attrMaintMed)">
            <el-select
              :value="cateAttrFilter[item.attrDescCode]"
              placeholder="请选择"
              :disabled="item.attrEditYn === '0'"
              @change="handleLinkAttrVal(item, $event)"
              @input="handleValueChange('cateAttrFilter', $event, index, item.attrDescCode, 'SELECT')">
              <el-option v-for="item in item.dictValues" :key="item.dictValue" :label="item.dictValue" :value="item.dictValueCode">
              </el-option>
            </el-select>
          </template>

          <!-- DATE -->
          <template v-else-if="['DATE'].includes(item.attrMaintMed)">
            <el-date-picker
               :value="cateAttrFilter[item.attrDescCode]"
               type="date"
               value-format="timestamp"
               format="yyyy年 MM月 dd日"
               :disabled="item.attrEditYn === '0'"
               placeholder="选择日期"
               @input="handleValueChange('cateAttrFilter', $event, index, item.attrDescCode, 'DATE')">
             </el-date-picker>
          </template>

          <template v-else>
            <span style="color: red;">暂未开放该种维护方式.</span>
          </template>

        </el-form-item>
      </section>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'TemplateRender',
  data () {
    return {
      cateAttrFilter: {},
      cateAttrRules: {},
      cateAttrFormData: [
        {
          attrName: '测试',
          attrDescCode: 'TM-001',
          attrValue: '输入框值1',
          attrMaintMed: 'INPUT',
          attrEditYn: '1',
          display: true,
          disabled: false,
          attrNullYn: '1'
        }
      ]
    }
  },
  created () {
    this.handleCateAttrFilter()
    this.handleCateAttrRules()
  },
  methods: {
    // 根据返回数据, 得到变量值
    handleCateAttrFilter () {
      this.cateAttrFormData.map(item => {
        this.cateAttrFilter[item.attrDescCode] = item.attrValue
      })
      console.log('this.cateAttrFilter', this.cateAttrFilter)
    },
    // 根据返回数据, 获取校验规则
    handleCateAttrRules () {
      let obj = {}
      let payload = this.cateAttrFormData
      payload.map(item => {
        let newRule = []
        newRule.push({ required: item.attrNullYn === '1', message: `${item.attrName} 不能为空值`, trigger: ['TEXT', 'INPUT'].includes(item.attrMaintMed) ? 'blur' : 'change' })
        if (['TEXT', 'INPUT'].includes(item.attrMaintMed) && item.attrRegular) {
          newRule.push({ pattern: item.attrRegular, message: `${item.attrName}格式不正确!`, trigger: 'blur' })
        }
        if (item.attrMaintMed === 'INPUT') {
          newRule.push({ min: 1, max: 32, message: `${item.attrName}长度在 1 到 32 个字符`, trigger: 'blur' })
        } else if (item.attrMaintMed === 'TEXT') {
          newRule.push({ min: 1, max: 249, message: `${item.attrName}长度在 1 到 249 个字符`, trigger: 'blur' })
        }
        obj[item.attrDescCode] = newRule
      })
      this.cateAttrRules = obj
      console.log('校验规则', this.cateAttrRules)
    },
    // 值变更
    handleValueChange: function (objName, val, key, keyCode, type) {
      val = ['CHECKBOX', 'RADIO', 'DATE', 'SELECT'].includes(type) ? val : val.target.value
      this[objName][keyCode] = val
      this.cateAttrFormData[key].attrValue = val

      console.log('值变更')
    }
  }
}
</script>

