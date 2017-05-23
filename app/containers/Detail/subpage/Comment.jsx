import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.scss';
import {getCommentData } from '../../../fetch/detail/detail';
import CommentList from '../../../components/CommentList/CommentList';
import LoadMore from '../../../components/LoadMore/LoadMore';

class Comment extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
            data : [],
            hasMore: false, //是否还有下一页数据
            isLoadingMore:false, //加载更多还是加载中...
            page:0
        };
	}
	render(){
		return (
			<div className="detail-comment-wrap">
				<h2>用户点评</h2>
				{
					this.state.data.length
					? <CommentList data={this.state.data}/>
					: <div>加载中...</div>
				}
				{
					this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreFn.bind(this)}/>
                    : ''
				}
			</div>
		)
	}
	componentDidMount(){
		this.loadFirstPageData();
	}
	// 获取首页数据
	loadFirstPageData(){
		const result = getCommentData(0,this.props.id);
		this.resultHandle(result);
	}
	loadMoreFn(){
		const page = this.state.page;
		this.setState({
			isLoadingMore : true
		});
		setTimeout(()=>{
			const result = getCommentData(page,this.props.id);
			const hasMore = page>=5 ? false : true;
			this.resultHandle(result,hasMore);
			this.setState({
				isLoadingMore:false
			});
		},500);
		
	}
	// 处理数据
	resultHandle(result,hasMore=true){
		result.then(res=>{
			return res.json()
		}).then(json=>{
			const data = json.data;
			const page = this.state.page;
			this.setState({
				hasMore: hasMore,
				data: this.state.data.concat(data),
				page:page+1
			});
			
		})
	}
}

export default Comment;