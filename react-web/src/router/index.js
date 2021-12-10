import {Home,Login, LoginWx,Register} from '../pages/index'
const routes = [
	{
		path: '/home',
		component: Home,
	},
	{
		path: '/login',
		component: Login,
	},
    {
		path: '/loginWx',
		component: LoginWx,
	},
    {
		path: '/register',
		component: Register,
	},
]
export default routes
