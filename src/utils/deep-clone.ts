/**
 * 深拷贝
 * @return new
 */
export const deepClone = (obj: Array<unknown> | object) => {
  return JSON.parse(JSON.stringify(obj))
}

export default deepClone
