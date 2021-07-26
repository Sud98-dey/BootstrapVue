import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Nav from '@/views/Nav.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  BContainer,BRow,BInputGroup,
  BCol,BCard,BButton,BInputGroupAppend,
  BFormInput,BNavbar,BNavbarBrand,
  BNavbarNav,BNavItem,BCardText,
  BCardHeader,BCardBody,BCardFooter
} from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.component('app-nav',Nav)
Vue.component('b-container', BContainer)
Vue.component('b-form-input', BFormInput)
Vue.component('b-input-group', BInputGroup)
Vue.component('b-input-group-append',BInputGroupAppend)
Vue.component('b-col', BCol) 
Vue.component('b-row', BRow)
Vue.component('b-card', BCard)
Vue.component('b-button', BButton)
Vue.component('b-navbar', BNavbar)
Vue.component('b-navbar-brand', BNavbarBrand)
Vue.component('b-navbar-nav', BNavbarNav)
Vue.component('b-nav-item', BNavItem)
Vue.component('b-card-header', BCardHeader)
Vue.component('b-card-text', BCardText)
Vue.component('b-card-body', BCardBody)
Vue.component('b-card-footer', BCardFooter)
new Vue({
  router,store,
  render: h => h(App)
}).$mount('#app')
