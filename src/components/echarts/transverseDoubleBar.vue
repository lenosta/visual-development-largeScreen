<template>
  <div style="width:100%;height:100%">
    <h1 class="chart-top-title">药品进销管理</h1>
    <div class="chart-y-name"><span>流入</span><span class="chart-y-name-r">流出</span></div>
    <div class="chart-wrapper" ref="chart" style="height:364px;width:100%"></div>
  </div>
</template>

<script>
import { vueBus } from '../../assets/js/common/vueBus'
export default {
  props: ['echartsData'],
  data() {
    return {
      axisLineColor: '#808080',
      splitLineColor: '#AEAEAF',
      dataArr: [[-150, -200, -250, -180, -276], [150, 200, 250, 180, 276]],
      color: this.$chartColor || ['#08A7DF', '#8ABE32'],
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
        let colorItem = ''
        if (index === 0) {
          colorItem = new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 1,
              color: 'rgba(8,167,222,.2)'
            },
            {
              offset: 0,
              color: '#000000'
            }
          ])
        }else {
          colorItem = new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 1,
              color: 'rgba(138,190,50,.2)'
            },
            {
              offset: 0,
              color: '#000000'
            }
          ])
        }
        series.push({
          name: '',
          stack: '总量',
          type: 'bar',
          barWidth: 15,
          itemStyle: {
            borderColor: this.color[index],
            borderWidth: 2,
            color: colorItem
          },
          data: item
        })
      })
      let option = {
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        grid: {
          left: '3%',
          right: '5%',
          top: 20,
          bottom: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value',
            name: '',
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: this.axisLineColor
              }
            },
            axisLabel: {show: false},
            axisLine: {
              lineStyle: {
                color: this.axisLineColor
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            name: '',
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: { show: false },
            data: ['2011', '2012', '2013', '2014', '2015']
          }
        ],
        series: series
      }
      this.myChart.on('click', params => {
        this.$emit('handleCharts', params.name)
      })
      this.myChart.setOption(option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.chart-y-name {
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: absolute;
  top: 60px;
  left: 0;
  span {
    float: left;
    padding: 0 50px;
    font-size: 38px;
  }
  span.chart-y-name-r {
    float: right;
  }
}
</style>
