import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@root/static/css/common.css'

import { Button, Select } from 'element-ui'
const components = [Button, Select]

components.forEach(componentItem => {
  Vue.use(componentItem)
})

Vue.config.productionTip = false

let instance = null
function render (props) {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef,camelcase
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

if (!window.__POWERED_BY_QIANKUN__) { // 默认独立运行
  render()
}

// 子组件的协议
export async function bootstrap () {

}

export async function mount (props) {
  // 这里可以获取主应用传递到子系统的变量
  // 或者通过window._store获取到主应用的store
  render(props)
}

export async function unmount (props) {
  instance.$destroy()
}
