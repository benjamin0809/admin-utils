/**
 * 深拷贝
 * @return new
 */
const deepClone = (obj: Array<unknown> | Record<string, any>) => {
  return JSON.parse(JSON.stringify(obj))
}

export default deepClone
