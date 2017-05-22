import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {getSearchData} from '../../../fetch/search/search'
import ListComponent from '../../../components/List/List'
// import './style.scss'
import LoadMore from '../../../components/LoadMore/LoadMore'

class List extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data : [],
            hasMore: false, //是否还有下一页数据
            isLoadingMore:false, //加载更多还是加载中...
            page:1
        };
    }
    render(){
        return (
            <div class="home-list">
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data}></ListComponent>
                    : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreFn.bind(this)} page={this.state.page} hasMoreFn={this.hasMoreFn.bind(this)}/>
                    : ''
                }
            </div>
        )
    }
    componentDidMount(){
        //获取首页数据
        this.loadFirstPageData();
    }
    //获取首页数据
    loadFirstPageData(){
        console.log(this.props);
        const cityName = this.props.userinfo.cityName;
        const category = this.props.category;
        const keyword = this.props.keyword || '';
        const result = getSearchData(0,cityName,category,keyword);
        this.resultHandle(result);
    }
    loadMoreFn(){
        this.setState({
            isLoadingMore:true
        });
        setTimeout(()=>{
            const cityName = this.props.userinfo.cityName;
            const page = this.state.page;
            const category = this.props.category;
            const keyword = this.props.keyword || '';
            const result = getSearchData(page,cityName,category,keyword);
            this.resultHandle(result);

            this.setState({
                isLoadingMore:false,
                page: page+1
            })
        },500)

    }
    hasMoreFn(){
        this.setState({
            hasMore:false
        });
    }
    resultHandle(result){
        result.then(res=>{
            return res.json()
        }).then(json=>{
            let data = json.data;
            let hasMore = json.hasMore;
            this.setState({
                data:this.state.data.concat(data),
                hasMore:hasMore
            })
        })
    }
}


// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

