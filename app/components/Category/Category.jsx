import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';

import './scss/Category.scss';

import {
  HashRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class Category extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index:0
        };
    }
    render(){
        const swipeOptions = {
            auto:2500,
            callback:(index)=>{
                this.setState({
                    index:index
                });
            }
        };
        return(
            <div className="home-category">
                <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                    <div className="carousel-item">
                        <ul>
                            <Link to="/search/meishi">
                                <li>
                                    <img src={require('./images/meishi.png')} className="carousel-icon"/>
                                    <div className="carousel-name">美食</div>
                                </li>
                            </Link>
                            <Link to="/search/maoyan">
                                <li>
                                    <img src={require('./images/dp_wx_maoyan_icon.png')} className="carousel-icon"/>
                                    <div className="carousel-name">猫眼电影</div>
                                </li>
                            </Link>
                            <Link to="/search/jiudian">
                                <li>
                                    <img src={require('./images/jiudian.png')} className="carousel-icon"/>
                                    <div className="carousel-name">酒店</div>
                                </li>
                            </Link>
                            <Link to="/search/xiuxianyule">
                                <li>
                                    <img src={require('./images/xiuxianyule.png')} className="carousel-icon"/>
                                    <div className="carousel-name">休闲娱乐</div>
                                </li>
                            </Link>
                            <Link to="/search/waimai">
                                <li>
                                    <img src={require('./images/waimai.png')} className="carousel-icon"/>
                                    <div className="carousel-name">外卖</div>
                                </li>
                            </Link>
                            <Link to="/search/huoguo">
                                <li>
                                    <img src={require('./images/huoguo.png')} className="carousel-icon"/>
                                    <div className="carousel-name">火锅</div>
                                </li>
                            </Link>
                            <Link to="/search/liren">
                                <li>
                                    <img src={require('./images/liren.png')} className="carousel-icon"/>
                                    <div className="carousel-name">丽人</div>
                                </li>
                            </Link>
                            <Link to="/search/zhoubianyou">
                                <li>
                                    <img src={require('./images/zhoubianyou.png')} className="carousel-icon"/>
                                    <div className="carousel-name">周边游</div>
                                </li>
                            </Link>
                            <Link to="/search/ktv">
                                <li>
                                    <img src={require('./images/ktv.png')} className="carousel-icon"/>
                                    <div className="carousel-name">KTV</div>
                                </li>
                            </Link>
                            <Link to="/search/jiehun">
                                <li>
                                    <img src={require('./images/jiehun.png')} className="carousel-icon"/>
                                    <div className="carousel-name">婚纱摄影</div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul>
                            <Link to="/search/community_new">
                                <li>
                                    <img src={require('./images/community_new.png')} className="carousel-icon"/>
                                    <div className="carousel-name">生活服务</div>
                                </li>
                            </Link>
                            <Link to="/search/jingguan">
                                <li>
                                    <img src={require('./images/jingguan.png')} className="carousel-icon"/>
                                    <div className="carousel-name">景点</div>
                                </li>
                            </Link>
                            <Link to="/search/aiche">
                                <li>
                                    <img src={require('./images/aiche.png')} className="carousel-icon"/>
                                    <div className="carousel-name">爱车</div>
                                </li>
                            </Link>
                            <Link to="/search/jianshen">
                                <li>
                                    <img src={require('./images/jianshen.png')} className="carousel-icon"/>
                                    <div className="carousel-name">运动健身</div>
                                </li>
                            </Link>
                            <Link to="/search/icongouwu135">
                                <li>
                                    <img src={require('./images/icongouwu135.png')} className="carousel-icon"/>
                                    <div className="carousel-name">购物</div>
                                </li>
                            </Link>
                            <Link to="/search/qinzi">
                                <li>
                                    <img src={require('./images/qinzi.png')} className="carousel-icon"/>
                                    <div className="carousel-name">亲子</div>
                                </li>
                            </Link>
                            <Link to="/search/zhuangxiu">
                                <li>
                                    <img src={require('./images/zhuangxiu.png')} className="carousel-icon"/>
                                    <div className="carousel-name">家装</div>
                                </li>
                            </Link>
                            <Link to="/search/jxpx">
                                <li>
                                    <img src={require('./images/jxpx.png')} className="carousel-icon"/>
                                    <div className="carousel-name">学习培训</div>
                                </li>
                            </Link>
                            <Link to="/search/yiliao">
                                <li>
                                    <img src={require('./images/yiliao.png')} className="carousel-icon"/>
                                    <div className="carousel-name">医疗健康</div>
                                </li>
                            </Link>
                            <Link to="/search/daojia">
                                <li>
                                    <img src={require('./images/daojia.png')} className="carousel-icon"/>
                                    <div className="carousel-name">到家</div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul>
                            <Link to="/search/xiaochikuaican">
                                <li>
                                    <img src={require('./images/xiaochikuaican.png')} className="carousel-icon"/>
                                    <div className="carousel-name">小吃快餐</div>
                                </li>
                            </Link>
                            <Link to="/search/zizhucan">
                                <li>
                                    <img src={require('./images/zizhucan.png')} className="carousel-icon"/>
                                    <div className="carousel-name">自助餐</div>
                                </li>
                            </Link>
                            <Link to="/search/rihanliaoli">
                                <li>
                                    <img src={require('./images/rihanliaoli.png')} className="carousel-icon"/>
                                    <div className="carousel-name">日本菜</div>
                                </li>
                            </Link>
                            <Link to="/search/meifa">
                                <li>
                                    <img src={require('./images/meifa.png')} className="carousel-icon"/>
                                    <div className="carousel-name">美发</div>
                                </li>
                            </Link>
                            <Link to="/search/meijia">
                                <li>
                                    <img src={require('./images/meijia.png')} className="carousel-icon"/>
                                    <div className="carousel-name">美甲美睫</div>
                                </li>
                            </Link>
                            <Link to="/search/meirong">
                                <li>
                                    <img src={require('./images/meirong.png')} className="carousel-icon"/>
                                    <div className="carousel-name">美容SPA</div>
                                </li>
                            </Link>
                            <Link to="/search/shoushen">
                                <li>
                                    <img src={require('./images/shoushen.png')} className="carousel-icon"/>
                                    <div className="carousel-name">瘦身纤体</div>
                                </li>
                            </Link>
                            <Link to="/search/qinzisheying">
                                <li>
                                    <img src={require('./images/qinzisheying.png')} className="carousel-icon"/>
                                    <div className="carousel-name">亲子摄影</div>
                                </li>
                            </Link>
                            <Link to="/search/qinziyoule">
                                <li>
                                    <img src={require('./images/qinziyoule.png')} className="carousel-icon"/>
                                    <div className="carousel-name">亲子游乐</div>
                                </li>
                            </Link>
                            <Link to="/search/more">
                                <li>
                                    <img src={require('./images/more.png')} className="carousel-icon"/>
                                    <div className="carousel-name">全部分类</div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="circles">
                    <li className={"circle "+(this.state.index === 0 ? "on" : "")}></li>
                    <li className={"circle "+(this.state.index === 1 ? "on" : "")}></li>
                    <li className={"circle "+(this.state.index === 2 ? "on" : "")}></li>
                </ul>
            </div>
            
        )
    }
}

export default Category;