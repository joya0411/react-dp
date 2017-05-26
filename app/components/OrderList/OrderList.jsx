import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from './Item/Item';
import './scss/OrderList.scss';

class OrderList extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
        const data = this.props.data;
		return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                <div>
                    {
                        data.map((item,index)=>{
                            return <Item key={index} item={item} submitComment={this.props.submitComment}/>
                        })
                    }
                </div>
            </div>
        )
	}
}

export default OrderList;