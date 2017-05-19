import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/HomeHeader.scss';

class HomeHeader extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<header className="home-header f-clearfix">
				<div className="home-header-left">
					<span>上海</span>
					&nbsp;
					<i className="icon-angle-down"></i>
				</div>
				
				<div className="home-header-middle">
					<div className="search-container">
						<i className="icon-search"></i>
						<input type="text" placeholder="输入商户名、地点"/>
					</div>
				</div>
				<div className="home-header-right">
					<i className="icon-user"></i>
				</div>
			</header>
			
		)
	}
}

export default HomeHeader;