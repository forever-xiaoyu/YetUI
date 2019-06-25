import Demo from './demo.vue'
import './demo.scss'

// 为组件提供 install 安装方法，供按需引入
Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo)
}

export default Demo
