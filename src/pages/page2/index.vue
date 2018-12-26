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
export default {
  data() {
    return {}
  },
  watch: {
    $route(to, from) {
      this.name = to.name
    }
  },
  created() {},
  mounted() {},
  components: {
    LineChart,
    transverseSingleBar,
    barDoubleChart,
    part
  },
  methods: {},
  computed: {}
}
</script>
 <style lang="scss" scoped>
</style>

