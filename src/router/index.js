import Vue from 'vue';
import VueRouter from 'vue-router';
// 安装路由
Vue.use(VueRouter)
// 路由懒加载
const Home= () =>import('views/Home/Home.vue')
const Profiles= () =>import('views/Profile/Profiles')
const Aboute= () =>import( 'views/Aboute/Aboute')
const Chart= () =>import ('views/Chart/Chart')
const routes=[
	{
		path:'',
		redirect:Home
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/aboute',
		component:Aboute
	},
	{
		path:'/chart',
		component:Chart
	},
	{
		path:'/profiles',
		component:Profiles
	},
	
]
// 创建路有对象
const router= new VueRouter({
	routes,
	mode:'history'
})
// 到出
export default router;