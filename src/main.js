import Vue from 'vue'
import App from './App.vue'
import yetUI from './components/index'

Vue.config.productionTip = false

Vue.use(yetUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
