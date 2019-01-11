<template>
  <div
    class="chart-wrapper"
    ref="chart"
  ></div>
</template>
<script>
import { state } from '@/assets/js/app'
export default {
  name: 'barDoubleChart',
  props: {
    echartsData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      color: ['#08A7DF', '#8ABE32'],
      dataArr: [
        [200, 150, 160, 140, 160, 155, 158, 170, 175, 130, 150, 130],
        [180, 130, 135, 120, 140, 125, 138, 150, 135, 110, 120, 115]
      ],
      xData: ['Jen', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jui', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec'],
      axisLabelColor: '#ccd6e0  ',
      axisLineColor: '#809ab1'
    }
  },
  watch: {
    echartsData: {
      handler: function(val, oldVal) {
        this.initChart()
      },
      deep: true //增加deep 观察对象的子对象变化
    },
    initType: {
      handler: function(newV, oldV) {
        if (newV == 'barDoubleChart') {
          this.initChart()
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      let me = this
      this.myChart = this.$echarts.init(this.$refs.chart)
      !this.appConfig.animate && this.initChart()
    })
  },
  methods: {
    initChart() {
      let series = []
      this.dataArr.map((item, index) => {
        let colorItem = ''
        if (index === 0) {
          colorItem = new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 1,
              color: '#13D3F1'
            },
            {
              offset: 0,
              color: this.color[index]
            }
          ])
        } else {
          colorItem = new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 1,
              color: '#BEE061'
            },
            {
              offset: 0,
              color: this.color[index]
            }
          ])
        }
        series.push({
          name: '',
          type: 'bar',
          barWidth: '25%',
          data: item,
          itemStyle: {
            color: colorItem
          },
          animationDelay: function(idx) {
            return idx * 10
          }
        })
      })
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 20,
          bottom: 50,
          left: 80,
          right: 50,
          containLabel: true
        },
        legend: {
          show: false
        },
        xAxis: {
          type: 'category',
          data: this.xData,
          axisLabel: {
            textStyle: {
              color: this.axisLabelColor
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: this.axisLineColor
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: this.axisLineColor
            }
          }
        },
        yAxis: {
          type: 'value',
          max: 300,
          axisLine: {
            show: true,
            lineStyle: {
              color: this.axisLineColor
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: series,
        animationEasing: 'elasticOut'
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
      // window.onresize = this.myChart.resize
    }
  },
  computed: {
    ...state.getState(['initType'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
