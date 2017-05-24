import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import Category from '../../components/Category/Category';
import Ad from './subPage/ad';
import List from './subPage/list';

class Home extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div>
				<HomeHeader cityName={this.props.userinfo.cityName} history={this.props.history}></HomeHeader>
				<Category/>
				<div className="border10"></div>
				<Ad/>
				<div className="border10"></div>
				<List cityName={this.props.userinfo}/>
			</div>
		)
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
)(Home)