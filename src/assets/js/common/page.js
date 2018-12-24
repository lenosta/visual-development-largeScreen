 const adapt = function(opt) {
  var defultOpt = {
    sizeEqualRatio: false,
    w: 800,
    h: 450,
    domSelector: 'body',
    left: 'm', //'l','m','r'
    top: 'm' // 't' 'm','b'
  }
  var option = Object.assign({}, defultOpt, opt)
  var view = document.querySelector(option.domSelector)
  view.style.width = option.w + 'px'
  view.style.height = option.h + 'px'
  function scaleScreen(sizeEqualRatio) {
    var dw = window.innerWidth
    var dh = window.innerHeight
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
  scaleScreen(option.sizeEqualRatio)
  window.addEventListener('resize', function() {
    scaleScreen(option.sizeEqualRatio)
  })
}
export default adapt

