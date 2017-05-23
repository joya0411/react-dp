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
            page:0
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
    //获取首页数据
    loadFirstPageData(){
        const cityName = this.props.cityName;
        const result = getListData(cityName,0);
        this.resultHandle(result);
    }
    //加载其他页数据
    loadMoreFn(){
        this.setState({
            isLoadingMore:true
        });

        setTimeout(()=>{
            const cityName = this.props.cityName;
            const page = this.state.page;
            const result = getListData(cityName,page);
            const hasMore = page>=5 ? false : true;

            this.resultHandle(result,hasMore);

            this.setState({
                isLoadingMore:false
            })
        },500);
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
                page: page+1
            })
        })
    }
}

export default List;