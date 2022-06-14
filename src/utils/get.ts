import _isarray from './_isarray'
/**
 * 获取对象的值
 * @param object 对象
 * @param path 获取路径
 * @param defaultVal default value
 * @returns value
 */
function get(object: Record<string, any>, path: string | string[], defaultVal?: any) {
  if (!path || path.length === 0) return defaultVal
  let newPath = []
  if (_isarray(path)) {
    newPath = path as any[]
  } else {
    newPath = (path as string).replace(/\[/g, '.').replace(/\]/g, '').split('.')
  }
  return (
    newPath.reduce((o: Record<string, any>, k: string) => {
      return (o || {})[k]
    }, object) || defaultVal
  )
}

export default get
