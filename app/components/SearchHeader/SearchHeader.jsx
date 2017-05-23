import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/SearchHeader.scss';
import SearchInput from '../SearchInput/SearchInput'

class SearchHeader extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
            <div className="search-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <SearchInput value={this.props.keyword} enterHandle={this.enterHandle.bind(this)}/>
            </div>
        )
	}
    clickHandle(){
        //返回首页
        location.href = location.origin;
    }
    enterHandle(value){
        let val = location.origin + '/#/search/all/' + encodeURIComponent(value);
		location.href = val;
    }
}

export default SearchHeader;