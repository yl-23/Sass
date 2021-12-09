import React, { Component } from 'react';
import { Input ,Button,message } from 'antd';
import {captchaApi,loginApi} from '../../api/login'
import logoPic from '../../assets/img/login_logo.svg'
import titleLog from '../../assets/img/login_title.svg'
import loginMore from '../../assets/img/login_more.svg'
import loginWechat from '../../assets/img/login_wechat.svg'
import './index.css'
class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        codeUrl:'',
        userName:'',
        password:'',
        code:''
      }
      this.getCaptcha = this.getCaptcha.bind(this)
      this.bindClick = this.bindClick.bind(this)
      this.handelChange = this.handelChange.bind(this)
    }
    componentDidMount() {
      this.getCaptcha()
    }
    // 登录
    bindClick(){
      const data={
        name: this.state.userName.split('@')[0],
        enterpriseId: this.state.userName.split('@')[1],
        password: 'caab1c9da936f1818b1463a771993f4135bfdb18f8f37830812c90334c160654'
      }
      loginApi(this.state.code,data).then((res)=>{
            if(res.data.status===0){
              message.success('登录成功');
              this.props.history.push('/home')
            }
        })
    };
    //获取验证码
    getCaptcha(){
      captchaApi().then((res)=>{
        this.setState({
          codeUrl: window.URL.createObjectURL(res.data)
        });
      })
    };
    //赋值
    handelChange(event,data){
      if(data==='userName'){
        this.setState({userName:event.target.value})
      }else if(data==='password'){
        this.setState({password:event.target.value})
      }else{
        this.setState({code:event.target.value})
      }
    
    }
    render () {
        return (
            <div className='login-container'>
              <div className='login-logo'>
                <img src={logoPic} alt="" />
              </div>
              <div className='login-content'>
                <div className='login-info'>
                  <div className='login-title'>
                      <img src={titleLog} alt="" />
                      <span className='info-title'>SCRM</span>
                  </div>
                  <div className='login-desc'>社交化营销服务系统 让数字营销更简单</div>
                  <div className='login-more'>
                    <span className='look-more'>查看更多</span>
                    <img src={loginMore} alt="" />
                  </div>
                </div>
                <div className='login-main'>
                  <div className='login'>登录</div>
                  <div className='login-msg'>
                      <div className='box'>
                        <Input  prefix='账号'  value={this.state.userName}  onChange={(e)=>{
                          this.handelChange(e,'userName')
                        }}/>
                      </div>
                      <div className='box'>
                        <Input.Password  prefix='密码' value={this.state.password} onChange={(e)=>{
                          this.handelChange(e,'password')
                        }}/>
                      </div>
                      <div className='box'>
                        <Input  prefix='验证码' className='code' value={this.state.code} onChange={(e)=>{
                          this.handelChange(e,'code')
                        }}/>
                        <img src={this.state.codeUrl} alt="" onClick = {this.getCaptcha}/>
                      </div>
                      <div className='box'>
                        <Button type="primary" onClick={this.bindClick}>登录系统</Button>
                      </div>
                  </div>
                  <div className='regist-info'>没有账号?申请试用</div>
                  <div className='other-login'>
                    <span className='line'></span>
                    <span className='info'>其他登录方式</span>
                    <span className='line'></span>
                  </div>
                  <div className='login-wechat'>
                    <img src={loginWechat} alt="" onClick={()=>{
                          this.props.history.push('/loginWx')
                    }}/>
                  </div>
                </div>
              </div>
              <div className='login-footer'>Copyright ©2021北京天润融通科技股份有限公司All Right Receved 京ICP备06029233号</div>
            </div>
        )
    }
}
export default Login
