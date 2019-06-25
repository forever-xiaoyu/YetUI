import { packageList as pkgList } from './config.json'
import Demo from './demo'
import CartList from './cartlist'
import Skeleton from './skeleton'
import Stepper from './stepper'

// 存储组件列表
const packages = {
  Demo,
  Skeleton,
  CartList,
  Stepper
}

// 遍历组件并注册到 components 列表
// 组件并不都直接为独立组件，也有对象组件，对象组建需遍历注册到 components
const components = {}

pkgList.map(item => {
  const pkg = packages[item.name]
  if (!pkg) return
  if (pkg.name) {
    components[pkg.name] = pkg
  } else {
    for (let n in pkg) {
      components[n] = pkg[n]
    }
  }
})

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install, // 必传
  ...components // 具体组件列表
}

export default API
