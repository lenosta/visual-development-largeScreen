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
  name: 'plusLineChart',
  props: {
    echartsData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      color:['#006497'],
      axisLabelColor: '#ccd6e0',
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
        if (newV == 'plusLineChart') {
          this.initChart()
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      let me = this
      this.myChart = this.$echarts.init(this.$refs.chart)
       !this.appConfig.animate&&this.initChart()
    })
  },
  methods: {
    initChart() {
      var base = +new Date(2000, 1, 1)
      var oneDay = 24 * 3600 * 1000
      var date = []

      var data = [Math.random() * 300]

      for (var i = 1; i < 2000; i++) {
        var now = new Date((base += oneDay))
        if (i % 20 === 0) {
          date.push([now.getFullYear()].join('/'))
          data.push(Math.random() * 200)
        }
      }
      let option = {
        tooltip: {
          trigger: 'axis',
          position: function(pt) {
            return [pt[0], '10%']
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: date,
            position: 'bottom',
            axisLabel: {
              color: this.axisLabelColor,
              interval: function(index) {
                return index % 50 === 0 || index === date.length - 1
              }
            },
            axisLine: {
              lineStyle: {
                width: 2,
                color: this.axisLineColor
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: this.axisLineColor
              }
            }
          },
          {
            type: 'category',
            position: 'top',
            axisLine: {
              lineStyle: {
                width: 2,
                color: this.axisLineColor
              }
            }
          }
        ],
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          axisLine: {
            lineStyle: {
              width: 2,
              color: this.axisLineColor
            }
          },
          axisLabel: {
            color: this.axisLabelColor
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: this.axisLineColor
            }
          }
        },
        grid: {
          top: 20,
          bottom: 50,
          left: 50,
          right: 50
        },
        series: [
          {
            name: '',
            type: 'line',
            smooth: false,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              normal: {
                color: 'rgb(155, 193, 76)'
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: this.color[0]
                  },
                  {
                    offset: 1,
                    color: '#000'
                  }
                ])
              }
            },
            data: data
          }
        ]
      }
      this.myChart.setOption(option)
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
