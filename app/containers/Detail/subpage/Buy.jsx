import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import BuyAndStore from '../../../components/BuyAndStore/BuyAndStore';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeActionsFromFile from '../../../actions/store';

class Buy extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore:false //默认未收藏
        }
        console.log(this.props)
	}
	render(){
		return (
            <BuyAndStore isStore={this.state.isStore} storeHandle={this.storeHandle.bind(this)} buyHandle={this.buyHandle.bind(this)}/>
        )
	}
    componentDidMount(){
        this.checkStoreState();
    }
    // 检验当前商户是否被收藏
    checkStoreState(){
        
    }
    buyHandle(){
        const username = this.props.userinfo.username;
    }
    storeHandle(){
        const username = this.props.userinfo.username;
        if (username){
            //已经登录
            let isStore = this.state.isStore;
            this.setState({
                isStore : !isStore
            });
        } else {
            //尚未登录
            location.href =  location.origin + '/#/login';
        }
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)