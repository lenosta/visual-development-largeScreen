<template>
  <div
    class="dash-line"
    ref="dashLine"
  >
  </div>
</template>
<script>
import zrender from 'zrender'
export default {
  mounted() {
    let boxDom = this.$refs.dashLine
    Object.assign(boxDom.style, this.boxStyle)
    this.draw()
  },
  props: ['box-style', 'points'],
  methods: {
    draw() {
      let me = this
      var zr = zrender.init(me.$refs.dashLine)

      var polylineBase = new zrender.Polyline({
        shape: {
         // smooth: 0.6,
          points: [...me.points]
        },
        style: {
          fill: 'none',
          blend: 'lighter',
          stroke: 'rgb(0,255,254)',
          //lineDash: [20, 10],
          opacity: 0.2,
        //  blend: 'multiply',
          lineWidth: 10
        }
      })

      var polyline = new zrender.Polyline({
        shape: {
         // smooth: 0.3,
          points: [...me.points]
        },
        style: {
          fill: 'none',
          blend: 'lighter',
          stroke: 'rgb(100,230,230)',
          lineDash: [30, 470],
          shadowBlur:50,
          shadowColor:'rgb(0,255,254,.8)',
          opacity: 1,
          lineWidth:14,
          blend: 'lighter'
        }
      })



      zr.add(polylineBase);
      zr.add(polyline);

      polyline
        .animate('style', true)
        .when(2000, { lineDashOffset: 500 })
        .delay(800)
        .start()

      zr.configLayer(0, {
        motionBlur: true,
        lastFrameAlpha: 0.8
      })

    }
  }
}
</script>
<style lang="scss" scoped>
.dash-line {
  position: absolute;
  width: 440px;
  height: 120px;
}
</style>

