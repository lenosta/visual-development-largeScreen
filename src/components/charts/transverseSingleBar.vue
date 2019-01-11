<template>
  <div
    class="chart-wrapper"
    ref="chart"
  >
  </div>
</template>

<script>
import {state} from '../../assets/js/app'
export default {
  name: 'transverseSingleBar',
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
    },
    initType: {
      handler: function(newV, oldV) {
        if (newV == 'transverseSingleBar') {
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
      let option = {
        grid: {
          left: '5%',
          right: '5%',
          top: '5%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: {
          show: true,
          type: 'category',
          inverse: true,
          data: ['黑龙江', '辽宁', '河南', '北京', '山西'],
          nameTextStyle: { color: '#8199c3' },
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: '#fff'
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#18418a'
            }
          }
        },
        series: [
          {
            name: '访问次数',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
              color: '#001a62',
              barBorderRadius: 100
            },
            silent: true,
            data: [100, 100, 100, 100, 100]
          },
          {
            name: '访问次数',
            type: 'bar',
            barWidth: 10,
            label: {
              normal: {
                show: true,
                position: 'right',
                color: '#fff',
                fontWeight: 'bold',
                formatter: function(params) {
                  return params.value + '%'
                }
              }
            },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: '#0065d8'
                },
                {
                  offset: 1,
                  color: '#033896'
                }
              ]),
              barBorderRadius: 100
            },
            silent: true,
            data: [78, 63, 46, 38, 31]
          }
        ],
        animationEasing: 'bounceOut'
      }
      this.myChart.on('click', params => {
        this.$emit('handleCharts', params.name)
      })
      this.myChart.setOption(option)
      window.addEventListener('optimizedResize', () => {
        this.myChart.resize
      })
    }
  },
  computed: {
    ...state.getState(['initType'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .chart-wrapper {
//   width: 100%;
//   height: 100%;
// }
</style>
