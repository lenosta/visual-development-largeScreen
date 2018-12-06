<template>
  <div :class="['box-b',className]" ref='box' :id='bid'>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      let boxDom = this.$refs.box
      this.setSize(boxDom, this.size)
      this.setPosition(boxDom, this.position)
      this.setStyle(boxDom, this.boxStyle)
      this.initCallBack()
    })
  },
  components: {
    // chartBox
  },
  methods: {
    setPosition(dom, position) {
      var defaultPosition = Object.assign({}, position)
      defaultPosition.top && (dom.style.top = defaultPosition.top)
      defaultPosition.left && (dom.style.left = defaultPosition.left)
      defaultPosition.right && (dom.style.right = defaultPosition.right)
      defaultPosition.bottom && (dom.style.bottom = defaultPosition.bottom)
    },
    setSize(dom, size) {
      var defaultSize = Object.assign({}, { width: '300px', height: '300px' }, size)
      dom.style.width = defaultSize.width
      dom.style.height = defaultSize.height
    },
    setStyle(dom, boxStyle) {
      if (!this.boxStyle) return
      for (let i in this.boxStyle) {
        boxDom.style[i] = this.boxStyle[i]
      }
    },
    initCallBack() {
      if (typeof this.callBack == 'function') {
        this.callBack()
      }
    }
  },
  props: {
    bid: {
      type: String //唯一标识设置id默认defult
    },
    className: {
      type: String //增加class
    },
    size: {
      //dom-box 尺寸
      type: Object,
      default: () => {}
    },
    position: {
      //dom-box 位置信息
      type: Object,
      default: () => {}
    },
    boxStyle: {
      //dom-box 样式信息
      type: Object,
      default: () => {}
    },
    callBack: {
      //dom-box 挂载后的执行的回调
      type: Function,
      default: () => {}
    }
  },
  components: {
    // con
  }
}
</script>
<style lang="scss" scoped>
.box-b {
  position: absolute;
  border: 1px solid #40bbff82;
}
</style>

