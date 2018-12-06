<template>
  <div
    id="app"
    ref="app"
  >
    <router-view />
    <div v-show=show>
      <img src="../static/imgs/big-title.png">
      <img src="../static/imgs/title-h.png">
      <img src="../static/imgs/title-v.png">
      <img src="../static/imgs/data.png">
      <img src="./assets/imgs/circle/circle-center-fill.png">
      <img src="./assets/imgs/circle/circle-center-fill2.png">
      <img src="./assets/imgs/circle/circle-center-fill3.png">
      <img src="./assets/imgs/circle/circle-center.png">
      <img src="./assets/imgs/circle/circle-outer.png">
      <img src="./assets/imgs/circle/circle-outer2.png">
      <img src="./assets/imgs/circle/circle-outer3.png">
      <img src="./assets/imgs/center-bg.jpg">
      <img src="./assets/imgs/chart-bg.png">
      <img src="./assets/imgs/box.png">
      <img src="./assets/imgs/box-details-left.png">
      <img src="./assets/imgs/box-details-right.png">
    </div>
  </div>
</template>

<script>
import { adapt } from './assets/js/common/page'
import {vueBus} from './assets/js/common/vueBus'
export default {
  data() {
    return {
      show: false,
      count: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      let me = this
      let imgs = document.querySelectorAll('img')
      Array.from(imgs).forEach(item => {
        let img = new Image()
        img.onload = () => {
          me.count++
        }
        img.src = item.getAttribute('src')
      })
    })
  },
  watch: {
    count(val, oldval) {
      if (val == 16) {
        this.page()
        canvas('starts', 230, 2000, 60, 2, 800000, 0.5)
        setTimeout(function(){
          document.getElementById('appLoading').style.display = 'none'
          vueBus.$emit('imgOnload','animateStart')
        }, 2000)
      }
    }
  },
  methods: {
    page() {
      adapt({
        domSelector: '#app',
        sizeEqualRatio: true,
        w: 4583,
        h: 2500
      })
    }
  }
}
</script>

<style>
#app {
  position: absolute;
  box-sizing: border-box;
  background-size: cover;
  z-index: 3;
}
</style>
