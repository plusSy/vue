import Store from '../store.js'

export default {
  name: 'addrInput',
  data () {
    return {}
  },
  computed: {
    downOrUp: {
      get () { return Store.downOrUp },
      set (val) { return val }
    },
    effectValue: vm => {
      return Store.effectValue
    }
  },
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // placeholder
    placeholder: {
      type: String,
      default: '请选择...'
    }
  },
  methods: {
    handleFocus () {
      Store.downOrUp = Store.downOrUp === 'down' ? 'up' : 'down'
    }
  }
}
