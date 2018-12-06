<template>
  <div
    id="app"
    ref="app"
  >
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

<style>
#app {
  position: absolute;
  box-sizing: border-box;
  background-size: cover;
  z-index: 3;
}
</style>
