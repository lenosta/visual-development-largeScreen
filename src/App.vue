<template>
  <div
    id="app"
    ref="app"
  >
    <div class="nav">
      <router-link :to="{name: 'demo1'}">demo1</router-link>
      <router-link :to="{name: 'demo2'}">demo2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import App from '@/assets/js/common/app'
export default {
  data() {
    return {}
  },
  mounted() {
    App.appPage.adapt({
      domSelector: '#app',
      sizeEqualRatio: true,
      w: 1920,
      h: 1080
    })
  },
  watch: {
    // 全局状态isLoadPartComplete part组件是否加载完毕
    isLoadPartComplete: {
      handler: function(newV, oldV) {
        if (newV) {
          console.log('part加载完毕', newV)
          document.querySelector('#appLoading').style.display = 'none'
        }
      }
    }
  },
  methods: {},
  computed: {
    //获取全局状态isLoadPartComplete
    ...App.appState.getState(['isLoadPartComplete'])
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
