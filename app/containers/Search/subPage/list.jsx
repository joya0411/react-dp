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
        console.log('componentDidMount');
        //获取首页数据
        this.loadFirstPageData();
    }
    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate');
        console.log('===============================');
        // return;
        if ( this.props.keyword == prevProps.keyword ) {
            return;
        } else {
            this.setState(initialState);
            console.log(this.state)
            this.loadFirstPageData();
        }
        
    }
    //获取首页数据
    loadFirstPageData(){
        const cityName = this.props.userinfo.cityName;
        const page = this.state.page;
        const category = this.props.category;
        const keyword = this.props.keyword || '';
        const result = getSearchData(page,cityName,category,keyword);
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
                isLoadingMore:false
            })
        },500)

    }
    hasMoreFn(){
        this.setState({
            hasMore:false
        });
    }
    resultHandle(result){
        //page加1
        const page = this.state.page;
        this.setState({
            page: page+1
        });
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

