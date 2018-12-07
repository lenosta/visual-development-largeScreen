export const preload = preload => {
  if (!Array.isArray(preload)) return
  let length = preload.length
  if(length===0) return 'no preload'
  let count = 0
  preload.forEach(item => {
    let img = new Image()
    img.onload = () => {
      count++
    }
    img.src = item
    if (count === length) return 'preloadComplete'
  })
}
