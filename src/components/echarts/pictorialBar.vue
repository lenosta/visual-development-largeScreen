<template>
  <div style="width:100%;height:100%">
    <h1 class="chart-top-title">药品召回统计</h1>
    <div
      class="chart-wrapper"
      ref="chart"
      style="height:364px;width:100%"
    >
    </div>
  </div>
</template>

<script>
import { vueBus } from '../../assets/js/common/vueBus'
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
      color: this.$chartColor || ['rgb(71, 165, 214)', 'rgb(143, 179, 72)']
    }
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
      let me = this
      this.myChart = this.$echarts.init(this.$refs.chart)
      this.initChart()
    })
  },
  methods: {
    initChart() {
      var myData = ['预计召回药品数量', '预计触达消费者人数', '预计互联网触达量', '预计短信触达量', '预计电话触达量']
      var dataFirm = {
        1: [
          { name: '', value: 389 },
          { name: '', value: 299 },
          { name: '', value: 262 },
          { name: '', value: 244 },
          { name: '', value: 103 }
        ]
      }
      var dataFirmDot = dataFirm[1].map(item => {
        return item.value - 20
      })
      var dataFirmStack = {
        1: [40, 40, 40, 40, 40]
      }
      var myData1 = ['召回药品数量', '触达消费者人数', '互联网触达量', '短信触达量', '电话触达量']
      var dataDevice = {
        1: [
          { name: '', value: 467 },
          { name: '', value: 345 },
          { name: '', value: 258 },
          { name: '', value: 231 },
          { name: '', value: 123 }
        ]
      }
      var dataDeviceDot = dataDevice[1].map(item => {
        return item.value - 30
      })
      var dataDeviceStack = {
        1: [50, 50, 50, 50, 50]
      }
      var timeLineData = [1]
      var option = {
        baseOption: {
          timeline: {
            show: false,
            top: 0,
            data: []
          },
          legend: {
            show: false
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}人',
            axisPointer: {
              type: 'shadow'
            }
          },

          grid: [
            {
              show: false,
              left: '2%',
              top: 80,
              bottom: 50,
              right: 50,
              // containLabel: true,
              width: '38%'
            },
            {
              show: false,
              left: '52.5%',
              top: 80,
              bottom: 50,
              width: '0%'
            },
            {
              show: false,
              right: '9%',
              top: 80,
              bottom: 50,
              containLabel: true,
              width: '30%'
            }
          ],

          xAxis: [
            {
              type: 'value',
              inverse: true,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: 'top',
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              }
            },
            {
              gridIndex: 1,
              show: false
            },
            {
              gridIndex: 2,
              nameTextStyle: {
                color: '#50afff',
                fontSize: 14
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: 'top',
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              type: 'category',
              inverse: true,
              offset: 0,
              boundaryGap: false,
              position: 'right',
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgb(71, 165, 214)'
                }
              },
              axisTick: {
                show: true,
                inside: true,
                length: 23
              },
              axisLabel: {
                show: true,
                color: '#fff',
                inside: true,
                margin: 30,
                verticalAlign: 'bottom',
                padding: [0, 0, 15, 0]
              },
              data: myData
            },
            {
              gridIndex: 1,
              type: 'category',
              inverse: true,
              position: 'right',
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#f00'
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false,
                inside: true,
                margin: 0,

                verticalAlign: 'bottom',
                padding: [0, 0, 10, 0]
              },
              data: myData1
            },
            {
              gridIndex: 2,
              type: 'category',
              inverse: true,
              boundaryGap: false,
              position: 'left',
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgb(71, 165, 214)'
                }
              },
              axisTick: {
                show: true,
                inside: true,
                length: 23
              },
              axisLabel: {
                show: true,
                color: '#fff',
                inside: true,
                margin: 30,
                verticalAlign: 'bottom',
                padding: [0, 0, 15, 0]
              },
              data: myData1
            }
          ],
          series: []
        },
        options: []
      }
      option.baseOption.timeline.data.push(timeLineData[0])
      option.options.push({
        tooltip: {
          show: false
        },
        series: [
          {
            name: '接入单位辅助',
            type: 'bar',
            stack: '接入单位',
            barWidth: 14,
            barMinWidth: 5,
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            z: -9,

            data: dataFirmStack[timeLineData[0]]
          },
          {
            name: '接入单位',
            type: 'bar',
            barWidth: 14,
            barMinWidth: 5,
            stack: '接入单位',
            label: {
              normal: {
                show: true,
                position: 'left',
                offset: [0, 0],
                textStyle: {
                  color: 'rgb(71, 165, 214)',
                  fontSize: 14
                }
              }
            },
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: 'rgb(71, 165, 214)',
                borderWidth: 3,
                barBorderRadius: 50
              }
            },
            z: -11,

            data: dataFirm[timeLineData[0]]
          },
          {
            name: 'dotted',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolPosition: 'start',
            symbolOffset: ['-30', 0],
            itemStyle: {
              normal: {
                color: 'rgb(71, 165, 214)'
              }
            },
            symbolRepeat: true,
            symbolSize: [4, 8],
            symbolMargin: 1,
            z: -10,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
              return params.index * 30
            },
            data: dataFirmDot
          },
          {
            name: '接入设备辅助',
            type: 'bar',
            stack: '接入设备',
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            data: dataDeviceStack[timeLineData[0]]
          },
          {
            name: '接入设备',
            type: 'bar',
            stack: '接入设备',
            barWidth: 14,
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
              normal: {
                show: true,
                position: 'right',
                offset: [0, 0],
                textStyle: {
                  color: 'rgb(143, 179, 72)',
                  fontSize: 14
                }
              }
            },
            itemStyle: {
              normal: {
                color: 'transparent',
                barBorderRadius: 50,
                borderColor: 'rgb(143, 179, 72)',
                borderWidth: 3
              }
            },
            data: dataDevice[timeLineData[0]]
          },
          {
            name: 'dotted',
            type: 'pictorialBar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbol: 'rect',
            symbolPosition: 'start',
            symbolOffset: ['30', 0],
            itemStyle: {
              normal: {
                color: 'rgb(143, 179, 72)'
              }
            },
            symbolRepeat: true,
            symbolSize: [4, 8],
            symbolMargin: 1,
            z: -10,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
              return params.index * 30
            },
            data: dataDeviceDot
          }
        ]
      })
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
