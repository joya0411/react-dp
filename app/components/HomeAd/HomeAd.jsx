import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/HomeAd.scss';

class HomeAd extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div className="home-ad">
                <h2 className="f-clearfix">
                    <span className="titBest f-fl">超值特惠</span>
                    <div className="more f-fr">更多优惠</div>
                    <div className="arrowRight"></div>
                </h2>
                <ul>
                    {
                        this.props.data.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <a href={item.link}>
                                        <img src={item.img} className="pic"/>
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