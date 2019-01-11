<template>
  <div
    class="chart-wrapper"
    ref="chart"
  ></div>
</template>

<script>
import {state} from '../../assets/js/app'
export default {
  name: 'plusMinusLineChart',
  props: {
    echartsData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isinit: '',
      dataArr: [],
      legendData: ['库存量', '购买量'],
      color:['#08A7DF', '#8ABE32'],
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
        if (newV == 'plusMinusLineChart') {
          this.initChart()
        }
      }
    }
  },
  mounted() {
    const isAnimate = this.appConfig.animate
    this.$nextTick(() => {
      let me = this
      this.myChart = this.$echarts.init(this.$refs.chart)
      !this.appConfig.animate && this.initChart()
    })
  },
  methods: {
    initChart() {
      var base = +new Date(2000, 1, 1)
      var oneDay = 24 * 3600 * 1000
      var date = []

      var data = [Math.random() * 300]
      var data2 = [(Math.random() - 1) * 300]

      for (var i = 1; i < 2000; i++) {
        var now = new Date((base += oneDay))
        if (i % 20 === 0) {
          date.push([now.getFullYear()].join('/'))
          data.push(Math.random() * 1000)
          data2.push((Math.random() - 1) * 550)
        }
      }
      this.dataArr.push(data, data2)
      let series = []
      this.dataArr.map((item, index) => {
        let colorItem = ''
        if (index === 0) {
          colorItem = new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#006497'
            },
            {
              offset: 1,
              color: '#000'
            }
          ])
        } else {
          colorItem = new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: '#006497'
            },
            {
              offset: 1,
              color: '#000'
            }
          ])
        }
        series.push({
          name: this.legendData[index],
          type: 'line',
          smooth: false,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            normal: {
              color: this.color[index]
            }
          },
          areaStyle: {
            normal: {
              color: colorItem
            }
          },
          data: item
        })
      })
      let option = {
        tooltip: {
          trigger: 'axis',
          position: function(pt) {
            return [pt[0], '10%']
          }
        },
        xAxis: {
          type: 'category',
          name: 'Month',
          nameTextStyle: {
            color: '#969899',
            fontWeight: 'bold'
          },
          boundaryGap: true,
          data: date,
          axisLabel: {
            show: false
          },
          axisLine: {
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 10],
            lineStyle: {
              width: 2,
              color: this.axisLineColor
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: this.axisLineColor
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            symbol: ['none', 'arrow'],
            lineStyle: {
              width: 3,
              color: this.axisLineColor
            }
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        grid: {
          top: 20,
          left: 50,
          bottom: 50,
          right: 80
        },
        series: series
      }
      // this.myChart.on('click', params => {
      //   this.$emit('handleCharts', params.name)
      // })
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
