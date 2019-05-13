import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 样式
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.css'
import '@/assets/style/reset.scss'
// 组件
import { Header, Swipe, SwipeItem, Cell, Badge, Button } from 'mint-ui'
import { Lazyload } from 'mint-ui';
import VuePreview from 'vue-preview'

Vue.component(Badge.name, Badge);
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Cell.name, Cell)
Vue.component('CommentItem', () => import('@/components/CommentItem.vue'))
Vue.component('CommentInput', () => import('@/components/CommentInput.vue'))

Vue.use(Lazyload)
// defalut install
// 图片缩略图
Vue.use(VuePreview)
// with parameters install
// Vue.use(preview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })

// 过滤器
import moment from 'moment'
Vue.filter('dateFormat', function(dateString, pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dateString).format(pattern)
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
