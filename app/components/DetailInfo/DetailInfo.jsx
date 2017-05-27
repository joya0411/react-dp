import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './scss/DetailInfo.scss';
import Star from '../Star/Star';

class DetailInfo extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
        const data = this.props.data;
		return (
            <div className="detail-info-wrap">
                <div className="info-container">
                    <div className="info-img f-fl">
                        <img src={data.img}/>
                    </div>
                    <div className="info-content">
                        <h3>{data.title}</h3>
                        <div className="star-container">
                            <Star star={data.star}/>
                            <span className="price">￥{data.price}</span>
                        </div>
                        <div className="subtitle">{data.subTitle}</div>
                    </div>
                </div>
                {/* 设置 innerHTML */}
                <p dangerouslySetInnerHTML={{__html:data.desc}} className="info-desc"></p>
            </div>
        )
	}
}

export default DetailInfo;