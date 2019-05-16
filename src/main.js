import Vue from 'vue'
import App from './App.vue'

//插件
import router from './router'
import store from './store/index.js'

// 样式
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.css'
import '@/assets/style/reset.scss'

// 组件
import { Header, Swipe, SwipeItem, Cell, Badge, Button, Lazyload, Switch } from 'mint-ui'
import VuePreview from 'vue-preview'
import Numbox from './components/NumBox.vue'
Vue.component(Badge.name, Badge)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Cell.name, Cell)
Vue.component(Switch.name, Switch)
Vue.component('CommentItem', () => import('@/components/CommentItem.vue'))
Vue.component('CommentInput', () => import('@/components/CommentInput.vue'))
Vue.component('Numbox', Numbox)
Vue.use(Lazyload)
// defalut install
// 图片缩略图
Vue.use(VuePreview)

// 过滤器
import moment from 'moment'
Vue.filter('dateFormat', function (dateString, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateString).format(pattern)
})



Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
