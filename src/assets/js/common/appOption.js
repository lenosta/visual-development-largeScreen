/* eslint-disable */
// debug plugin
import Stats from './stats'
import urlArg from './urlArg'
import store from '../../../store'
export default {
  install(Vue, option) {
    let _store = {
      state() {
        return {}
      },
      getters: {},
      actions: {},
      mutations: {}
    }
    Vue.mixin({
      data() {
        return {
          appOption: {}
        }
      },
      watch: {},
      created() {
        // 获取debug配置项
        this._debugGetFinalOptions()
        if (!this.$parent) { // 跟组件
          this._debugShouldOpenDebugMode()
        }
      },
      methods: {
        /**
         * 是否开启刷新率监控
         */
        _debugShouldOpenDebugMode() {
          if (this.appOption.debug === true) {
            this._debugOpenPageStatsMonitor()
          } else {
            this._debugCanclePageStatsMonitor()
          }
        },
        /**
         * 开启刷新率监控
         */
        _debugOpenPageStatsMonitor() {
          if (window._stats) {
            return
          }
          window._stats = new Stats()
          window._stats.setMode(0) //0:fps |1:ms
          window._stats.domElement.style.position = 'absolute'
          window._stats.domElement.style.zIndex = '9999'
          window._stats.domElement.style.top = '0px'
          window._stats.domElement.style.right = '0px'
          document.body.appendChild(window._stats.domElement)

          function update() {
            window._requestAnimationFrameId = requestAnimationFrame(update)
            window._stats.update()
          }
          update()
        },
        /**
         * 关闭刷新率监控
         */
        _debugCanclePageStatsMonitor() {
          let dom = document.querySelectorAll('#stats')
          let doms = Array.from(dom)
          doms.forEach(item => {
            item.remove()
          })
          window._stats = null
          cancelAnimationFrame(window._requestAnimationFrameId)
        },
        /**
         * 获取最终的配置选项
         */
        _debugGetFinalOptions() {
          // 全局debug配置
          let appOptionionsLev0 = store.state.appOption
          // 组件debug配置
          let appOptionionsLev1 = this.$options.appOption
          // 参数
          // let appOptionionsLev2 = this.$route.query
          let appOptionionsLev2 = urlArg()
          // 获得一个最终的debug选项
          let finaleOption = Object.assign({}, appOptionionsLev0, appOptionionsLev1, appOptionionsLev2)
          try {
            finaleOption.debug = JSON.parse(finaleOption.debug)
          } catch (err) {
            console.warn(`debug参数只能是true或false`)
          }
          this.appOption = finaleOption
        }
      }
    })
  }
}
