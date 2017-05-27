import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './scss/Item.scss';
import Star from '../../Star/Star';

class Item extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState:0, // commentState  0-未评价 1-评价中 2-已评价
            stars:{}
        };
	}
	render(){
        const data = this.props.item;
		return (
            <div className="order-item-container">
                <div>
                    <div className="pic">
                        <img src={data.img}/>
                    </div>
                    <div className="content">
                        <p>商户:<span>{data.title}</span></p>
                        <p>数量:<span>{data.count}</span></p>
                        <p>价格:<span>{data.price}</span></p>
                    </div>
                    {
                        this.state.commentState === 0 
                        ? <div className="btn" onClick={this.showComment.bind(this)}>评价</div>
                        : this.state.commentState === 1
                            ? ''
                            : <div className="btn unseleted-btn">已评价</div>
                    }
                </div>
                {
                    this.state.commentState === 1
                    ? <div className="comment-text-container">
                        <textarea className="comment-text" ref="commentText"></textarea>
                        <Star star="0" clickCallback={this.clickCallback.bind(this)}/>
                        <div class="btn-group">
                            <div className="btn" onClick={this.submitComment.bind(this)}>提交</div>
                            <div className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</div>
                        </div>
                    </div>
                    : ''
                }

                    
            </div>

        )
	}
    componentDidMount(){
        const commentState = this.props.item.commentState;
        this.setState({
            commentState:commentState
        })
    }
    // 显示评价框
    showComment(){
        this.setState({
            commentState:1
        });
    }
    // 取消评价
    hideComment(){
        this.setState({
            commentState:0
        })
    }
    //提交评价
    submitComment(){
        const id = this.props.item.id;
        const commentText = this.refs.commentText.value.trim();
        const stars = this.state.stars;
        const star = stars[id] || 0;

        this.props.submitComment(id,commentText,star,this.commentOk.bind(this));

    }
    //评价成功
    commentOk(){
        this.setState({
            commentState:2
        });
    }
    //点击星星callback
    clickCallback(star){
        const id = this.props.item.id;
        let stars = this.state.stars;
        stars[id] = star;
        this.setState({
            star: stars
        });
    }
}

export default Item;