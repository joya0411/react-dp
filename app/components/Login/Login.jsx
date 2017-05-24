import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/Login.scss';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username : ''
        }
	}
	render(){
		return (
            <div className="login-container">
                <div className="login-container-inner">
                    <div className="input-container">
                        <i className="icon-tablet"></i>
                        <input 
                            type="text"
                            placeholder="请输入手机号"
                            onChange={this.changeHandle.bind(this)}
                        />
                    </div>
                    <div className="input-container">
                        <i className="icon-key"></i>
                        <input type="text" placeholder="输入验证码"/>
                        <button>发送验证码</button>
                    </div>
                    <button className="login-btn" onClick={this.clickHandle.bind(this)}>登录</button>
                </div>
            </div>
        )
	}
    changeHandle(e){
        this.setState({
            username:e.target.value
        })
    }
    clickHandle(){
        const username = this.state.username;
        this.props.loginHandle(username);
    }
}

export default Login;