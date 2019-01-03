/**
 *  以插件形式进行 vue的混入
 * 1.混入配置项appOption:{}
 * 2.全局注册方法 vm.$getComponent()
 */
import Type from './isType'
import Stats from './stats'
import urlArg from './urlArg'
import store from '../../../store'
const appMixin = {
  install(Vue, option) {
    Vue.mixin({
      data() {
        return {
          appOption: {} // 组件混入选项
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
        /**
         * @description 依据标签名获取vue实例
         * @author zzg
         * @date 2019-01-03
         * @param {String} componentTag
         * @returns {Array} 返回实例数组
         */
        $getComponent(componentTag) {
          let component = []
          let allComp = this._getAllChildComp(this)
          component = allComp.filter(function(vm) {
            return vm.$options._componentTag === componentTag
          })
          if (component.length == 0) {
            console.warn(`${componentTag} 组件不存在`)
            return
          }
          return component
        },

        /**
         * @description 获取当前vue实例的所有子实例
         * @author zzg
         * @date 2019-01-03
         * @param {Object} instance
         * @returns {Array}  返回数组
         */
        _getAllChildComp(instance) {
          let allComp = [],
            child
          if (Type.isObject(instance)) {
            child = instance.$children
          } else if (Type.isArray(instance)) {
            child = instance
          }
          for (let i = 0; i < child.length; i++) {
            allComp.push(child[i])
            if (child[i].$children.length > 0) {
              allComp = allComp.concat(this._getAllChildComp(child[i].$children))
            }
          }
          return allComp
        },

        /**
         * @description 是否开启刷新率监控
         * @author zzg
         * @date 2019-01-03
         */
        _debugShouldOpenDebugMode() {
          if (this.appOption.debug === true) {
            this._debugOpenPageStatsMonitor()
          } else {
            this._debugCanclePageStatsMonitor()
          }
        },

        /**
         * @description  开启刷新率监控
         * @author zzg
         * @date 2019-01-03
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
           * @description 更新刷新率
           * @author zzg
           * @date 2019-01-03
           */
          function update() {
            window._requestAnimationFrameId = requestAnimationFrame(update)
            window._stats.update()
          }
          update()
        },

        /**
         * @description 关闭刷新率监控
         * @author zzg
         * @date 2019-01-03
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
         * @description 获取最终的配置选项
         * @author zzg
         * @date 2019-01-03
         */
        _debugGetFinalOptions() {
          // 全局配置项
          let appOptionionsLev0 = store.state.appOption

          // 组件debug配置
          let optionList = []
          let that = this

          // 递归实例的$options 获取配置
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

          // 调用获取配置项
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
export default appMixin
