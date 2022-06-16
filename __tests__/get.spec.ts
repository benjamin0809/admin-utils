import { get } from '../src/index'

describe('test get', () => {
  const a = {
    num: 0,
    arr: [1, 2, 3],
    c: {
      name: '456',
      a: ['a'],
    },
  }

  test('test get', () => {
    expect(get(a, 'c.name')).toBe('456')
    expect(get(a, 'c.a[0]')).toBe('a')
    expect(get(a, 'c.a[0].d.asd', 'default')).toBe('default')
    expect(get(a, ['c', 'name'])).toBe('456')
    expect(get(a, '', 'default')).toBe('default')
    expect(get(a, ['num'], 'default')).toBe(0)
  })
})
