import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/UserInfo.scss';

class UserInfo extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    <span>{this.props.cityName}</span>
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    <span>{this.props.username}</span>
                </p>
            </div>
        )
	}
}

export default UserInfo;