/**
 * 深拷贝
 * @return new
 */
const deepClone = (obj: Array<unknown> | Record<string, any>): any => {
  if (typeof obj === 'object' && obj !== null) {
    let newObj: any
    if (Array.isArray(obj)) {
      newObj = []
      obj.forEach((item: any) => {
        newObj.push(deepClone(item))
      })
    } else {
      newObj = {}
      Object.keys(obj).forEach((key: string) => {
        newObj[key] = deepClone(obj[key])
      })
    }
    return newObj
  } else {
    return obj
  }
}

export default deepClone
