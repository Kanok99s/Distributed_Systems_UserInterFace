import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'leaflet/dist/leaflet.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import mqtt from 'mqtt/dist/mqtt'
import './scss/main.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

const connectUrl = 'wss://9f1a1ea00c6847a8809ba15c0fa8c4a1.s1.eu.hivemq.cloud:8884/mqtt'

Vue.prototype.$client = mqtt.connect(connectUrl, {
  username: 'Kanokwan',
  password: 'password',
  clean: true,
  clientId: 'mqtt001'
})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
