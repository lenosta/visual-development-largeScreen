<template>
  <div>
    <!-- 上左 -->
    <part :part="{style: {  width: '30%',  height: '30%', left: '2%', top: '50px'}}">
      <LineChart />
    </part>
    <!-- 上中 -->
    <part :part="{className:'test2',style:{width: '30%',height: '30%',left: '34%',top: '50px'}}">
      <transverseSingleBar />
    </part>
    <!-- 上右 -->
    <part :part="{ className:'test2',style:{width: '30%',height: '30%',left: '66%',top: '50px'}}">
      <barDoubleChart />
    </part>
    <!-- 下左 -->
    <part :part="{ className:'test2',style:{width: '30%',height: '30%',left: '2%',top: 'calc(30% + 60px)'}}">
      <barDoubleChart />
    </part>
    <!-- 下中 -->
    <part :part="{ className:'test2',style:{width: '30%',height: '30%',left: '34%',top: 'calc(30% + 60px)'}}">
      <barDoubleChart />
    </part>
    <!-- 下右 -->
    <part :part="{ className:'test2',style:{width: '30%',height: '30%',left: '66%',top: 'calc(30% + 60px)'}}">
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
export default {
  data() {
    return {}
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
  computed: {
    ...AppState.getState(['isLoadPartComplete'])
  }
}
</script>
 <style lang="scss" scoped>
</style>

