
let Type = (function() {
  let Type = {}
  for (
    let i = 0, type;
    (type = ['Undefined', 'Null', 'Boolean', 'Number', 'String', 'Function', 'Array', 'Object'][i++]);

  ) {
    ;(function(type) {
      Type['is' + type] = function(obj) {
        return Object.prototype.toString.call(obj) === '[object ' + type + ']'
      }
    })(type)
  }
  return Type
})()
export default Type
