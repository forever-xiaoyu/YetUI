import CartList from './cartlist.vue'
import './cartlist.scss'

CartList.install = function (Vue) {
  Vue.component(CartList.name, CartList)
}

export default CartList
