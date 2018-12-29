const urlArg = () => {
  let args = {}
  let query = location.search.substring(1)
  let pairs = query.split('&')
  for (let i = 0; i < pairs.length; i++) {
    let pos = pairs[i].indexOf('=')
    if (pos === -1) {
      continue
    }
    let name = pairs[i].substring(0, pos)
    let value = pairs[i].substring(pos + 1)
    value = decodeURIComponent(value)
    value = value === 'true' ? true : value === 'false' ? false : value
    args[name] = value
  }
  return args
}
export default urlArg
