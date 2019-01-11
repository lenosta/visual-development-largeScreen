<template>
  <div
    class="chart-wrapper"
    ref="chart"
  ></div>
</template>

<script>
import { state } from '../../assets/js/app'
export default {
  name: 'LineChart',
  props: {
    echartsData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataArr: [[0, 50, 50, 76, 76, 90], [49, 49, 75, 75, 30, 30], [20, 20, 35, 35, 54, 60], [12, 12, 34, 34, 46, 50]],
      color: ['#D34D4D', '#E59F38', '#81A566', '#4BADCC'],
      opacityColor: ['rgba(8,167,22,.3)', 'rgba(138,190,50,.3)', 'rgba(222,111,0,.3)', 'rgba(211,77,77,.3)'],
      xData: ['2013', '2014', '2015', '2016', '2017', '2018'],
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
        if (newV == 'LineChart') {
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
      !isAnimate && this.initChart()
    })
  },
  methods: {
    initChart() {
      var fontColor = '#30eee9'
      let option = {
        backgroundColor: 'rgba(0,0,0,0)',
        grid: {
          left: '5%',
          right: '10%',
          top: '20%',
          bottom: '15%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'item'
        },
        legend: {
          show: true,
          x: 'center',
          y: '35',
          icon: 'stack',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: '#1bb4f6'
          },
          data: ['已采纳', '已发布', '浏览量']
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: fontColor
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#397cbc'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#195384'
              }
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '信息量',
            min: 0,
            max: 1000,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#2ad1d2'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#27b4c2'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#11366e'
              }
            }
          },
          {
            type: 'value',
            name: '浏览量',
            min: 0,
            max: 1000,
            axisLabel: {
              formatter: '{value} 人',
              textStyle: {
                color: '#186afe'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#186afe'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#11366e'
              }
            }
          }
        ],
        series: [
          {
            name: '已采纳',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#0092f6',
                lineStyle: {
                  color: '#0092f6',
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: 'rgba(7,44,90,0.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,146,246,0.9)'
                    }
                  ])
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: 'red'
                }
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
          },
          {
            name: '已发布',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#00d4c7',
                lineStyle: {
                  color: '#00d4c7',
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: 'rgba(7,44,90,0.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,212,199,0.9)'
                    }
                  ])
                }
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
          },
          {
            name: '浏览量',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#aecb56',
                lineStyle: {
                  color: '#aecb56',
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: 'rgba(7,44,90,0.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(114,144,89,0.9)'
                    }
                  ])
                }
              }
            },
            data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
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
