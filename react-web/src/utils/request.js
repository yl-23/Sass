import axios from 'axios'
const servies = axios.create({
	baseURL: '/api',
	withCredentials: true, // 允许携带cookie
})
//接口请求校验
servies.interceptors.request.use(
	(config) => {
		return config
	},
	() => {
		return Promise.reject()
	}
)
// 接口返回校验
servies.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		return Promise.reject(error)
	}
)
export default servies
