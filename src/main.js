import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 样式
import 'mint-ui/lib/style.css'
import '@/assets/style/reset.scss'
import 'font-awesome/css/font-awesome.css'
// 组件
import { Header, Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
