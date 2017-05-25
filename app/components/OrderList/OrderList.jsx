import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from './Item/Item';

class OrderList extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
        const data = this.props.data;
		return (
            <div>
                {
                    data.map((item,index)=>{
                        return <Item key={index} item={item}/>
                    })
                }
            </div>
        )
	}
}

export default OrderList;