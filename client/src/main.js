//功能组件导入
import Vue from 'vue'
import VueRouter from 'vue-router'

//组件导入
import app from '../src/components/app.vue'

Vue.use(VueRouter)

const vm = new Vue ({
	el: '#app',
	render: c => c(app)
})