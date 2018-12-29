<template>
  <div
    class="chart-wrapper"
    ref="chart"
  ></div>
</template>
<script>
import AppState from '../../assets/js/app/appState'
export default {
  name: 'bar',
  props: {
    echartsData: {
      type: Object,
      default: () => {}
    }
  },
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
    // initType: {
    //   handler: function(newV, oldV) {
    //     if (newV == 'barDoubleChart') {
    //       this.initChart()
    //     }
    //   }
    // }
  },
  mounted() {
    this.$nextTick(() => {
      let me = this
      this.myChart = this.$echarts.init(this.$refs.chart)
      !this.appOption.animate&&this.initChart()
    })
  },
  methods: {
    initChart() {
      let me = this
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
       grid: {
          top: 50,
          bottom: 0,
          left: 20,
          right: 0,
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: '#aaa'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: 'rgba(0,230,252, .8)',
                width: 3
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,.3)'
              }
            }
          }
        ],
        color: [
          new me.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(0,230,252, 0)'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ])
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [334, 390, 330, 200, 220, 110, 52],
            itemStyle: {
              borderColor: 'rgba(0,230,252, 1)',
              borderWidth: 1,
              shadowColor: 'rgba(0,230,252, .9)',
              shadowBlur: 30
            }
          }
        ]
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
      // window.onresize = this.myChart.resize
    }
  },
  computed: {
    // ...AppState.getState(['initType'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
