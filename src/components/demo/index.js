import Demo from './demo.vue'
import './demo.scss'

Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo)
}

export default Demo
