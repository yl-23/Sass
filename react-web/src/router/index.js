import {Home} from '../pages/index'
import loginIndex from '../pages/login/index'
const routes = [
    {
        path:'/',
        component:loginIndex
    },
	{
		path: '/home',
		component: Home,
	}
]
export default routes
