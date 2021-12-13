import React, { Component } from 'react'
import logoPic from '../../assets/img/login_logo.svg'
import titleLog from '../../assets/img/login_title.svg'
import loginMore from '../../assets/img/login_more.svg'
import '../../assets/css/login.css'
import { Login, LoginWx, Register } from '../index'
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
class loginCom extends Component {
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
					<Router>
						<Switch>
							<Route path="/login" component={Login} />
							<Route path="/loginWx" component={LoginWx} />
							<Route path="/register" component={Register} />
							<Redirect to={{ pathname: '/login' }} />          
						</Switch>
					</Router>
				</div>
				<div className="login-footer">
					Copyright ©2021北京天润融通科技股份有限公司All Right Receved
					京ICP备06029233号
				</div>
			</div>
		)
	}
}
export default loginCom
