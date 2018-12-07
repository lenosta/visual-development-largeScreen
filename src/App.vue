<template>
  <div
    id="app"
    ref="app"
  >
    <div class="nav">
      <router-link :to="{name: 'page2'}">page2</router-link>
      <router-link :to="{name: 'page3'}">page3</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { adapt } from './assets/js/common/page'
export default {
  data() {
    return {}
  },
  mounted() {
    this.page()
  },
  methods: {
    page() {
      adapt({
        domSelector: '#app',
        sizeEqualRatio: true,
        w: 1920,
        h: 1080
      })
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
