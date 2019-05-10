import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Member from './views/Member.vue'
import Search from './views/Search.vue'
import Cart from './views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {path: '/index', component: Index},
    {path: '/member', component: Member},
    {path: '/search', component: Search},
    {path: '/cart', component: Cart}
  ]
})
