<template>
  <div class="chart-box">
    <component :is="contentType" class="chart-con"></component>
  </div>
</template>
<script>
import LineChart from '../echarts/LineChart'
import barDoubleChart from '../echarts/barDoubleChart'
import transverseDoubleBar from '../echarts/transverseDoubleBar'
import chinaMap from '../echarts/chinaMap'
import TreeAnalysis from '../../components/tree-analysis/treeAnalysis'
import plusLineChart from '../../components/echarts/plusLineChart'
import plusMinusLineChart from '../../components/echarts/plusMinusLineChart'
import mainMap from '../../components/mainMap/mainMap'
import pictorialBar from '../../components/echarts/pictorialBar'
import documentData from '../../components/documentData'

import generateEnterprises from '../../components/categoryName/generateEnterprises'
import circulationEnterprise from '../../components/categoryName/circulationEnterprise'
import priceIndices from '../../components/categoryName/priceIndices'
import recall from '../../components/categoryName/recall'
import hospital from '../../components/categoryName/hospital'
import drugComplaint from '../../components/drugComplaint/drugComplaint'
import mapBar from '../../components/mapBar'
export default {
  data() {
    return {}
  },
  mounted() {
  },
  components: {
    LineChart,
    barDoubleChart,
    transverseDoubleBar,
    chinaMap,
    TreeAnalysis,
    plusLineChart,
    plusMinusLineChart,
    mainMap,
    pictorialBar,
    documentData,
    generateEnterprises,
    circulationEnterprise,
    priceIndices,
    recall,
    hospital,
    drugComplaint,
    mapBar
  },
  props: ['content-type']
}
</script>
<style>
.chart-box {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
 .chart-con{
    height: 370px;
  }
</style>
