<template>
  <div>
    <!-- 左 -->
    <part :part="{id: 'test1',style: {  width: '30%',  height: '30%', left: '2%', top: '50px'}}">
      <LineChart />
    </part>
    <!-- 中 -->
    <part :part="{id: 'test2', className:'test2',style:{width: '30%',height: '30%',left: '34%',top: '50px'}}">
      <transverseSingleBar />
    </part>
    <!-- 右 -->
    <part :part="{id: 'test2', className:'test2',style:{width: '30%',height: '30%',left: '66%',top: '50px'}}">
      <barDoubleChart />
    </part>
  </div>
</template>
<script>
import part from '../../components/part/part'
import * as MUTATION_TYPES from '../../store/mutation-types'
import { mapMutations, mapState } from 'vuex'
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
  computed: {
    ...mapState(['charts'])
  }
}
</script>
 <style lang="scss" scoped>
</style>

