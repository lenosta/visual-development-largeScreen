<template>
  <div
    class="dotted-line"
    ref="dottedLine"
  ></div>
</template>
<script>
import zrender from 'zrender'
export default {
  mounted() {
    let boxDom = this.$refs.dottedLine
    Object.assign(boxDom.style, this.boxStyle)
    this.draw()
  },
  props: ['box-style'],
  methods: {
    draw() {
      let me = this
      var zr = zrender.init(me.$refs.dottedLine)
      var rect = new zrender.Line({
        shape: {
          // x:0,
          // y:0,
          // width:1840,
          // height:1100
          x1:0,
          y1:0,
          x2:0,
          y2:50
        },
        style: {
          fill: 'none',
          stroke: '#00fffe',
          lineDash: [10, 2],
          lineWidth: 20,
          lineCap : "round"
        }
      })
      zr.add(rect)
      console.log(rect)
      rect
        .animate('style', true)
        .when(1000, { lineDashOffset: -42 })
        .start()
    }
  }
}
</script>
<style lang="scss" scoped>
.dotted-line{
  position: absolute;
  width: 1840px;
  height: 1100px;
  z-index: -1;
}
</style>

