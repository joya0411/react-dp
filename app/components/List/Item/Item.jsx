import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/Item.scss';
import {Link} from 'react-router-dom';

class Item extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		let data = this.props.data;
		return (
            <div className="list-item">
				<Link to={"/detail/" + data.id}>
					<div className="item-img">
						<img src={data.img}/>
					</div>
					<div className="item-content">
						<div className="item-content-tit f-clearfix">
							<h3 className="tit f-fl">{data.title}</h3>
							<span className="distance f-fr">{data.distance}</span>
						</div>
						<p className="item-content-subTitle">{data.subTitle}</p>
						<div className="item-content-price f-clearfix">
							<span className="price f-fl">{data.price}</span>
							<span className="num f-fr">已售{data.mumber}</span>
						</div>
					</div>
				</Link>
			</div>
        )
	}
}

export default Item;