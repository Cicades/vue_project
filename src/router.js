import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Member from './views/Member.vue'
import Search from './views/Search.vue'
import Cart from './views/Cart.vue'
import NewsList from './views/NewsList.vue'
import NewsDetail from './views/NewsDetail.vue'
import ImageShare from './views/ImageShare.vue'
import ImgDetail from './views/ImgDetail.vue'
import Goods from './views/Goods.vue'
import GoodsDetail from './views/GoodsDetail.vue'
import GoodsDesc from './views/GoodsDesc.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Index },
    { path: '/member', component: Member },
    { path: '/search', component: Search },
    { path: '/cart', component: Cart },
    { path: '/home/news', component: NewsList, name: 'news' },
    { path: '/news/detail/:id', component: NewsDetail },
    { path: '/home/share', component: ImageShare, name: 'imageShare' },
    { path: '/home/share/detail/:id', component: ImgDetail, name: 'imgDetail' },
    { path: '/home/goods', component: Goods, name: 'goods' },
    { path: '/home/goods/detail/:id', component: GoodsDetail, name: 'goodsDetail' },
    { path: '/home/goods/desc/:id', component: GoodsDesc, name: 'goodsDesc' }
  ]
})
