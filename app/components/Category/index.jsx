import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';

import './scss/style.scss';

class Category extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div className="carousel-item">
                    <ul>
                        <li>
                            <div className="carousel-icon carousel-icon1"></div>
                            <div className="carousel-name">美食</div>
                        </li>
                        <li>
                            <img src={require('file-loader?publicPath=''!./images/huoguo.png')} className="carousel-icon"/>
                            <div className="carousel-name">美食</div>
                        </li>
                        {/*<li>
                            <img src="components/Category/images/dp_wx_maoyan_icon.png" className="carousel-icon"/>
                            <div className="carousel-name">美食</div>
                        </li>*/}
                    </ul>
                </div>
                <div>PANE 2</div>
                <div>PANE 3</div>
            </ReactSwipe>
        )
    }
}

export default Category;