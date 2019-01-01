import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
//组件导入
import app from '../src/components/app.vue'
import 'mint-ui/lib/style.css' //特别注意在使用mint-ui时样式文件需要单独引入

const vm = new Vue ({
	el: '#app',
	render: c => c(app)
})