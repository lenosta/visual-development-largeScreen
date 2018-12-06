<template>
  <div class="cube-canvas">
    <div class="cube-wrapper">
      <!-- <div class="cube">
        <div class="plane-front"></div>
        <div class="plane-back"></div>
        <div class="plane-left"></div>
        <div class="plane-right"></div>
        <div class="plane-top"></div>
        <div class="plane-bottom"></div>
      </div> -->
    </div>
    <div id="line-wrapper" class="line-wrapper"></div>
  </div>
</template>

<script>
import zrender from 'zrender'
export default {
  name: 'Cube',
  data() {
    return {}
  },
  mounted() {
    // let _this = this;
    // setInterval(function(){
    //   _this.init();
    // }, 2000)
    this.init()
  },
  methods: {
    init() {
      var zr = zrender.init(document.getElementById('line-wrapper'))
      zr.configLayer(0, {
          motionBlur: true,
          lastFrameAlpha: 0.8
        })
      for (var i = 0; i < 20; i++) {
        let line = ''
        let x1 = i * 10 + 20,
          y1 = Math.round(Math.random(0, 1) * 100) + 10,
          y2 = Math.round(Math.random(0, 1) * 100) + 210,
          delay = Math.round(Math.random(0, 1) * 5000) + 1200
        line = new zrender.Line({
          shape: {
            x1: x1,
            y1: 0,
            x2: x1,
            y2: y2
          },
          style: {
            lineDash: [35, 300],
            stroke: 'rgba(68, 186, 234, 0.5)',
            lineWidth: 3,
            blend: 'lighter'
          }
        })
        line
          .animate('style', true)
          .when(delay, { lineDashOffset: -300 })
          .start()
        // line.animateTo(
        //   {
        //     shape: {
        //       y2: y2
        //     }
        //   },
        //   2000,
        //   delay,
        //   'cubicOut',
        //   function(){
        //     // line.style.opacity = 0
        //   }
        // )
        zr.add(line)

      }
    }
  }
}
</script>

<style  lang="scss" scoped>
.cube-canvas {
  width: 141px;
  height: 350px;
  position: absolute;
  top: 90px;
  left: 375px;
}
#line-wrapper {
  position: absolute;
  top: 20px;
  left: 5px;
  width: 120px;
  height: 100%;
  z-index: 1;
}

.cube-wrapper {
  width: 141px;
  height: 340px;;
  // perspective: 1000px;
  background: url('../../assets/imgs/cube-bg.png') no-repeat;
  background-size: 100% 100%;
}
.cube {
  height: 314px;
  width: 100px;
  position: relative;
  margin: auto;
  transform-style: preserve-3d; /*定义3d转换*/
  transform: rotateY(45deg);
  // animation:rotate 60s infinite;/*animation：动画名字 时长 无限循环 线性速度（匀速）*/
  // transform: rotateY(45deg);
}
/*动画效果，也可以以百分百的方式。默认逆时针的方向旋转。*/
@keyframes rotate {
  from {
    transfrom: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
.cube > div {
  position: absolute;
  text-align: center;
  background: rgba(68, 186, 234, 0.15);
  color: #fff;
  line-height: 200px;
  font-size: 30px;
  border: 1px solid rgba(68, 186, 234, 0.5);
}
.plane-front {
  width: 100px;
  height: 314px;
  transform: translateZ(50px);
}
.plane-back {
  width: 100px;
  height: 314px;
  transform: translateZ(-50px);
}
.plane-left {
  width: 100px;
  height: 314px;
  transform: rotateY(270deg) translateZ(50px);
}
.plane-right {
  width: 100px;
  height: 314px;
  transform: rotateY(90deg) translateZ(50px);
}
.cube .plane-top {
  width: 100px;
  height: 100px;
  transform: rotateX(90deg) translateZ(50px);
  background: none;
}
.plane-bottom {
  width: 100px;
  height: 100px;
  transform: rotateX(270deg) translateZ(264px);
}
</style>
