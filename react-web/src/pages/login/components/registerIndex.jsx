import React, { Component } from 'react'
import { Input, Button, message, Checkbox } from 'antd'
import { registerCodeApi, havePhoneApi, nextStepApi } from '../../../api/login'
import '../../../assets/css/login.css'
class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			enterpriseName: '',
			name: '',
			phone: '',
			phoneCaptcha: '',
			fromWhere: '',
			fromUrl: '',
			checked: false,
			disabled: true,
		}
		this.bindClick = this.bindClick.bind(this)
		this.getCaptcha = this.getCaptcha.bind(this)
		this.handelChange = this.handelChange.bind(this)
	}
	// 注册
	bindClick() {
		const data = {
			enterpriseName: this.state.enterpriseName,
			name: this.state.name,
			phone: this.state.phone,
			phoneCaptcha: this.state.phoneCaptcha,
			fromWhere: '其他渠道',
			fromUrl: '',
		}
		if (!this.state.checked)
			return message.warning('请勾选《微藤用户协议》')
		nextStepApi(data).then((res) => {
			if (res.data.status === 0) {
				message.success('注册成功')
			}
		})
	}
	//获取验证码
	getCaptcha() {
		if (!this.state.phone) return message.warning('请输入手机号')
		const data = {
			phone: this.state.phone,
		}
		const reg = /^1[0123456789][0-9]{9}$/
		if (reg.test(this.state.phone)) {
			havePhoneApi(data).then((res) => {
				if (res.data.data) {
					message.error('该手机号已注册微藤账号，请勿重复注册')
				} else {
					registerCodeApi(data).then((res) => {
						if (res.data.status === 0) {
							message.success('发送成功,请注意查收')
						}
					})
				}
			})
		} else {
			message.error('请输入正确的手机号')
		}
	}
	//赋值
	handelChange(event, data) {
		this.setState({
			[data]: event.target.value,
		})
	}
	onChange(e) {
		this.setState({
			checked: e.target.checked,
		})
	}
	render() {
		const { enterpriseName, name, phone, phoneCaptcha, checked } =
			this.state
		const _checked =
			!!enterpriseName && !!name && !!phone && !!phoneCaptcha && !!checked
		return (
			<div className="login-main">
				<div className="login">申请试用</div>
				<div className="login-msg register-content">
					<div className="box">
						<Input
							placeholder="公司名称"
							value={this.state.enterpriseName}
							onChange={(e) => {
								this.handelChange(e, 'enterpriseName')
							}}
						/>
					</div>
					<div className="box">
						<Input
							placeholder="联系人姓名"
							value={this.state.name}
							onChange={(e) => {
								this.handelChange(e, 'name')
							}}
						/>
					</div>
					<div className="box">
						<Input
							placeholder="联系人电话"
							value={this.state.phone}
							onChange={(e) => {
								this.handelChange(e, 'phone')
							}}
						/>
					</div>
					<div className="box">
						<Input
							placeholder="验证码"
							className="code"
							value={this.state.phoneCaptcha}
							onChange={(e) => {
								this.handelChange(e, 'phoneCaptcha')
							}}
						/>
						<Button onClick={this.getCaptcha}>获取验证码</Button>
					</div>
					<div className="box">
						<Button
							type="primary"
							onClick={this.bindClick}
							disabled={!_checked}
						>
							提交
						</Button>
					</div>
					<div className="box agreement">
						<Checkbox
							checked={this.state.checked}
							onChange={(e) => this.onChange(e)}
						></Checkbox>
						<span>已阅读并同意</span>
						<span className="user-agreement">《微藤用户协议》</span>
					</div>
				</div>
				<div className="register-footer">
					<span className="have-account">已有账号？</span>
					<span
						className="have-login"
						onClick={() => {
							this.props.history.push('/login')
						}}
					>
						立即登录
					</span>
				</div>
			</div>
		)
	}
}
export default Register
