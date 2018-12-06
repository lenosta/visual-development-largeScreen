import echarts from 'echarts'
import { $ } from 'assets/js/extend'
// echats 基础样式引入
// import * as STYLE from 'visus/style'

// 使用刚指定的配置项和数据显示图表。
export class Pie {
  constructor(el, ...args) {
    this.chart = echarts.init(el)

    this.baseOption = {
      title: {
        text: '28%\n占比',
        textStyle: {
          fontSize: 24,
          color: '#fff'
        },
        x: 'center',
        y: 'center'
      },
      grid: {
        top: '5%',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '80%'],
          center: ['50%', '50%'],
          labelLine: {
            normal: {
              length: 11,
              length2: 8
            }
          },
          label: {
            normal: {
              textStyle: {
                fontSize: 14,
                color: '#fff'
              }
            },
            emphasis: {
              textStyle: {
                color: '#ffea00'
              }
            }
          },
          itemStyle: {
            normal: {
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: 'rgba(0, 174, 255, .5)'
                },
                {
                  offset: 1,
                  color: 'rgba(44, 233, 255, .5)'
                }
              ]),
              borderColor: '#02A9F9',
              borderWidth: 2,
              shadowColor: 'rgba(0, 0, 0, 0.4)',
              shadowBlur: 20
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: 'rgba(250, 182, 0, .5)'
                },
                {
                  offset: 1,
                  color: 'rgba(255, 231, 25, .5)'
                }
              ]),
              borderColor: '#fdde03',
              shadowColor: 'rgba(0, 0, 0, 0.4)',
              shadowBlur: 20
            }
          }
        }
      ]
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
