import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import PlayerAPIService from '@/services/PlayerService'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$player_api = PlayerAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')
