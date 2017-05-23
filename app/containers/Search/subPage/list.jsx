import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {getSearchData} from '../../../fetch/search/search'
import ListComponent from '../../../components/List/List'
// import './style.scss'
import LoadMore from '../../../components/LoadMore/LoadMore'

const initialState = {
    data : [],
    hasMore: false, //是否还有下一页数据
    isLoadingMore:false, //加载更多还是加载中...
    page:0
};

class List extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState;
    }
    render(){
        return (
            <div class="home-list">
                {/*加载列表数据*/}
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data}></ListComponent>
                    : <div>加载中...</div>
                }
                {/*是否还有下一页*/}
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreFn.bind(this)}/>
                    : ''
                }
            </div>
        )
    }
    componentDidMount(){
        //获取首页数据
        this.loadFirstPageData();
    }
    componentDidUpdate(prevProps,prevState){
        if ( this.props.keyword == prevProps.keyword ) {
            return;
        } else {
            this.setState(initialState);
            this.loadFirstPageData();
        }
    }
    //获取首页数据
    loadFirstPageData(){
        const cityName = this.props.userinfo.cityName;
        const page = this.state.page;
        const category = this.props.category;
        const keyword = this.props.keyword || '';
        const result = getSearchData(0,cityName,category,keyword);
        this.resultHandle(result);
    }
    //加载其他页数据
    loadMoreFn(){
        //加载中..
        this.setState({
            isLoadingMore:true
        });
        setTimeout(()=>{
            console.log(this);
            const cityName = this.props.userinfo.cityName;
            const page = this.state.page;
            const category = this.props.category;
            const keyword = this.props.keyword || '';
            const result = getSearchData(page,cityName,category,keyword);
            const hasMore = page>=5 ? false : true;
            
            this.resultHandle(result,hasMore);
            
            //加载更多
            this.setState({
                isLoadingMore:false
            });
        },500)

    }
    resultHandle(result,hasMore=true){
        result.then(res=>{
            return res.json()
        }).then(json=>{
            let data = json.data;
            let page = this.state.page;
            this.setState({
                data:this.state.data.concat(data),
                hasMore:hasMore,
                page:page+1
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

