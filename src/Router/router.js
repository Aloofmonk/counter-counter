import {createRouter, createWebHistory} from 'vue-router'
import About from '../components/About'
import MyCounter from '../components/MyCounter'
import NotFoundPage from '../components/NotFoundPage'

const routes = [
	{
		path: '/',
		name: 'About',
		component: About,
	},
	{
		path: '/counter',
		name: 'MyCouter',
		component: MyCounter,
		
	},
	{
		path: '/:pathMatch(.*)',
		name: 'NotFoundPage',
		component: NotFoundPage,
	},
	// { 
	// 	path: '/:pathMatch(.*)',
	// 	redirect: "/404" 
	// },
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL), 
	routes,
})

export default router