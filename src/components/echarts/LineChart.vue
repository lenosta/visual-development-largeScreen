<template>
  <div style="width:100%;height:100%">
    <h1 class="chart-top-title">原料采购使用</h1>
    <div class="chart-wrapper" ref="chart" style="height:364px;width:100%"></div>
  </div>
</template>

<script>
import { vueBus } from '../../assets/js/common/vueBus'
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
      dataArr: [
        [0, 50, 50, 76, 76, 90],
        [49, 49, 75, 75, 30, 30],
        [20, 20, 35, 35, 54, 60],
        [12, 12, 34, 34, 46, 50]
      ],
      color: this.$chartColor || ['#D34D4D', '#E59F38', '#81A566', '#4BADCC'],
      opacityColor:['rgba(8,167,22,.3)','rgba(138,190,50,.3)','rgba(222,111,0,.3)','rgba(211,77,77,.3)'],
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
      let series = []
      this.dataArr.map((item, index) => {
        series.push({
          name: '',
          type: 'line',
          symbol: 'circle',
          symbolSize: 10,
          lineStyle: {
            normal: {
              width: 2,
              color: this.color[index]
            }
          },
          itemStyle: {
            normal: {
              color: '#fff',
              borderColor: this.color[index],
              borderWidth: 4
            }
          },
          areaStyle: {
            normal: {
              color:this.opacityColor[index]
              // color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   {
              //     offset: 0,
              //     color: this.color[index]
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgba(47,47,47,0.4)'
              //   }
              // ])
            }
          },
          data: item
        })
      })
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: false
        },
        xAxis: [
          {
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: this.axisLineColor
              }
            },
            axisLabel: {
              color: this.axisLabelColor
            },
            axisTick: {show: false},
            data: this.xData
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            axisLine: {
              lineStyle: {
                color: this.axisLineColor
              }
            },
            axisTick: {show: false},
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              },
              color: this.axisLabelColor,
              formatter:'{value}%',
            },
            splitLine: {
              show: false
            }
          }
        ],
        grid: {
          top: 20,
          bottom: 50,
          left: 80,
          right: 50
        },
        series: series,
        animationEasing: 'bounceOut'
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
      var currentIndex = -1
      let _this = this
      // setInterval(function() {
      //   var dataLen = option.series[0].data.length

      //   // 取消之前高亮的图形
      //   _this.myChart.dispatchAction({
      //     type: 'downplay',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      //   })
      //   currentIndex = (currentIndex + 1) % dataLen
      //   // 高亮当前图形
      //   _this.myChart.dispatchAction({
      //     type: 'highlight',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      //   })
      //   // 显示 tooltip
      //   _this.myChart.dispatchAction({
      //     type: 'showTip',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      //   })
      // }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
