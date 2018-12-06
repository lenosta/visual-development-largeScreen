<template>
  <div class="main-wrap">
    <!-- 中间四大块  上左-上右-下左-下右 -->
    <div
      class="safe-block"
      v-for="(item, index) in safeArr"
      :key="index"
    >
      <h1>
        <p>{{item.title}}</p>
        <p>{{item.title1}}</p>
      </h1>
      <ul>
        <li
          v-for="(item1, index1) in item.list"
          :key="index1"
          :class='["safe-block-con",item.position]'
        >{{item1.name}}</li>
      </ul>
    </div>
    <!-- 中间四大块对应的详情小块 -->
    <div class="safe-details-wrapper">
      <div
        :class='["safe-details",item.position]'
        v-for="item in safeDetailsArrL"
        :key="item.id"
      >
        <div class="safe-details-item-wrapper">
          <div
            v-for="(item1, index1) in item.details"
            :key="index1"
            class="safe-details-item"
          >
            <span class="safe-details-l">{{item1.name}}</span><span class="safe-details-r">{{item1.value}}</span>
          </div>
        </div>
      </div>
      <div
        :class='["safe-details",item.position]'
        v-for="item in safeDetailsArrR"
        :key="item.id"
      >
        <div class="safe-details-item-wrapper">
          <div
            v-for="(item1, index1) in item.details"
            :key="index1"
            class="safe-details-item"
          >
            <span class="safe-details-l">{{item1.name}}</span><span class="safe-details-r">{{item1.value}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 中间中心块文字 -->
    <div class="center-text">
      <h1 class="center-text-title">政府监管</h1>
      <ul class="center-text-list">
        <li>许可审批</li>
        <li>监督管理</li>
        <li>追溯召回</li>
      </ul>
    </div>
    <div class="circle-p circle-center"></div>
    <div class="circle-p circle-center-fill"></div>
    <div class="circle-p circle-center-fill2"></div>
    <div class="circle-p circle-center-fill3"></div>
    <div class="circle-p  circle-outer2 "></div>
    <div class="circle-p  circle-outer3"></div>
    <div class="circle-p circle-outer"></div>
    <div class="circle-p circle-bg"></div>

    <div>
      <div class="main-point"></div>
      <div class="main-point"></div>
      <div class="main-point"></div>
      <div class="main-point"></div>
    </div>
    <dash-line
      :box-style="{left:'232px',top:'460px'}"
      :points="[[400, 84], [20, 84], [20, 0]]"
    ></dash-line>
    <dash-line
      :box-style="{right:'232px',top:'460px'}"
      :points="[[20, 84], [400, 84], [400, 0]]"
    ></dash-line>
    <dash-line
      :box-style="{left:'232px',top:'644px'}"
      :points="[[400, 20], [20, 20], [20, 104]]"
    ></dash-line>
    <dash-line
      :box-style="{right:'232px',top:'644px'}"
      :points="[[20, 20], [400, 20], [400, 104]]"
    ></dash-line>

  </div>
</template>
<script>
import dashLine from '../shapes/dashLine'
import { vueBus } from '../../assets/js/common/vueBus'
import { TimelineMax, Back,TweenMax } from 'gsap'
export default {
  data() {
    return {
      anima: '',
      safeArr: [
        {
          title: '生产企业',
          title1: '数据保险箱',
          position: 'leftTop',
          list: [{ name: '企业资质' }, { name: '产品信息' }, { name: '票证单据' }]
        },
        {
          title: '召回数据',
          title1: '保险箱',
          position: 'rightTop',
          list: [{ name: '问题药品' }, { name: '召回统计' }, { name: '触达统计' }]
        },
        {
          title: '流通企业',
          title1: '数据保险箱',
          position: 'leftBottom',
          list: [{ name: '企业资质' }, { name: '票证单据' }, { name: '流向信息' }]
        },
        {
          title: '消费数据',
          title1: '保险箱',
          position: 'rightBottom',
          list: [{ name: '消费单据' }, { name: '价格信息' }, { name: '舆情投诉' }]
        }
      ],
      safeDetailsArrL: [
        {
          id: 0,
          position: 'lt',
          details: [
            { name: '企业数量', value: 109232 },
            { name: '原料入库单', value: 234344 },
            { name: '药品出库单', value: 232323 },
            { name: '发票数量', value: 345654 },
            { name: '检验检测报告单', value: 123453456 }
          ]
        },
        {
          id: 1,
          position: 'rt',
          details: [
            { name: '召回药品数量', value: 109232 },
            { name: '触达消费者人数', value: 23434424 },
            { name: '待召回药品数量', value: 232323234 }
          ]
        }
      ],
      safeDetailsArrR: [
        {
          id: 2,
          position: 'lb',
          details: [
            { name: '企业数量', value: 109232 },
            { name: '药品出库单', value: 232323 },
            { name: '发票数量', value: 345654 },
            { name: '检验检测报告单', value: 12345342 }
          ]
        },
        {
          id: 3,
          position: 'rb',
          details: [
            { name: '医院/药店数量', value: 109232 },
            { name: '药品销售订单', value: 232323 },
            { name: '发票数量', value: 345654 },
            { name: '药品入库单', value: 12345 }
          ]
        }
      ]
    }
  },
  mounted() {
    let me = this
    vueBus.$on('imgOnload', v => {
      me.anima = v
    })
  },
  watch: {
    anima(val, oldVal) {
      val == 'animateStart' && this.animate()
    }
  },
  methods: {
    animate() {
      var rotateTime = 2
      var translateTime =.8
      var tm1= new TimelineMax()
      var tm2= new TimelineMax()
      var tm3= new TimelineMax()
      var tm4= new TimelineMax()
      tm1.staggerFrom('.safe-block-con',4,{ rotationX: 180, opacity: 0, ease: Back.easeOut },0.1)
      // tm1.staggerFrom('.leftTop', rotateTime, { rotationX: 180, opacity: 0, ease: Back.easeOut })
      // tm2.from('.lt', 1, { x: -200, opacity: 0, ease: Back.easeOut })
      // tm2.from('.rt', 1, { x: -200, opacity: 0, ease: Back.easeOut })
      // tm2.from('.lb', 1, { x: -200, opacity: 0, ease: Back.easeOut })
      // tm2.from('.rb', 1, { x: -200, opacity: 0, ease: Back.easeOut })
      tm2.staggerFrom('.safe-details',4,{ x: -200, opacity: 0, ease: Back.easeOut  },0.5)
      // tm1.staggerFrom('.rightTop', rotateTime, { rotationX: 180, opacity: 0, ease: Back.easeOut })
      // tm1.staggerFrom('.rt', translateTime, { x: 200, opacity: 0, ease: Back.easeOut })
      // tm1.staggerFrom('.leftBottom', rotateTime, { rotationX: 180, opacity: 0, ease: Back.easeOut })
      // tm1.staggerFrom('.lb', translateTime, { x: -200, opacity: 0, ease: Back.easeOut })
      // tm1.staggerFrom('.rightBottom', rotateTime, { rotationX: 180, opacity: 0, ease: Back.easeOut })
      // tm1.staggerFrom('.rb', translateTime, { x: 200, opacity: 0, ease: Back.easeOut })
    }
  },
  components: {
    dashLine
  }
}
</script>
<style lang="scss" scoped>
.main-wrap {
  position: relative;
  height: 100%;
  .safe-block {
    width: 390px;
    height: 457px;
    position: absolute;
    background: url('../../assets/imgs/box.png') center no-repeat;
    background-size: cover;

    &:nth-child(1) {
      top: 0;
      left: 0;
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
    }
    &:nth-child(3) {
      bottom: 38px;
      left: 0;
    }
    &:nth-child(4) {
      bottom: 38px;
      right: 0;
    }
    h1 {
      padding-right: 60px;
      margin: 73px 0 20px 0;
      color: #fff;
      font-size: 36px;
      text-align: center;
    }
    ul {
      padding: 0 75px 0 15px;
      perspective: 400px;
      perspective-origin: 0% 50%;
      li {
        position: relative;
        width: 296px;
        height: 72px;
        margin: 7px 0;
        line-height: 72px;
        background: rgba(0, 58, 110, 1);
        border-radius: 10px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        &::before {
          position: absolute;
          top: 30px;
          left: 60px;
          content: '';
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #66ebc2;
          margin-right: 14px;
        }
      }
    }
  }
  .safe-details-wrapper {
    .safe-details {
      position: absolute;
      width: 379px;
      height: 259px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 20px;
      transform-origin: 50% 50%;
      background: url('../../assets/imgs/box-details-left.png') center no-repeat;
      &:nth-child(1) {
        left: 408px;
        top: 83px;
      }
      &:nth-child(2) {
        background: url('../../assets/imgs/box-details-right.png') center no-repeat;
        right: 408px;
        top: 83px;
      }
      &:nth-child(3) {
        left: 408px;
        bottom: 83px;
      }
      &:nth-child(4) {
        background: url('../../assets/imgs/box-details-right.png') center no-repeat;
        right: 408px;
        bottom: 83px;
      }
      .safe-details-item {
        margin: 9px 0;
        .safe-details-l {
          display: inline-block;
          width: 188px;
          text-align: right;
        }
        .safe-details-r {
          display: inline-block;
          margin-left: 15px;
          text-align: left;
          color: #66ebc2;
          font-style: italic;
        }
      }
    }
  }
  .main-point {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #00fffe;
    z-index: 10;
    animation: pointLight 1.1s cubic-bezier(0.73, 0.18, 1, 1) infinite alternate;
    &:nth-child(1) {
      top: 520px;
      left: 608px;
    }
    &:nth-child(2) {
      top: 640px;
      left: 608px;
    }
    &:nth-child(3) {
      top: 520px;
      right: 608px;
    }
    &:nth-child(4) {
      top: 640px;
      right: 608px;
    }
  }

  .circle-center {
    background: url('../../assets/imgs/circle/circle-center.png');
    z-index: 5;
    animation: clockwise 20s infinite linear;
  }
  .circle-center-fill {
    background: url('../../assets/imgs/circle/circle-center-fill.png');
    z-index: 6;
    animation: anticlockwise 40s infinite linear;
  }
  .circle-center-fill2 {
    background: url('../../assets/imgs/circle/circle-center-fill2.png');
    z-index: 8;
    animation: clockwise 60s infinite linear;
  }
  .circle-center-fill3 {
    background: url('../../assets/imgs/circle/circle-center-fill3.png');
    z-index: 9;
    animation: anticlockwise 80s infinite linear;
  }
  .circle-outer {
    background: url('../../assets/imgs/circle/circle-outer.png');
    z-index: 4;
    animation: clockwise 100s infinite linear;
    mix-blend-mode: color-dodge;
  }
  .circle-outer2 {
    background: url('../../assets/imgs/circle/circle-outer2.png');
    z-index: 3;
    mix-blend-mode: color-dodge;
    // animation: anticlockwise 60s infinite linear;
  }
  .circle-outer3 {
    background: url('../../assets/imgs/circle/circle-outer3.png');
    z-index: 5;
    animation: clockwise 100s infinite linear;
    mix-blend-mode: color-dodge;
  }
  .circle-bg {
    border-radius: 50%;
    background: url('../../assets/imgs/center-bg.jpg');
    z-index: 3;
  }
  .circle-p {
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 50%;
    left: 50%;
    width: 734px;
    height: 734px;
    margin-top: -367px;
    margin-left: -367px;
  }
  @keyframes anticlockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes clockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
  .center-text {
    position: absolute;
    width: 300px;
    height: 338px;
    top: 50%;
    left: 50%;
    margin-top: -169px;
    margin-left: -150px;
    z-index: 11;
    text-align: center;
    .center-text-title {
      font-size: 60px;
    }
    .center-text-list {
      width: 100%;
      margin-top: 30px;
      li {
        position: relative;
        margin: 7px 0;
        line-height: 72px;
        background: rgba(0, 58, 110, 0.85);
        border-radius: 14px;
        color: #fff;
        font-size: 40px;
        &::before {
          position: absolute;
          top: 30px;
          left: 36px;
          content: '';
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #66ebc2;
          margin-right: 14px;
        }
      }
    }
  }
}
@keyframes pointLight {
  0% {
    box-shadow: 0 0 1px 0 rgba(0, 255, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 50px 0 rgba(0, 255, 255, 0.8);
    background-color: #aff;
  }
}
</style>

