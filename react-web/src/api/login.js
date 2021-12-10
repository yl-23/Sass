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
// 注册获取验证码
export function registerCodeApi(data) {
    return servies({
      url: '/console/sendPhoneCaptcha',
      method: 'get',
      params: data
    })
  }
// 判断当前手机号是否开户
export function havePhoneApi(data) {
    return servies({
      url: '/console/phone_register_state',
      method: 'get',
      params: data
    })
  }
  // 注册发送短信
export function nextStepApi(data) {
    return servies({
      url: '/console/wechat/next_step',
      method: 'post',
      params: data
    })
  }