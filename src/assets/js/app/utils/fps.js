import Stats from './stats'
export default {
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
    window._stats.domElement.style.zIndex = '9999999'
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
  }
}
