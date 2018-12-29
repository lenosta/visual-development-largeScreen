<template>
  <div>
    <!-- 上左 -->
    <part
      :part="{id:'test1',style: {  width: '30%',  height: '30%', left: '2%', top: '50px'}}"
      initType="LineChart"
    >
      <LineChart />
    </part>
    <!-- 上中 -->
    <part
      :part="{id:'test2',className:'test2',style:{width: '30%',height: '30%',left: '34%',top: '50px'}}"
      initType="transverseSingleBar"
    >
      <transverseSingleBar />
    </part>
    <!-- 上右 -->
    <part
      :part="{id:'test3', className:'test2',style:{width: '30%',height: '30%',left: '66%',top: '50px'}}"
      initType="barDoubleChart"
    >
      <barDoubleChart />
    </part>
    <!-- 下左 -->
    <part
      :part="{ id:'test4',className:'test2',style:{width: '30%',height: '30%',left: '2%',top: 'calc(30% + 60px)'}}"
      initType="pictorialBar"
    >
      <pictorialBar />
    </part>
    <!-- 下中 -->
    <part
      :part="{id:'test5', className:'test2',style:{width: '30%',height: '30%',left: '34%',top: 'calc(30% + 60px)'}}"
      initType="plusMinusLineChart"
    >
      <plusMinusLineChart />
    </part>
    <!-- 下右 -->
    <part
      :part="{id:'test6', className:'test2',style:{width: '30%',height: '30%',left: '66%',top: 'calc(30% + 60px)'}}"
      initType="plusLineChart"
    >
      <plusLineChart />
    </part>
  </div>
</template>
<script>
import part from '../../components/part/part'
import transverseSingleBar from '$chart/transverseSingleBar'
import LineChart from '$chart/LineChart'
import barDoubleChart from '$chart/barDoubleChart'
import pictorialBar from '$chart/pictorialBar'
import plusMinusLineChart from '$chart/plusMinusLineChart'
import plusLineChart from '$chart/plusLineChart'
import App from '../../assets/js/app/app'
import { TimelineMax, Back, TweenMax } from 'gsap'
export default {
  data() {
    return {
      tl: new TimelineMax()
    }
  },
  watch: {
    $route: {
      handler: function(to, from) {
        // console.log(to, from)
      },
      immediate: true
    }
  },
  appOption: { animate: true },
  created() {
    App.appState.regist('initType')
  },
  mounted() {
    this.animateIn()
  },
  components: {
    LineChart,
    barDoubleChart,
    pictorialBar,
    transverseSingleBar,
    plusMinusLineChart,
    plusLineChart,
    part
  },
  beforeRouteLeave(to, from, next) {
    this.animateOut()
    setTimeout(function() {
      next()
    }, 1500)
  },
  methods: {
    animateIn() {
      let me = this
      this.tl.staggerFrom(
        ['#test1', '#test4', '#test2', '#test5', '#test3', '#test6'],
        0.8,
        {
          opacity: 0,
          handle: 1,
          cycle: {
            y: [-150, 150]
          },
          // ease: Back.easeOut,
          onComplete: me.complete,
          onCompleteParams: ['{self}']
        },
        0.15
      )
    },
    complete(v) {
      let initType = v.target[0].getAttribute('initType')
      App.appState.updateState('initType', initType)
    },
    animateOut() {
      this.tl.reverse()
    }
  },
  computed: {
    ...App.appState.getState(['initType'])
  }
}
</script>
 <style lang="scss" scoped>
</style>

