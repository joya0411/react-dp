import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/Header.scss';

class Header extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
            <div className="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                {this.props.title}
            </div>
        )
	}
    clickHandle(){
        const history = this.props.history;
        const backRouter = this.props.backRouter;
        if (backRouter){
            history.push('/');
        } else {
            window.history.back();
        }
    }
}

export default Header;