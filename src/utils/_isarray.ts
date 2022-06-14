function _isarray(target: any) {
  return Object.prototype.toString.call(target) === '[object array]'
}

export default _isarray
