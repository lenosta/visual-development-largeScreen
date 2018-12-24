<template>
  <div
    id="app"
    ref="app"
  >
    <div class="nav">
      <router-link :to="{name: 'page2'}">page2</router-link>
      <!-- <router-link :to="{name: 'page3'}">page3</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import adapt from './assets/js/common/page' //页面适配
import Stats from './assets/js/common/stats' //页面刷新率展示
import urlArg from './assets/js/common/urlArg' //获取url参数
export default {
  data() {
    return {
      queryParams:urlArg()//页面query参数获取
    }
  },
  mounted() {
    this.page() //页面适配，基础方法
    if (this.queryParams.debug) {
      this.initStats()
      this.update()
    }
  },
  methods: {
    page() {
      adapt({
        domSelector: '#app',
        sizeEqualRatio: true,
        w: 1920,
        h: 1080
      })
    },
    initStats() {
      this.stats = new Stats()
      this.stats.setMode(0) //0:fps |1:ms
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.zIndex = '9999'
      this.stats.domElement.style.top = '0px'
      this.stats.domElement.style.right = '0px'
      document.body.appendChild(this.stats.domElement)
      return this.stats
    },
    update() {
      requestAnimationFrame(this.update.bind(this))
      this.stats.update()
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  box-sizing: border-box;
  background-size: cover;
  z-index: 3;
}
.nav {
  width: 300px;
  height: 50px;
  margin: 0 auto;
  line-height: 50px;
  font-size: 20px;
  a {
    float: left;
    width: 50%;
  }
}
</style>
