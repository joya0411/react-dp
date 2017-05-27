import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import UserInfo from '../../components/UserInfo/UserInfo';
import OrderList from './subPage/OrderList';

class User extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const userinfo = this.props.userinfo;
		return (
			<div>
				<Header title="用户主页" backRouter="/home" history={this.props.history}/>
				<UserInfo cityName={userinfo.cityName} username={userinfo.username}/>
				<div className="border10"></div>
				<OrderList username={userinfo.username}/>
			</div>
			
		)
	}
	componentDidMount(){
		const username = this.props.userinfo.username;
		const history = this.props.history;
		if (!username){
			history.push('/');
		}
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
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)