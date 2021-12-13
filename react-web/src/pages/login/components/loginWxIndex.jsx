import React, { Component } from 'react'
import { Button } from 'antd'
import { wechartApi } from '../../../api/login'
import '../../../assets/css/login.css'
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
			<div className="login-main login-qrcode">
				<iframe
					title="微信登录"
					src={this.state.url}
					id="loginCode"
					className="login-iframe"
				></iframe>
				<Button
					type="link"
					className="login-back"
					onClick={() => {
						this.props.history.push('/login')
					}}
				>
					返回密码登录
				</Button>
			</div>
		)
	}
}
export default LoginWx
