<template>
  <div
    class="chart-wrapper"
    ref="chart"
  ></div>
</template>
<script>
import AppState from '../../assets/js/app/appState'
import { getJson } from '../../api/apiList/state'
export default {
  name: 'bar',
  props: {
    echartsData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      value: [334, 390, 330, 200, 220, 110, 52]
    }
  },
  created() {
    // 注册状态
    AppState.regist('areaName')
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
    const isAnimate = this.appOption.animate
    this.$nextTick(() => {
      let me = this
      this.myChart = this.$echarts.init(this.$refs.chart)
      !isAnimate && this.initChart()
    })
  },
  methods: {
    initChart() {
      let me = this
      this.$echarts.extendsMap = function(id, opt) {
        // 实例
        var nanchang = '../../../static/mapJson/nanchang.json',
          jingdezhen = '../../../static/mapJson/jingdezhen.json',
          pingxiang = '../../../static/mapJson/pingxiang.json',
          jiujiang = '../../../static/mapJson/jiujiang.json',
          xinyu = '../../../static/mapJson/xinyu.json',
          yingtan = '../../../static/mapJson/yingtan.json',
          ganzhou = '../../../static/mapJson/ganzhou.json',
          jian = '../../../static/mapJson/jian.json',
          yichun = '../../../static/mapJson/yichun.json',
          fuzhou = '../../../static/mapJson/fuzhou.json',
          shangrao = '../../../static/mapJson/shangrao.json'
        var curGeoJson = {}
        var cityMap = {
          南昌市: nanchang,
          景德镇市: jingdezhen,
          萍乡市: pingxiang,
          九江市: jiujiang,
          新余市: xinyu,
          鹰潭市: yingtan,
          赣州市: ganzhou,
          吉安市: jian,
          宜春市: yichun,
          抚州市: fuzhou,
          上饶市: shangrao
        }
        var geoCoordMap = {
          南昌: [115.89, 28.48],
          景德镇: [117.28, 29.09],
          萍乡: [113.93, 27.41],
          九江: [115.97, 29.51],
          新余: [114.81, 27.72],
          鹰潭: [117.12, 28.1],
          赣州: [115.04, 25.67],
          吉安: [115.05, 26.88],
          宜春: [114.41, 28.03],
          抚州: [116.45, 27.79],
          上饶: [117.92, 28.22]
        }
        var levelColorMap = {
          '1': 'rgba(241, 109, 115, .8)',
          '2': 'rgba(255, 235, 59, .7)',
          '3': 'rgba(147, 235, 248, 1)'
        }

        var defaultOpt = {
          mapName: 'china', // 地图展示
          goDown: false, // 是否下钻
          bgColor: '#404a59', // 画布背景色
          activeArea: [], // 区域高亮,同echarts配置项
          data: [],
          // 下钻回调(点击的地图名、实例对象option、实例对象)
          callback: function(name, option, instance) {}
        }
        if (opt) opt = this.util.extend(defaultOpt, opt)

        // 层级索引
        var name = [opt.mapName]
        var idx = 0
        var pos = {
          leftPlus: 55,
          leftCur: 30,
          left: 20,
          top: 20
        }

        var line = [[0, 0], [8, 11], [0, 22]]
        // style
        var style = {
          font: '14px "Microsoft YaHei", sans-serif',
          textColor: '#eee',
          lineColor: 'rgba(147, 235, 248, .8)'
        }

        var handleEvents = {
          /**
           * i 实例对象
           * o option
           * n 地图名
           **/
          resetOption: function(i, o, n) {
            var breadcrumb = this.createBreadcrumb(n)
            var j = name.indexOf(n)
            var l = o.graphic.length
            if (j < 0) {
              o.graphic.push(breadcrumb)
              o.graphic[0].children[0].shape.x2 = 145
              o.graphic[0].children[1].shape.x2 = 145
              if (o.graphic.length > 2) {
                for (var x = 0; x < opt.data.length; x++) {
                  if (n === opt.data[x].name + '市') {
                    o.series[0].data = handleEvents.initSeriesData([opt.data[x]])
                    break
                  } else o.series[0].data = []
                }
              }
              name.push(n)
              idx++
            } else {
              o.graphic.splice(j + 2, l)
              if (o.graphic.length <= 2) {
                o.graphic[0].children[0].shape.x2 = 60
                o.graphic[0].children[1].shape.x2 = 60
                o.series[0].data = handleEvents.initSeriesData(opt.data)
              }
              name.splice(j + 1, l)
              idx = j
              pos.leftCur -= pos.leftPlus * (l - j - 1)
            }

            o.geo.map = n
            o.geo.zoom = 0.4
            i.clear()
            i.setOption(o)
            this.zoomAnimation()
            opt.callback(n, o, i)
          },

          /**
           * name 地图名
           **/
          createBreadcrumb: function(name) {
            var cityToPinyin = {
              南昌市: 'nanchang',
              景德镇市: 'jingdezhen',
              萍乡市: 'pingxiang',
              九江市: 'jiujiang',
              新余市: 'xinyu',
              鹰潭市: 'yingtan',
              赣州市: 'ganzhou',
              吉安市: 'jian',
              宜春市: 'yichun',
              抚州市: 'fuzhou',
              上饶市: 'shangrao'
            }
            var breadcrumb = {
              type: 'group',
              id: name,
              left: pos.leftCur + pos.leftPlus,
              top: pos.top + 3,
              children: [
                {
                  type: 'polyline',
                  left: -90,
                  top: -5,
                  shape: {
                    points: line
                  },
                  style: {
                    stroke: '#fff',
                    key: name,
                    lineWidth: 2
                  },
                  onclick: function() {
                    var name = this.style.key
                    handleEvents.resetOption(me.myChart, option, name)
                  }
                },
                {
                  type: 'text',
                  left: -68,
                  top: 'middle',
                  style: {
                    text: name,
                    textAlign: 'center',
                    fill: style.textColor,
                    font: style.font
                  },
                  onclick: function() {
                    var name = this.style.text
                    handleEvents.resetOption(me.myChart, option, name)
                  }
                },
                {
                  type: 'text',
                  left: -68,
                  top: 10,
                  style: {
                    name: name,
                    text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: '12px "Microsoft YaHei", sans-serif'
                  },
                  onclick: function() {
                    var name = this.style.name
                    handleEvents.resetOption(me.myChart, option, name)
                  }
                }
              ]
            }

            pos.leftCur += pos.leftPlus
            return breadcrumb
          },

          // 设置effectscatter
          initSeriesData: function(data) {
            var temp = []
            for (var i = 0; i < data.length; i++) {
              var geoCoord = geoCoordMap[data[i].name]
              if (geoCoord) {
                temp.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value, data[i].level)
                })
              }
            }
            return temp
          },

          zoomAnimation: function() {
            var count = null
            var zoom = function(per) {
              if (!count) count = per
              count = count + per
              me.myChart.setOption({
                geo: {
                  zoom: count
                }
              })
              if (count < 1)
                window.requestAnimationFrame(function() {
                  zoom(0.2)
                })
            }
            window.requestAnimationFrame(function() {
              zoom(0.2)
            })
          }
        }

        var option = {
          graphic: [
            {
              type: 'group',
              left: pos.left,
              top: pos.top - 4,
              children: [
                {
                  type: 'line',
                  left: 0,
                  top: -20,
                  shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                  },
                  style: {
                    stroke: style.lineColor
                  }
                },
                {
                  type: 'line',
                  left: 0,
                  top: 20,
                  shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                  },
                  style: {
                    stroke: style.lineColor
                  }
                }
              ]
            },
            {
              id: name[idx],
              type: 'group',
              left: pos.left + 2,
              top: pos.top,
              children: [
                {
                  type: 'polyline',
                  left: 90,
                  top: -12,
                  shape: {
                    points: line
                  },
                  style: {
                    stroke: 'transparent',
                    key: name[0]
                  },
                  onclick: function() {
                    var name = this.style.key
                    handleEvents.resetOption(me.myChart, option, name)
                  }
                },
                {
                  type: 'text',
                  left: 0,
                  top: 'middle',
                  style: {
                    text: name[0] === '江西' ? '江西省' : name[0],
                    textAlign: 'center',
                    fill: style.textColor,
                    font: style.font
                  },
                  onclick: function() {
                    handleEvents.resetOption(me.myChart, option, '江西')
                  }
                },
                {
                  type: 'text',
                  left: 0,
                  top: 10,
                  style: {
                    text: 'JIANGXI',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: '12px "Microsoft YaHei", sans-serif'
                  },
                  onclick: function() {
                    handleEvents.resetOption(me.myChart, option, '江西')
                  }
                }
              ]
            }
          ],
          geo: {
            map: opt.mapName,
            // roam: true,
            zoom: 1,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff'
                },
                fontSize: 10
              },
              emphasis: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
              },
              emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
              }
            },
            regions: opt.activeArea.map(function(item) {
              if (typeof item !== 'string') {
                return {
                  name: item.name,
                  itemStyle: {
                    normal: {
                      areaColor: item.areaColor || '#389BB7'
                    }
                  },
                  label: {
                    normal: {
                      show: item.showLabel,
                      textStyle: {
                        color: '#fff'
                      }
                    }
                  }
                }
              } else {
                return {
                  name: item,
                  itemStyle: {
                    normal: {
                      borderColor: '#91e6ff',
                      areaColor: '#389BB7'
                    }
                  }
                }
              }
            })
          },
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              // symbol: 'diamond',
              showEffectOn: 'render',
              rippleEffect: {
                period: 12,
                scale: 6,
                brushType: 'fill'
              },
              hoverAnimation: true,
              itemStyle: {
                normal: {
                  color: function(params) {
                    return levelColorMap[params.value[3]]
                  },
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              data: handleEvents.initSeriesData(opt.data)
            }
          ]
        }
        me.myChart.setOption(option)
        // 添加事件
        me.myChart.on('click', function(params) {
          var _self = this
          if (opt.goDown && params.name !== name[idx]) {
            if (cityMap[params.name]) {
              var url = cityMap[params.name]
              getJson(url).then(response => {
                curGeoJson = response
                me.$echarts.registerMap(params.name, response)
                handleEvents.resetOption(_self, option, params.name)
              })
            }
          }
        })
      }
      getJson('../../../static/mapJson/jianxi.json').then(geoJson => {
        me.$echarts.registerMap('江西', geoJson)
        var myChart = me.$echarts.extendsMap('chart-panel', {
          bgColor: '#154e90', // 画布背景色
          mapName: '江西', // 地图名
          goDown: true, // 是否下钻
          // 下钻回调
          callback: function(name, option, instance) {
            // 回调中更新状态
            AppState.updateState('areaName', name)
          }
          // 数据展示
          // data: [
          //   {
          //     name: '南昌',
          //     value: 100,
          //     level: 1
          //   },
          //   {
          //     name: '景德镇',
          //     value: 12,
          //     level: 2
          //   },
          //   {
          //     name: '萍乡',
          //     value: 11,
          //     level: 3
          //   },
          //   {
          //     name: '赣州',
          //     value: 16,
          //     level: 2
          //   },
          //   {
          //     name: '吉安',
          //     value: 12,
          //     level: 1
          //   }
          // ]
        })
      })

      window.onresize = this.myChart.resize
      // window.onresize = this.myChart.resize
    }
  },
  computed: {
    // ...AppState.getState(['initType'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
