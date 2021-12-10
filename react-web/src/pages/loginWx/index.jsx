import React, { Component } from 'react'
import { Button } from 'antd'
import { wechartApi } from '../../api/login'
import logoPic from '../../assets/img/login_logo.svg'
import titleLog from '../../assets/img/login_title.svg'
import loginMore from '../../assets/img/login_more.svg'
import '../../assets/css/login.css'
class LoginWx extends Component {
	constructor(props) {
		super(props)
		this.state = {
			url: '',
		}
	}
	componentDidMount() {
		this.getCode()
	}
	getCode() {
		const data = {
			userType: 'member',
		}
		wechartApi(data).then((res) => {
			this.setState({
				url: res?.data?.data || '',
			})
		})
	}
	render() {
		return (
			<div className="login-container">
				<div className="login-logo">
					<img src={logoPic} alt="" />
				</div>
				<div className="login-content">
					<div className="login-info">
						<div className="login-title">
							<img src={titleLog} alt="" />
							<span className="info-title">SCRM</span>
						</div>
						<div className="login-desc">
							社交化营销服务系统 让数字营销更简单
						</div>
						<div className="login-more">
							<span className="look-more">查看更多</span>
							<img src={loginMore} alt="" />
						</div>
					</div>
					<div className="login-main login-qrcode">
						<iframe
                            title='微信登录'
							src={this.state.url}
							id="loginCode"
							className="login-iframe"
						></iframe>

						<Button type="link" className='login-back' onClick={()=>{
                            this.props.history.push('/login')
                        }}>返回密码登录</Button>
					</div>
				</div>
				<div className="login-footer">
					Copyright ©2021北京天润融通科技股份有限公司All Right Receved
					京ICP备06029233号
				</div>
			</div>
		)
	}
}
export default LoginWx
