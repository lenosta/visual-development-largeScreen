<template>
  <div class="home-con">
    <!-- 大标题 -->
    <dom-box
      :box-style="{ left:'1241px',top:'-90px',width:'1920px',height:'270px',backgroundImage:'url(@/../static/imgs/big-title.png)'}"
    ></dom-box>
    <!-- 左侧上 -->
    <dom-box
      :box-style="{ left:'-4px',top:'100px',width:'874px',height:'121px',backgroundImage:'url(@/../static/imgs/title-h.png)'}"
      content-type="generateEnterprises"
    ></dom-box>
    <dom-box :box-style="{ left: 0,top: '249px'}" content-type="LineChart"></dom-box>
    <dom-box :box-style="{ left: 0,top: '707px'}" content-type="barDoubleChart"></dom-box>

    <!-- 左侧下 -->
    <dom-box
      :box-style="{ left:'-4px',bottom:'916px',width:'874px',height:'121px',backgroundImage:'url(@/../static/imgs/title-h.png)'}"
      content-type="circulationEnterprise"
    ></dom-box>
    <dom-box :box-style="{ left: 0,bottom: '458px'}" content-type="transverseDoubleBar"></dom-box>
    <dom-box :box-style="{ left: 0,bottom: 0}" content-type="chinaMap"></dom-box>

    <!-- 中上 -->
    <dom-box
      :box-style="{ left: '1046px', bottom: '1880px',width:'2342px',height:'228px',backgroundImage:'url(@/../static/imgs/data.png)'}"
      content-type="documentData"
    ></dom-box>
    <dom-box
      :box-style="{ left: '1137px', bottom: '580px',width:'2139px',height:'1243px',borderRadius:0,background:'transparent'}"
      content-type="mainMap"
    ></dom-box>
    <!-- 中下 -->
    <dom-box
      :box-style="{ left:'2133px',bottom:0,width:'121px',height:'441px',backgroundImage:'url(@/../static/imgs/title-v.png)'}"
      content-type="hospital"
    ></dom-box>
    <dom-box :box-style="{ left: '1186px',bottom: 0}" content-type="mapBar"></dom-box>
    <dom-box :box-style="{ right: '1186px',bottom: 0}" content-type="plusMinusLineChart"></dom-box>

    <!-- 右侧上 -->
    <dom-box
      :box-style="{ right:'-4px',top:'100px',width:'874px',height:'121px',backgroundImage:'url(@/../static/imgs/title-h.png)'}"
      content-type="priceIndices"
    ></dom-box>
    <dom-box :box-style="{ right: 0,top: '249px'}" content-type="TreeAnalysis" id="TreeAnalysis"></dom-box>
    <!-- 右侧下 -->
    <dom-box
      :box-style="{ right:'-4px',bottom:'1386px',width:'874px',height:'121px',backgroundImage:'url(@/../static/imgs/title-h.png)'}"
      content-type="recall"
    ></dom-box>
    <dom-box :box-style="{ right: 0, bottom: '916px'}" content-type="pictorialBar"></dom-box>
    <dom-box :box-style="{ right: 0,bottom: '458px'}" content-type="plusLineChart"></dom-box>
    <dom-box :box-style="{ right: 0,bottom: 0}" content-type="drugComplaint"></dom-box>
  </div>
</template>
<script>
import domBox from '../../components/domBox/box'
import { vueBus } from '../../assets/js/common/vueBus'
import Stats from '../../assets/js/common/stats'
export default {
  data() {
    return {}
  },
  mounted() {
    let query = this.urlArgs('debug');
    if(query == 'true'){
      this.initStats()
      this.update()
    }
  },
  components: {
    domBox
  },
  methods: {
    initStats() {
      this.stats = new Stats()
      this.stats.setMode(0) //0:fps |1:ms
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.zIndex = '9999'
      this.stats.domElement.style.top = '70px'
      this.stats.domElement.style.right = '0px'
      document.body.appendChild(this.stats.domElement)
      return this.stats
    },
    update() {
      requestAnimationFrame(this.update.bind(this))
      this.stats.update()
    },
    animate() {
      let me = this
      this.TweenMax.staggerFrom(
        '.box-b',
        2.5,
        {
          scale: 0,
          handle: 1,
          delay: 0.3,
          ease: Power0.easeNone,
          force3D: true
          // onUpdate: me.animUpdate,
          // onUpdateParams: ['{self}']
        },
        0.05
      )
    },
    animUpdate(v) {
      var contentType = v.target.getAttribute('initChart')
      if (v.target.style.handle < 0.5) {
        vueBus.$emit('initChart', contentType)
      }
    },
    urlArgs(params) {
      let args = {}
      let query = location.search.substring(1)
      let pairs = query.split('&')
      for (let i = 0; i < pairs.length; i++) {
        let pos = pairs[i].indexOf('=')
        if (pos === -1) {
          continue
        }
        let name = pairs[i].substring(0, pos)
        let value = pairs[i].substring(pos + 1)
        value = decodeURIComponent(value)
        args[name] = value
      }
      return args[params]
    }
  }
}
</script>
 <style lang="scss" scoped>
.home-con {
  position: relative;
  height: 100%;
  perspective: 1200px;
}
</style>

