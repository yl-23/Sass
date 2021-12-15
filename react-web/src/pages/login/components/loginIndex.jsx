import React, { Component } from 'react';
import { Input ,Button,message } from 'antd';
import {captchaApi,loginApi} from '../../../api/login'
import loginWechat from '../../../assets/img/login_wechat.svg'
import '../../../assets/css/login.css'
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
        password: 'c4318372f98f4c46ed3a32c16ee4d7a76c832886d887631c0294b3314f34edf1'
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
        const { userName, password, code } =
			this.state
		const _checked =
			!!userName && !!password && !!code 
        return (
                <div className='login-main'>
                  <div className='login'>登录</div>
                  <div className='login-msg'>
                      <div className='box'>
                        <Input  placeholder='账号'  value={this.state.userName}  onChange={(e)=>{
                          this.handelChange(e,'userName')
                        }}/>
                      </div>
                      <div className='box'>
                        <Input.Password  placeholder='密码' value={this.state.password} onChange={(e)=>{
                          this.handelChange(e,'password')
                        }}/>
                      </div>
                      <div className='box'>
                        <Input  placeholder='验证码' className='code' value={this.state.code} onChange={(e)=>{
                          this.handelChange(e,'code')
                        }}/>
                        <img src={this.state.codeUrl} alt="" onClick = {this.getCaptcha}/>
                      </div>
                      <div className='box'>
                        <Button type="primary" onClick={this.bindClick} disabled={!_checked}>登录系统</Button>
                      </div>
                  </div>
                  <div className='regist-info' onClick={()=>{
                            this.props.history.push('/register')
                        }}>没有账号?申请试用</div>
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
        )
    }
}
export default Login
