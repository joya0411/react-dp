import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import SearchList from './subPage/list';

class Search extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		let category = this.props.match.params.category.trim();
		let keywordArr = this.props.location.pathname.split('/');
		let keyword = keywordArr.pop();
		return (
			<div>
				<SearchHeader keyword={keyword}/>
				<SearchList category={category} keyword={keyword}/>
			</div>
		)
	}
}

export default Search;