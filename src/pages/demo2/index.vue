<template>
  <div>
    <!-- 左 -->
    <part :part="{id: 'test1',style: {  width: '30%',  height: '30%', left: '2%', top: '50px',background:'url(../../../static/imgs/body-bg.jpg)'}}">
      <LineChart />
    </part>
    <!-- 中 -->
    <part :part="{id: 'test2', className:'test2',style:{width: '30%',height: '30%',left: '34%',top: '50px'}}">
      <h1 style='color:#000;width:50%;height:30px'>我是标题</h1>
      <transverseSingleBar />
    </part>
    <!-- 右 -->
    <part :part="{id: 'test3', className:'test2',style:{width: '30%',height: '30%',left: '66%',top: '50px'}}">
      <barDoubleChart />
    </part>
    <!-- 下 -->
    <part :part="{id: 'test4', className:'test2',style:{width: '30%',height: '30%',left: '2%',top: 'calc(30% + 60px)'}}">
      <barDoubleChart />
    </part>
    <part :part="{id: 'test5', className:'test2',style:{width: '30%',height: '30%',left: '34%',top: 'calc(30% + 60px)'}}">
      <barDoubleChart />
    </part>
    <part :part="{id: 'test6', className:'test2',style:{width: '30%',height: '30%',left: '66%',top: 'calc(30% + 60px)'}}">
      <barDoubleChart />
    </part>
  </div>
</template>
<script>
import part from '../../components/part/part'
import transverseSingleBar from '$chart/transverseSingleBar'
import LineChart from '$chart/LineChart'
import barDoubleChart from '$chart/barDoubleChart'
import AppState from '../../assets/js/common/appState'
import { TimelineMax, Back, TweenMax } from 'gsap'
export default {
  data() {
    return {
      tl: new TimelineMax(),
      num: 0
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
  created() {},
  mounted() {
    this.animateIn()
  },
  components: {
    LineChart,
    transverseSingleBar,
    barDoubleChart,
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
        ['#test2', '#test5', '#test1', '#test4', '#test3', '#test6'],
        1,
        {
          opacity: 0,
          cycle: {
            y: [-300, 300]
          },
          ease: Back.easeOut,
          onReverseCompleteAll: me.reverseComplete
        },
        0.1
      )
    },
    animateOut() {
      this.tl.reverse()
    },
    reverseComplete() {
      this.num++
    }
  },
  computed: {
    ...AppState.getState(['isLoadPartComplete'])
  }
}
</script>
 <style lang="scss" scoped>
</style>

