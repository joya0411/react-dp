import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import RouteMap from '../router/routeMap';
import LocalStore from '../util/localStore';
import {CITYNAME} from '../config/localStoreKey';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			initDone:false
		}
	}
	componentDidMount(){

		//获取位置信息
		let cityName = LocalStore.getItem(CITYNAME);
		if (cityName==null){
			cityName = '上海';
		}

		this.props.userInfoActions.update({
			cityName:cityName
		});

		

		//更改状态
		this.setState({
			initDone:true
		});
	}
	render(){
		return (
			<div>
				{
					this.state.initDone
					? <RouteMap></RouteMap>
					: <div>正在加载...</div>
				}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		userinfo : state.userinfo
	}
}
function mapDispatchToProps(dispatch){
	return {
		userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);