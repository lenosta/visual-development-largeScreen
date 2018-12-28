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
          debugOpt: {}
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
          if (this.debugOpt.debug === true) {
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
          let debugOptionsLev0 = store.state.debugOpt
          // 组件debug配置
          let debugOptionsLev1 = this.$options.debugOpt
          // 参数
          // let debugOptionsLev2 = this.$route.query
          let debugOptionsLev2 = urlArg()
          // 获得一个最终的debug选项
          let finaleOption = Object.assign({}, debugOptionsLev0, debugOptionsLev1, debugOptionsLev2)
          try {
            finaleOption.debug = JSON.parse(finaleOption.debug)
          } catch (err) {
            console.warn(`debug参数只能是true或false`)
          }
          this.debugOpt = finaleOption
        }
      }
    })
  }
}
