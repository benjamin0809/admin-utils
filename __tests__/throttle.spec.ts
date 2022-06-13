import { throttle } from '../src/index'

describe('test throttle', () => {
  const a = {
    num: 0,
  }
  const fn = throttle(
    function counter() {
      a.num++
    },
    100,
    a,
  )

  // 第一次调用函数
  fn()
  // 50ms后调用
  setTimeout(fn, 50)

  test('test throttle', () => {
    expect(a.num).toBe(1)
    setTimeout(() => {
      expect(a.num).toBe(2)
    }, 100)
  })

  test('test throttle exception', () => {
    const fn1var = 0
    const fn1 = () => throttle(fn1var as any, 100, a)
    expect(fn1).toThrowError(new Error('fn is not function'))
  })
})
