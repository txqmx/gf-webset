import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@root/static/css/common.css'
import { registerMicroApps, start } from 'qiankun'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

const apps = [
  {
    name: 'teacher',
    entry: process.env.NODE_ENV === 'production' ? '/teacher' : 'http://localhost:8080',
    container: '#teacher',
    activeRule: '/teacher',
    sandbox: {
      strictStyleIsolation: true
    }
  },
  {
    name: 'student',
    entry: process.env.NODE_ENV === 'production' ? '/student' : 'http://localhost:8081',
    container: '#student',
    activeRule: '/student',
    sandbox: {
      strictStyleIsolation: true
    }
  }
]
registerMicroApps(apps)
start()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
