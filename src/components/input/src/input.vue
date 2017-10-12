<template>
  <input :disabled="disabled" :type="type" :value="value" class="form-input" :placeholder="placeholder">
</template>
<style src="./input.css" lang="css" scoped></style>
<script>
export default {
  name: 'AcInput',
  props: {
    value: {
      default: function () {
        return ''
      }
    },
    type: {
      type: String,
      default: function () {
        return 'text'
      }
    },
    placeholder: {
      type: String,
      default: function () {
        return ''
      }
    },
    disabled: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  },
  methods: {}
}
</script>
