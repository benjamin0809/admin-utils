type throttleFn = (...args: unknown[]) => void
export const throttle = (fn: throttleFn, delay = 500, context: any, ...args: any) => {
  if (typeof fn !== 'function') {
    throw new Error('fn is not function')
  }
  let pre = 0
  const _this = context || window || globalThis || self
  return function (...fnArgs: any) {
    const newArgs = [...args, ...fnArgs]
    if (pre + delay > Date.now()) {
      fn.apply(_this, newArgs)
      pre = Date.now()
    }
  }
}

export default throttle
