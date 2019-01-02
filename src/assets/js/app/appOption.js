// 项目配置插件
import Stats from './stats'
import urlArg from './urlArg'
import store from '../../../store'
import { get } from 'https'
export default {
  install(Vue, option) {
    // 全局mixin
    Vue.mixin({
      data() {
        return {
          appOption: {} // 组件混入选项
        }
      },
      watch: {},
      created() {
        // 获取当前组件配置项
        this._debugGetFinalOptions()
        if (!this.$parent) {
          // 根组件
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
          /**
           * 更新动画
           */
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
          // 全局配置项
          let appOptionionsLev0 = store.state.appOption
          // 组件debug配置
          let optionList = []
          let that = this
          /**
           * 递归实例的$options 获取配置
           * @param {object} that 实例对象
           */
          function getComponentOption(that) {
            if (that.$options.parent) {
              if (that.$options.appOption) {
                optionList.push(that.$options.appOption)
              }
              getComponentOption(that.$options.parent)
            } else if (!that.$options.parent) {
              if (that.$options.appOption) {
                optionList.push(that.$options.appOption)
              }
            }
          }
          getComponentOption(that)
          let opt = {}
          for (let i = optionList.length - 1; i >= 0; i--) {
            opt = Object.assign(opt, optionList[i])
          }
          let appOptionionsLev1 = opt
          // url参数
          let appOptionionsLev2 = urlArg()
          // 获得一个最终的组件配置选项
          let finaleOption = Object.assign({}, appOptionionsLev0, appOptionionsLev1, appOptionionsLev2)
          // 混入data
          this.appOption = finaleOption
        }
      }
    })
  }
}
