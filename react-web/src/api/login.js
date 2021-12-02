// 登录
import servies from '../utils/request'
// 登录
export function loginApi(arg, data) {
    return servies({
      url: '/console/login?captcha=' + arg,
      method: 'post',
      datatype: 'json',
      data
    })
  }
// 获取当前登录人信息
export function loginInfoApi() {
    return servies({
      url: '/console/login_info',
      method: 'get'
    })
  }