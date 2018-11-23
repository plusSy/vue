<template>
  <input
    class="form-input"
    :disabled="disabled"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    @input="inputVlue($event.target.value)"
    @blur='handleBlur'
  >
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
  methods: {
    inputVlue (value) {
      this.$emit('input', value)
    },
    handleBlur (event) {
      this.$emit('blur', event)
    }
  }
}
</script>
