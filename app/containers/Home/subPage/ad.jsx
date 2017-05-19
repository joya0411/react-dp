import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAdData} from '../../../fetch/home/home'
import HomeAd from '../../../components/HomeAd/HomeAd'

class Ad extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data : []
        };
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length
                    ? <HomeAd data={this.state.data} type="ad"></HomeAd>
                    : <div>加载中...</div>
                }
            </div>
        )
    }
    componentDidMount(){
        const result = getAdData();
        result.then(res=>{
            return res.json();
        }).then(json=>{
            if (json.length){
                this.setState({
                    data: json
                });
            }
        })
    }
}

export default Ad;