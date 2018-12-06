import echarts from 'echarts'
import { $ } from 'assets/js/extend'
// echats 基础样式引入
import * as STYLE from 'visus/style'

// 使用刚指定的配置项和数据显示图表。
export class Line {
  constructor(el, ...args) {
    this.chart = echarts.init(el)

    this.baseOption = {
      grid: {
        top: '5%',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        show: false,
        ...STYLE.legend
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: STYLE.axisLabel,
        axisLine: STYLE.axisLine,
        axisTick: {
          show: false
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      yAxis: {
        splitLine: { show: false },
        axisLabel: STYLE.axisLabel,
        axisLine: STYLE.axisLine,
        nameGap: 20,
        type: 'value',
        axisTick: {
          show: false
        }
      }
    }
    // 外部传入样式 覆盖基本样式，比如 grid
    if (args && args.length) {
      this.setStyle(...args)
    }
  }
  setStyle(...args) {
    args.forEach((v, i) => {
      this.baseOption = $.extend(true, this.baseOption, args[i])
    })
  }
  setData(option) {
    let merge = $.extend(true, this.baseOption, option)
    this.chart.setOption(merge, true)
  }
  resize() {
    this.chart.resize()
  }
  dispose() {
    this.chart.dispose()
  }
}
