import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'
import ListComponent from '../../../components/List/List'
import './style.scss'
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
                <h2 className="home-list-tite">猜你喜欢</h2>
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
        const cityName = this.props.cityName;
        const result = getListData(cityName,0);
        this.resultHandle(result);
    }
    loadMoreFn(){
        this.setState({
            isLoadingMore:true
        });
        setTimeout(()=>{
            const cityName = this.props.cityName;
            const page = this.state.page;
            const result = getListData(cityName,page);
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

export default List;