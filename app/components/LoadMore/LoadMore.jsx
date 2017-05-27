import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './scss/LoadMore.scss';

class LoadMore extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
            <div className="load-more" ref="loadMore">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
        
	}
    loadMoreHandle(){
        this.props.loadMoreFn();
    }
    componentDidMount(){
        let timeoutId = null;
        let loadMore = this.refs.loadMore;

        window.addEventListener('scroll',function(){
            //防止多次触发scroll事件
            clearTimeout(timeoutId);
            timeoutId = setTimeout(()=>{
                let winHeight = window.screen.height;
                let loadMoreHeight = loadMore.getBoundingClientRect().top;
                if ( loadMoreHeight && loadMoreHeight < winHeight){
                    this.props.loadMoreFn();
                }
            },50);
        }.bind(this),false);


    }
}

export default LoadMore;