<template>
  <div
    class="chart-wrapper"
    ref="chart"
    style="height:100%;width:100%"
  >
  </div>
</template>

<script>
export default {
  props: ['coords'],
  data() {
    return {}
  },
  watch: {
    echartsData: {
      handler: function(val, oldVal) {
        this.initChart()
      },
      deep: true //增加deep 观察对象的子对象变化
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.myChart = this.$echarts.init(this.$refs.chart)
      this.initChart()
    })
  },
  methods: {
    initChart() {
      let me = this
      var planPath =
        'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'

      let option = {
        grid: {
          top: 10,
          left: 10,
          right: 10,
          bottom: 10
        },
        xAxis: {
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          max: 1000,
          min: 0
        },
        yAxis: {
          silent: false,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          max: 1000,
          min: 0
        },
        series: [
          {
            coordinateSystem: 'cartesian2d',
            type: 'lines',
            polyline: true,
            zlevel: 1,
            effect: {
              show: true,
              constantSpeed: 70,
              trailLength: 0.1,
              symbolSize: 15,
              symbol: 'circle',
              loop: true
            },
            lineStyle: {
              normal: {
                color: '#00fffe',
                opacity: 0,
                curveness: 0
              }
            },
            data: [...me.coords]
          }
        ]
      }
      this.myChart.setOption(option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.chart-wrapper {
  position: absolute;
  z-index: 100;
}
</style>
