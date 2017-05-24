import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/BuyAndStore.scss';

class BuyAndStore extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
            <div className="buy-store-container">
                {
                    this.props.isStore
                    ? <button className="selected" onClick={this.storeClickHandle.bind(this)}>已收藏</button>
                    : <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
                }
                <button onClick={this.buyClickHandle.bind(this)}>购买</button>
            </div>
        )
	}
    storeClickHandle(){
        this.props.storeHandle();
    }
    buyClickHandle(){
        this.props.buyHandle();
    }
}

export default BuyAndStore;