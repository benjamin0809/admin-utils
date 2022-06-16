import _isarray from './_isarray'
/**
 * 深拷贝
 * @return new
 */
// const deepClone = (obj: Array<unknown> | Record<string, any>, map = new Map<any, boolean>()): any => {
//   if (typeof obj === 'object' && obj !== null) {
//     if (map.has(obj)) {
//       return obj
//     }
//     let newObj: any
//     map.set(obj, true)
//     if (_isarray(obj)) {
//       newObj = []
//       obj.forEach((item: any) => {
//         newObj.push(deepClone(item))
//       })
//     } else {
//       newObj = {}
//       Object.keys(obj).forEach((key: string) => {
//         newObj[key] = deepClone((obj as Record<string, any>)[key])
//       })
//     }
//     return newObj
//   } else {
//     return obj
//   }
// }

/**
 * 深拷贝
 * @param obj 源对象
 * @param map 临时变量
 * @returns 新对象
 */
function deepClone(obj: Array<unknown> | Record<string, any>, map = new Map()) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (map.get(obj)) {
    return obj
  }
  let result: any
  map.set(obj, true)
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone((obj as Record<string, any>)[key], map)
    }
  }
  return result
}

export default deepClone
