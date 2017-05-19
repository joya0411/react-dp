import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/HomeAd.scss';

class HomeAd extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        let tit = null;
        if ( this.props.type === 'ad' ){
            tit = <span className="titBest f-fl">超值特惠</span>
        } else {
            tit = <span className="titSub f-fl">天天立减</span>
        }
        return (
            <div className="home-ad">
                <h2 className="f-clearfix">
                    {tit}
                    <div className="more f-fr">更多优惠</div>
                    <div className="arrowRight"></div>
                </h2>
                <ul>
                    {
                        this.props.data.map((item,index)=>{
                            let priceDom = null;
                            if (this.props.type === 'ad' ) {
                                priceDom = <div className="price_old">{item.originPrice}</div>
                            } else if ( item.delPrice ){
                                priceDom = <div className="delPrice">{item.delPrice}</div>
                            }

                            return (
                                <li key={index}>
                                    <a href={item.link}>
                                        <img src={item.img} className="pic"/>
                                        <div className="title">{item.title}</div>
                                        <div className="price">
                                            <div className="price_current">{item.price}</div>
                                            {priceDom}
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}

export default HomeAd;