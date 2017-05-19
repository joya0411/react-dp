import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { hashHistory } from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import Header from '../../components/Header/Header';
import CurrentCity from '../../components/CurrentCity/CurrentCity';
import CityList from '../../components/CityList/CityList';
import { CITYNAME } from '../../config/localStoreKey';
import LocalStore from '../../util/localStore';

class City extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div>
				<Header title="选择城市"/>
				<CurrentCity cityName={this.props.userinfo.cityName}/>
				<CityList changeCity={this.changeCity.bind(this)}/>
			</div>
		)
	}
	componentDidMount(){
		// console.log('componentDidMount');
		// console.log(this.props.userinfo);
		// console.log(this.props.userInfoActions);
	}
	changeCity(newCityName){

		// 修改 redux
		this.props.userInfoActions.update({
			cityName:newCityName
		});
		// 修改 cookie
		LocalStore.setItem(CITYNAME,newCityName);
		// 跳转页面
		window.history.back();
		
	}
}

// -------------------redux react 绑定--------------------

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
)(City)