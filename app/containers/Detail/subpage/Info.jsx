import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getInfoData } from '../../../fetch/detail/detail';
import DetailInfo from '../../../components/DetailInfo/DetailInfo';

class Info extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info :false
        }
	}
	render(){
		return (
            <div>
                {
                    this.state.info
                    ? <DetailInfo data={this.state.info}/>
                    : ''
                }
            </div>
        )
	}
    componentDidMount(){
        //获取商户信息
        this.getInfo();
    }
    getInfo(){
        getInfoData(this.props.id).then(res=>{
            return res.json()
        }).then(json=>{
            this.setState({
                info:json
            })
        });
    }
}

export default Info;