import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import FishAPIService from '@/services/FishAPI.js'
import BugAPIService from '@/services/BugAPI.js'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$fish_api = FishAPIService
Vue.prototype.$bug_api = BugAPIService

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
