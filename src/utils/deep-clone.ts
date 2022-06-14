import _isarray from './_isarray'
/**
 * 深拷贝
 * @return new
 */
const deepClone = (obj: Array<unknown> | Record<string, any>): any => {
  if (typeof obj === 'object' && obj !== null) {
    let newObj: any
    if (_isarray(obj)) {
      newObj = []
      obj.forEach((item: any) => {
        newObj.push(deepClone(item))
      })
    } else {
      newObj = {}
      Object.keys(obj).forEach((key: string) => {
        newObj[key] = deepClone((obj as Record<string, any>)[key])
      })
    }
    return newObj
  } else {
    return obj
  }
}

export default deepClone
