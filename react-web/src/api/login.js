// 登录
import servies from '../utils/request'
// 登   录
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
  // 获取验证码
export function captchaApi() {
  return servies({
    url: '/console/captcha',
    responseType: 'blob',
    method: 'get'
  })
}
// 企业微信扫码登录
export function wechartApi(data) {
    return servies({
      url: '/console/wechat/loginQrCodeUrl',
      method: 'get',
      params: data
    })
  }