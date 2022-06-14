import cloneDeep from './deep-clone'
import get from './get'
/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */
function arrayToTree<T>(array: unknown[], id = 'id', parentId = 'pid', children = 'children') {
  /**
   * Convert an array to a tree-structured array.
   * @param   {array}     array     The Array need to Converted.
   * @param   {string}    id        The alias of the unique ID of the object in the array.
   * @param   {string}    parentId       The alias of the parent ID of the object in the array.
   * @param   {string}    children  The alias of children of the object in the array.
   * @return  {array}    Return a tree-structured array.
   */
  const result: T[] = []
  const hash: Record<string, any> = {}
  const data: T[] = cloneDeep(array)

  data.forEach((item, index) => {
    const k = get(data, [index.toString(), id])
    hash[k] = data[index]
  })

  data.forEach((item) => {
    const parent = get(item, parentId)
    const hashParent = hash[parent]
    if (hashParent) {
      !hashParent[children] && (hashParent[children] = [])
      hashParent[children].push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

export default arrayToTree
