import Vue from 'vue'
import Router from 'vue-router'
import basetop from "../components/basetop"

Vue.use(Router)

Vue.config.productionTip = false
export default new Router({
	routes: [
		{
			path: '/',
			name: 'index.html',
			component: basetop
		}
	]
})
