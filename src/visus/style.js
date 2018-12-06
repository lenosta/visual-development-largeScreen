import echarts from 'echarts'

// 图例的样式
export const legend = {
  textStyle: {
    color: '#fff',
    fontSize: 12
  }
}

// x轴 y轴字体样式大小 距离设置
export const axisLabel = {
  color: '#fff',
  fontSize: 12,
  fontWeight: 'lighter'
}

// x y 刻度轴的颜色样式
export const axisLine = {
  lineStyle: {
    opacity: 1,
    color: '#006caa',
    type: 'solid'
  }
}

// 柱状图样式
export const barStyle = [
  {
    type: 'bar',
    stack: 1,
    barMaxWidth: 10,
    itemStyle: {
      normal: {
        // barBorderRadius: 10,
        borderColor: '#3fa7dc',
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 1,
            color: 'rgba(63,167,220,.4)'
          },
          {
            offset: 0,
            color: 'rgba(63,167,220,.8)'
          }
        ])
      }
    },
    zlevel: 9
  },
  {
    type: 'bar',
    stack: 1,
    barMaxWidth: 10,
    itemStyle: {
      normal: {
        // barBorderRadius: 10,
        borderColor: '#ffea38',
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 1,
            color: 'rgba(255,234,56, 0.4)'
          },
          {
            offset: 0,
            color: 'rgba(255,234,56, 0.8)'
          }
        ])
      }
    },
    zlevel: 9
  },
  {
    type: 'bar',
    stack: 1,
    barMaxWidth: 10,
    itemStyle: {
      normal: {
        // barBorderRadius: 10,
        borderColor: '#f9852d',
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 1,
            color: 'rgba(249,133,45, 0.8)'
          },
          {
            offset: 0,
            color: 'rgba(249,133,45, 0.4)'
          }
        ])
      }
    },
    zlevel: 9
  },
  {
    type: 'bar',
    stack: 1,
    barMaxWidth: 10,
    itemStyle: {
      normal: {
        // barBorderRadius: 10,
        borderColor: '#F10F0F',
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 1,
            color: 'rgba(241, 15, 15,.8)'
          },
          {
            offset: 0,
            color: 'rgba(241, 15, 15 ,.4)'
          }
        ])
      }
    },
    zlevel: 9
  },
  {
    type: 'bar',
    stack: 1,
    barMaxWidth: 10,
    itemStyle: {
      normal: {
        // barBorderRadius: 10,
        borderColor: '#14EE10',
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 1,
            color: 'rgba(20, 238, 16, 0.8)'
          },
          {
            offset: 0,
            color: 'rgba(20, 238, 16, 0.4)'
          }
        ])
      }
    },
    zlevel: 9
  }
]

// 蓝色曲线图样式
export const lineBlueStyle = [
  {
    type: 'line',
    // symbol: 'circle',
    // symbolSize: 15,
    itemStyle: {
      normal: {
        color: '#00aeff'
        // borderColor: '#FEFB00'
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(30,144,187,1)'
          },
          {
            offset: 1,
            color: 'rgba(30,144,187,.5)'
          }
        ])
      }
    }
  }
]

// 黄色曲线图样式
export const lineYelloStyle = [
  {
    type: 'line',
    // symbol: 'circle',
    // symbolSize: 15,
    itemStyle: {
      normal: {
        color: '#ffe400'
        // borderColor: '#FEFB00'
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(154,142,78,1)'
          },
          {
            offset: 1,
            color: 'rgba(154,142,78,.5)'
          }
        ])
      }
    }
  }
]
