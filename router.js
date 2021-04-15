import Vue from 'vue'
import VueRouter from 'vue-router'
import Breadcrumbs from './components/BreadCrumbs'
import AlertBadges from './components/Alerts_Badges'
Vue.use(VueRouter)
const routes=[{path:'/breadcrumbs',component:Breadcrumbs},{path:'/badges',component:AlertBadges}]
export default new VueRouter({mode:'history',routes})