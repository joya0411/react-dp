import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/HomeHeader.scss';
import {Link} from 'react-router-dom';

import SearchInput from '../SearchInput/SearchInput';

class HomeHeader extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<header className="home-header f-clearfix">
				<div className="home-header-left">
					<Link to="/city">
						<span>{this.props.cityName}</span>
					</Link>
					&nbsp;
					<i className="icon-angle-down"></i>
				</div>
				
				<div className="home-header-middle">
					<SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
				</div>
				<div className="home-header-right">
					<Link to="/login">
						<i className="icon-user"></i>
					</Link>
				</div>
			</header>
			
		)
	}
	enterHandle(value){

		const history = this.props.history;
		console.log('history');
		history.push('/search/all/'+ encodeURIComponent(value));
	}

}

export default HomeHeader;