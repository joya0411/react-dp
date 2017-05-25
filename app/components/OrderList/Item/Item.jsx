import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/Item.scss';

class Item extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
        const data = this.props.item;
        console.log(data);
		return (
            <div>
                {data.title}
            </div>
        )
	}
}

export default Item;