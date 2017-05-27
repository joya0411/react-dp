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
		const category = this.props.match.params.category;
		const keyword = this.props.match.params.keyword;
		return (
			<div>
				<SearchHeader keyword={keyword} history={this.props.history}/>
				<SearchList category={category} keyword={keyword}/>
			</div>
		)
	}
}

export default Search;