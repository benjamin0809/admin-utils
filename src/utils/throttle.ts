type throttleFn = (...args: unknown[]) => void

/**
 * 节流
 * @param fn 节流函数
 * @param delay 执行间隔
 * @param context this
 * @param args 参数
 * @returns void
 */
function throttle(fn: throttleFn, delay = 500, context: any, ...args: any) {
  if (typeof fn !== 'function') {
    throw new Error('fn is not function')
  }
  let pre = 0
  const _this = context || window || globalThis || self
  return function (...fnArgs: any) {
    const newArgs = [...args, ...fnArgs]
    if (pre + delay > Date.now() || pre === 0) {
      fn.apply(_this, newArgs)
      pre = Date.now()
    }
  }
}

export default throttle
