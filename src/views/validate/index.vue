<template>
  <div>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic" label-position="right">
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :label="'域名' + index"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true, message: '域名不能为空', trigger: 'blur'
        }"
      >
        <el-input v-model="domain.value"></el-input>
        <el-button class="define-del" @click.prevent="removeDomain(domain)">删除</el-button>

        <template>
          <el-form-item 
            v-for="(list, listIdx) in dynamicValidateForm.domains[index].lists" 
            :key="listIdx"
            :prop="'domains.' + index + '.lists.' + listIdx + '.name'"
            :rules="{required: true, message: 'list不能为空', trigger: 'blur'}"
            class="define-form-item"
          >
            <el-input 
              :value="list.name" 
              @blur="selectChange($event.target.value, index, listIdx, 'name')"
            ></el-input>
          </el-form-item>
        </template>

      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="addDomain">新增域名</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Validate',
  data () {
    return {
      dynamicValidateForm: {
        domains: [{
          value: '',
          lists: [{name: ''}, {name: ''}]
        }],
        email: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain (item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain () {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      })
    },
    selectChange (value, index, listIdx, key) {
      this.dynamicValidateForm.domains[index].lists[listIdx][key] = value || ''
    }
  }
}
</script>

<style scoped>
.el-form-item{
  width: 60%;
}
.define-del{
  position: absolute;
  right: -85px;
  top: 0px;
}
.el-form-item__content{
  padding-bottom: 15px;
}
.define-form-item{
  margin-top: 20px;
}
</style>

