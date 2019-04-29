import { packageList as pkgList } from './config.json'
import Demo from './demo'
import CartList from './cartlist'
import Skeleton from './skeleton'
import Stepper from './stepper'

const packages = {
  Demo,
  Skeleton,
  CartList,
  Stepper
}

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

const install = function (Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
