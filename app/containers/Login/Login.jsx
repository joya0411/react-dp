import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'; 
import LoginComponent from '../../components/Login/Login';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking:true
        }
	}
	render(){
		return (
            <div>
                <Header title="登录"/>
                {
                    this.state.checking
                    ? <div>正在登录中...</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
	}
    componentDidMount(){
        // 判断是否已经登录
        this.doCheck();
    }
    doCheck(){
        const userinfo = this.props.userinfo;
        if ( userinfo.username){
            // 已经登录，则跳转到用户主页
            this.goUserPage();
        } else {
            // 未登录，则验证结束
            this.setState({
                checking:false
            })
        }
    }
    // 处理登录成功之后的事情
    loginHandle(username){
        const history = this.props.history;
        // 保存用户名 - 修改 redux
        let userinfo = this.props.userinfo;
        userinfo.username = username;
		this.props.userInfoActions.update(userinfo);

        const router = this.props.match.params.router;
        if (router) {
            // 跳转到指定的页面,从哪里来回哪里去
            history.push( decodeURIComponent(router) )
        } else {
            // 已经登录，则跳转到用户主页
            this.goUserPage();
        }
    }
    goUserPage(){
        const history = this.props.history;
        history.push('/User');
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)