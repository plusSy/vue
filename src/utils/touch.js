class TouchHelper {
  constructor () {
    /**
     * 开始滑动的位置
     */
    this.startX = 0
    this.startY = 0
    /**
     * 滑动的位移
     */
    this.deltaX = 0
    this.deltaY = 0
    /**
     * 活动的距离
     */
    this.offsetX = 0
    this.offsetY = 0
    /**
     * 滑动的横轴还是纵轴
     */
    this.direction = ''
  }
  touchStart (event) {
    /**
     * 清空原先滑动数据
     */
    this.resetTouchStatus()
    /**
     * 开始滑动的位置
     */
    this.startX = event.touches[0].clientX
    this.startY = event.touches[0].clientY
  }

  touchMove (event) {
    const touch = event.touches[0]
    this.deltaX = touch.clientX - this.startX
    this.deltaY = touch.clientY - this.startY
    this.offsetX = Math.abs(this.deltaX)
    this.offsetY = Math.abs(this.deltaY)
    /**
     * 判断横向手势滑动还是纵向手势滑动
     */
    this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : ''
  }

  resetTouchStatus () {
    this.direction = ''
    this.deltaX = 0
    this.deltaY = 0
    this.offsetX = 0
    this.offsetY = 0
  }
}
export default TouchHelper
