import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from '../../components/HomeHeader/';
import Category from '../../components/Category/';

class Home extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div>
				<HomeHeader></HomeHeader>
				<Category></Category>
			</div>
		)
	}
}

export default Home;