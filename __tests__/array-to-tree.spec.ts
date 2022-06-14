import { arrayToTree } from '../src/index'

describe('test arrayToTree', () => {
  const array = [
    {
      id: 1,
      pid: 0,
      name: '1',
    },
    {
      id: 2,
      pid: 0,
      name: '2',
    },
    {
      id: 10,
      pid: 1,
      name: '1-0',
    },
  ]

  const tree = arrayToTree(array)
  test('test arrayToTree', () => {
    const arr1 = [
      {
        id: 1,
        pid: 0,
        name: '1',
        children: [
          {
            id: 10,
            pid: 1,
            name: '1-0',
          },
        ],
      },
      {
        id: 2,
        pid: 0,
        name: '2',
      },
    ]
    expect(tree).toEqual('456')
  })
})
