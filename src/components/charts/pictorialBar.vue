<template>
  <div
    class="chart-wrapper"
    ref="chart"
  >
  </div>
</template>

<script>
import { state } from '../../assets/js/app'
export default {
  name: 'pictorialBar',
  props: {
    echartsData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      color: ['rgb(71, 165, 214)', 'rgb(143, 179, 72)']
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
        if (newV == 'pictorialBar') {
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
        backgroundColor: 'rgba(0,0,0,0)',
        normal: {
          top: 200,
          left: 300,
          width: 500,
          height: 400,
          zIndex: 6
        },
        radar: {
          center: ['50%', '50%'],
          name: {
            color: '#27b4c2'
          },
          radius: '70%',
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          splitArea: {
            areaStyle: {
              color: ['transparent']
            }
          },
          axisLabel: {
            show: false,
            fontSize: 18,
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#27b4c2' //
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#27b4c2' //
            }
          },
          indicator: [
            {
              name: '道路结冰',
              max: 88
            },
            {
              name: '暴雪',
              max: 88
            },
            {
              name: '暴雨',
              max: 88
            },
            {
              name: '冰雹',
              max: 88
            },
            {
              name: '大风',
              max: 88
            },
            {
              name: '大雾',
              max: 88
            },
            {
              name: '高温',
              max: 88
            },
            {
              name: '干旱',
              max: 88
            },
            {
              name: '寒潮',
              max: 88
            },
            {
              name: '雷电',
              max: 88
            },
            {
              name: '霾',
              max: 88
            },
            {
              name: '沙尘暴',
              max: 88
            },
            {
              name: '霜冻',
              max: 88
            },
            {
              name: '台风',
              max: 88
            },
            {
              name: '洪水',
              max: 88
            }
          ]
        },
        series: [
          {
            name: '数据1',
            type: 'radar',
            symbol: 'circle',
            symbolSize: 3,
            areaStyle: {
              normal: {
                color: 'rgba(245, 166, 35, 0.4)'
              }
            },
            itemStyle: {
              color: 'rgba(245, 166, 35, 1)',
              borderColor: 'rgba(245, 166, 35, 0.3)',
              borderWidth: 5
            },
            lineStyle: {
              normal: {
                type: 'dashed',
                color: 'rgba(245, 166, 35, 1)',
                width: 2
              }
            },
            data: [[80, 50, 55, 80, 50, 80, 48, 43, 60, 78, 60, 40, 42, 44, 65]]
          },
          {
            name: '数据2',
            type: 'radar',
            symbol: 'circle',
            symbolSize: 3,
            itemStyle: {
              normal: {
                color: 'rgba(19, 173, 255, 1)',
                borderColor: 'rgba(19, 173, 255, 0.4)',
                borderWidth: 5
              }
            },
            areaStyle: {
              normal: {
                color: 'rgba(19, 173, 255, 0.5)'
              }
            },
            lineStyle: {
              normal: {
                color: 'rgba(19, 173, 255, 1)',
                width: 2,
                type: 'dashed'
              }
            },
            data: [[60, 60, 65, 60, 70, 40, 80, 63, 68, 60, 77, 60, 80, 62, 80]]
          }
        ]
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
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
