<template>
  <div ref="scrollContainer">
    <div
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <slot name="content"></slot>
    </div>
    <slot name="loader">
       <AcLoader :text="localLoaderText"></AcLoader>
    </slot>
  </div>
</template>

<script>
import AcLoader from '../../loader/'
import TouchHelper from '../../../utils/touch'

export default {
  name: 'AcInfinite',
  components: {
    AcLoader
  },
  data () {
    return {
      localLoaderText: '上拉加载',
      containerOffsetTop: 0, // scroll上部分偏移
      containerScrollHeight: 0, // scroll整体高度
      screenHeight: 0, // 屏幕高度
      scrollY: 0, // 滚动Y
      currentY: 0, // 当前位置
      isTop: false, // 是否在顶部
      isBottom: false, // 是否在底部
      isCeil: false // 是否吸顶
    }
  },
  props: {
    // 距离
    distance: {
      type: [String, Number],
      default: 0
    },
    // 偏移量
    offsetY: {
      type: [String, Number],
      default: 15
    }
  },
  computed: {
    $touch () {
      return new TouchHelper()
    }
  },
  mounted () {
    this.initWindow()
    this.computeDom()
  },
  methods: {
    initWindow () {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
      this.screenHeight = window.screen.height || 0
    },
    // 计算 DOM
    computeDom () {
      let { offsetTop: containerOffsetTop, offsetHeight: containerScrollHeight } = this.$refs.scrollContainer
      this.containerOffsetTop = containerOffsetTop
      this.containerScrollHeight = containerScrollHeight
    },
    handleScroll () {
      this.computeDom()
      // 当前位置
      this.currentY = window.scrollY

      this.istop = window.scrollY < Number(this.distance)

      this.isBottom = !(this.containerScrollHeight + this.containerOffsetTop - this.screenHeight - window.scrollY > Number(this.distance))

      this.isCeil = this.containerOffsetTop - window.scrollY < Number(this.distance)
      this.$emit('ceilStatus', this.isCeil)
    },
    // 页面resize
    handleResize () {
      this.computeDom()
    },
    onTouchStart (event) {
      this.$touch.touchStart(event)
    },
    onTouchMove (event) {
      this.$touch.touchMove(event)
      if (!this.$touch.direction === 'vertical') {
        this.prevent(event)
      }
    },
    onTouchEnd () {
      if (this.$touch.offsetY > this.offsetY) {
        if (this.isBottom) {
          this.localLoaderText = '加载中...'
          this.$emit('loadMoreStatus', true)
        } else if (this.isTop) {
          this.$emit('refreshStatus', true)
        } else {
          this.localLoaderText = '上拉加载'
          this.$emit('loadMoreStatus', false)
          this.$emit('refreshStatus', false)
        }
      }
    },
    prevent (event) {
      event.preventDefault()
      event.stopPropagation()
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>
