import commonjs from '@rollup/plugin-commonjs' // commonjs模块转换插件
import eslint from '@rollup/plugin-eslint' // eslint插件
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel'
import ts from 'rollup-plugin-typescript2'
import path from 'path'
import fs from 'fs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
const getPath = (_path) => path.resolve(__dirname, _path)
import packageJSON from './package.json'

const extensions = ['.js', '.ts', '.tsx']

// ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
  extensions,
})

// eslint
const esPlugin = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**'],
})

// 基础配置
const commonConf = {
  input: getPath('./src/index.ts'),
  plugins: [
    nodeResolve(extensions),
    babel({ exclude: 'node_modules/**' }),
    commonjs(),
    esPlugin,
    tsPlugin,
    
  ],
}
// 需要导出的模块类型
const outputMap = [
  {
    file: packageJSON.main, // 通用模块
    format: 'umd',
  },
  {
    file: packageJSON.module, // es6模块
    format: 'es',
  },
]

const buildConf = (options) => Object.assign({}, commonConf, options)
const output = outputMap.map((output) => buildConf({ output: { name: packageJSON.name, ...output } }))

// es module 
const esOutputMap = fs.readdirSync(path.resolve(__dirname, 'src', 'utils')).map((item) => {
  const name = item.replace('.ts', '.js')
  return {
    name,
    format: 'es',
    file: 'es/' + name,
    input: getPath('./src/utils/' + item)
  }
})
const esoutput = esOutputMap.map((output) => buildConf({ output: { ...output }, input: output.input }))
// console.log(process.env)
export default output.concat(esoutput)
