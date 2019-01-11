import setConfig from './setConfig'
import getComponent from './getComponent'
import baseComponents from '../baseComponents'
import fps from '../utils/fps'
export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          appConfig: {} // 组件混入选项
        }
      },
      created() {
        // 获取当前组件配置项
        this._debugGetFinalOptions()
        if (!this.$parent) {
          // 根组件
          this._debugShouldOpenDebugMode()
        }
      },
      methods: {
        ...setConfig,
        ...getComponent,
        /**
         * @description 是否开启刷新率监控
         * @author zzg
         * @date 2019-01-03
         */
        _debugShouldOpenDebugMode() {
          if (this.appConfig.debug === true) {
            fps._debugOpenPageStatsMonitor()
          } else {
            fps._debugCanclePageStatsMonitor()
          }
        }
      },
      components:{
        ...baseComponents
      }
    })
  }
}
