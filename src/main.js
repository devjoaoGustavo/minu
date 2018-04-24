import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import App from './App.vue'

//routes
import HelloWorld from './components/HelloWorld.vue'
import Catalog from './components/Catalog.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip    = false
Vue.config.decoratorsLegacy = true

const routes = [
  { path: '/',        component: HelloWorld },
  { path: '/catalog', component: Catalog }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
