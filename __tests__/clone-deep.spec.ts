import { deepClone } from '../src/index'

describe('test cloneDeep', () => {
  test('test clone', () => {
    const origin = {
      name: 'foo',
    }
    const target = deepClone(origin)
    target.name = 'benjamin'
    expect(origin.name).toBe('foo')
  })

  test('test clone inner object', () => {
    const origin = {
      name: 'foo',
      innerObject: {
        name: 'bar',
      },
    }
    const target = deepClone(origin)
    target.name = 'benjamin'
    target.innerObject.name = 'benjamin'
    expect(origin.name).toBe('foo')
    expect(origin.innerObject.name).toBe('bar')
  })

  test('test clone inner array', () => {
    const origin = {
      name: 'foo',
      innerObject: {
        name: 'bar',
        array: [12],
      },
    }
    const target = deepClone(origin)
    target.name = 'benjamin'
    target.innerObject.name = 'benjamin'
    target.innerObject.array.push(23)
    expect(origin.name).toBe('foo')
    expect(origin.innerObject.name).toBe('bar')
    expect(origin.innerObject.array.length).toBe(1)
  })

  test('test clone inner dep', () => {
    const origin: any = {
      name: 'foo',
      innerObject: {
        name: 'bar',
        array: [12],
        dep: null,
      },
    }
    origin.innerObject.dep = origin
    const target = deepClone(origin)
    target.name = 'benjamin'
    target.innerObject.name = 'benjamin'
    target.innerObject.array.push(23)

    expect(origin.name).toBe('foo')
    expect(origin.innerObject.name).toBe('bar')
    expect(origin.innerObject.array.length).toBe(1)
  })
})
