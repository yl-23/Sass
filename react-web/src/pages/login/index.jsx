import React, { Component } from 'react';
import { Button } from 'antd';
import {loginInfoApi} from '../../api/login'
class Login extends Component {
    bindClick(){
        loginInfoApi().then((res)=>{
            
        })
      }
    render () {
        return (
            <div>
                <Button type="primary" onClick = {this.bindClick}>登录</Button>
            </div>
        )
    }
}
export default Login
