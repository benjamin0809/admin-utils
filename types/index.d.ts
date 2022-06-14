/**
 * 深拷贝
 * @return new
 */
declare const deepClone: (obj: Array<unknown> | Record<string, any>) => any;

declare type throttleFn = (...args: unknown[]) => void;
/**
 * 节流
 * @param fn 节流函数
 * @param delay 执行间隔
 * @param context this
 * @param args 参数
 * @returns void
 */
declare function throttle(fn: throttleFn, delay: number | undefined, context: any, ...args: any): (...fnArgs: any) => void;

/**
 * 获取对象的值
 * @param object 对象
 * @param path 获取路径
 * @param defaultVal default value
 * @returns value
 */
declare function get(object: Record<string, any>, path: string | string[], defaultVal?: any): any;

/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */
declare function arrayToTree<T>(array: unknown[], id?: string, parentId?: string, children?: string): T[];

export { arrayToTree, deepClone, get, throttle };
