import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getOrderListData } from '../../../fetch/user/orderlist';
import OrderListComponent from '../../../components/OrderList/OrderList';

class OrderList extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[]
        }
	}
	render(){
		return (
            <div>
                {
                    this.state.data
                    ? <OrderListComponent data={this.state.data}/>
                    : <div>加载中...</div>
                }
            </div>
        )
	}
    componentDidMount(){
        const username = this.props.username;
        if (username){
            this.loadOrderList(username);
        }
    }
    loadOrderList(username){
        const result = getOrderListData(username);
        result.then(res=>{
            return res.json()
        }).then(json=>{
            this.setState({
                data:json
            });
        })
    }
}

export default OrderList;