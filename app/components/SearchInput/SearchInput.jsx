import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/SearchInput.scss';

class SearchInput extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
			value: this.props.value || ''
		}
	}
	render(){
		return (
            <div className="search-container">
                <i className="icon-search"></i>
                 <input type="text" placeholder="输入商户名、地点" value={this.state.value} onChange={this.changeHandle.bind(this)} onKeyUp={this.keyUpHandle.bind(this)}/>
            </div>
        )
	}
    changeHandle(e){
		var val = e.target.value;
		this.setState({
			value:val
		});
	}
	keyUpHandle(e){
		if (e.keyCode != 13) return;

		this.props.enterHandle(e.target.value);
	}
}

export default SearchInput;