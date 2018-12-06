import * as TweenMax from 'gsap/umd/TweenMax'
export const handleNum = (sorce, target, time) => {
  var obj = {
    sorce: sorce
  }
  TweenMax.to(obj, 1, { sorce: target })
}
