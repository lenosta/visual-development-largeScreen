/**
 * @description 页面适配
 * @author zzg
 * @date 2019-01-03
 * @param {Object} opt
 */
const adapt = function(opt) {
  var defultOpt = {
    sizeEqualRatio: false, //是否等比缩放页面
    w: 1920, // 默认宽度
    h: 1080, // 默认高度
    domSelector: 'body', // 默认绑定dom节点
    left: 'm', //'l','m','r' 定位位置 默认水平居中
    top: 'm' //'t' 'm','b' 定位位置 默认垂直居中
  }
  var option = Object.assign({}, defultOpt, opt)

  /**
   * @description 是否等比缩放页面
   * @author zzg
   * @date 2019-01-03
   * @param {Boolean} sizeEqualRatio
   */
  function scaleScreen(sizeEqualRatio) {
    var dw = document.body.clientWidth
    var dh = document.body.clientHeight
    var minRatio = Math.min(dw / option.w, dh / option.h)
    var left, top, right, bottom
    if (sizeEqualRatio) {
      view.style.transform = 'scale(' + minRatio + ')'
      switch (option.top) {
        case 'm':
          top = (dh - option.h) / 2 + 'px'
          break
        case 't':
          top = (option.h * (minRatio - 1)) / 2 + 'px'
          break
        case 'b':
          bottom = (option.h * (minRatio - 1)) / 2 + 'px'
      }
      switch (option.left) {
        case 'm':
          left = (dw - option.w) / 2 + 'px'
          break
        case 'l':
          left = (option.w * (minRatio - 1)) / 2 + 'px'
          break
        case 'r':
          right = (option.w * (minRatio - 1)) / 2 + 'px'
      }
    } else {
      view.style.transform = 'scale(' + dw / option.w + ',' + dh / option.h + ')'
      left = (option.w * (dw / option.w - 1)) / 2 + 'px'
      top = (option.h * (dh / option.h - 1)) / 2 + 'px'
    }
    top ? (view.style.top = top) : (view.style.bottom = bottom)
    left ? (view.style.left = left) : (view.style.right = right)
  }

  /**
   * @description 进行页面设置
   * @author zzg
   * @date 2019-01-03
   */
  var view = document.querySelector(option.domSelector)
  view.style.position = 'absolute'
  view.style.width = option.w + 'px'
  view.style.height = option.h + 'px'
  scaleScreen(option.sizeEqualRatio)

  /**
   * @description 随窗口进行resize
   * @author zzg
   * @date 2019-01-03
   */
  window.addEventListener('resize', function() {
    scaleScreen(option.sizeEqualRatio)
  })
}
export default adapt
