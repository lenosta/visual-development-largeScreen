<template>
  <div class="mapBar">
    <h1 class="chart-top-title">药品销售分析</h1>
    <div id="mapBar" style="height: 360px;width: 100%;"></div>
  </div>
</template>
<script>
import Data from './data.js'
export default {
  name: 'mapBar',
  data() {
    return {
      map: ''
    }
  },
  mounted() {
    this.initMap()
    // this.setMap()
  },
  methods: {
    initMap() {
      var map = Loca.create('mapBar', {
        mapStyle: 'amap://styles/888cdfe0d03553646a8adcd27b4d8b01',
        // mapStyle: 'amap://styles/grey',
        zoom: 9.9,
        center: [116.40, 40],
        viewMode: '3D',
        pitch: 50,
        features: ['bg', 'road'],
        resizeEnable: true,
        // skyColor: '#012549',
        skyColor: 'rgba(0,0,0,0)',
        rotation:45,
        opacity:0
      })
      var layer = Loca.visualLayer({
        eventSupport: true,
        container: map,
        type: 'point',
        // 棱柱类型仅 3D 模式下支持。
        shape: 'prism',
        // 设定棱柱体顶点数量
        vertex: 4,
        zIndex: 100
      })
      var list = Data.map(function(value) {
        var val = value.split('$')
        return {
          coord: val[1],
          value: +val[0]
        }
      })
      //   var colors = ['#2c7bb6', '#abd9e9', '#ffffbf', '#fdae61', '#d7191c']
      var colors = ['#66ebc2', '#08a7df', '#d34d4d', '#de6f00', '#66ebc2']

      layer.setData(list.slice(0, 2000), {
        lnglat: 'coord'
      })
      layer.setOptions({
        // 单位米
        unit: 'meter',
        light: {
          // 环境光
          ambient: {
            // 光照颜色
            color: '#fff',
            // 光照强度，范围 [0, 1]
            intensity: 0.5
          },
          // 平行光
          directional: {
            color: '#fff',
            // 光照方向，是指从地面原点起，光指向的方向。
            // 数组分别表示 X 轴、Y 轴、Z 轴。
            // 其中 X 正向朝东、Y 正向朝南、Z 正向朝地下。
            direction: [1, -1.5, 0],
            intensity: 0.6
          }
        },
        style: {
          // 正多边形半径
          radius: 500,
          height: {
            key: 'value',
            value: [0, 25000]
          },
          // 顶边颜色
          color: {
            key: 'value',
            scale: 'quantile',
            value: colors
          },
          opacity: 1,
          // 旋转角度，单位弧度
          rotate: (Math.PI / 180) * 30
        },
        // 需要开启 eventSupport，才可以支持选中态。
        selectStyle: {
          color: '#fcff19',
          opacity: 0.9
        }
      })

      layer.render()
      // window.setTimeout(function() {
      //   let amap = map.getMap()
      //   amap.on('complete', function() {
      //     amap.setRotation(45)
      //     amap.setPitch(50)
      //   })
      // }, 6000)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>


