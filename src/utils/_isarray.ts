function _isarray(target: any) {
  return Object.prototype.toString.call(target) === '[object Array]'
}

export default _isarray
