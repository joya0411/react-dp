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
    //购买事件
    buyHandle(){
        //验证登录
        const loginFlag = this.loginCheck();
        if (!loginFlag) return;

        //购买的流程

        //跳转到用户主页
        const history = this.props.history;
        history.push('/User');
    }
    //收藏事件
    storeHandle(){
        //验证登录
        const loginFlag = this.loginCheck();
        if (!loginFlag) return;

        //维护redux的状态
        const id = this.props.id;
        const storeActions = this.props.storeActions;
        if ( this.state.isStore ){
            //已收藏
            storeActions.rm({
                id:id
            })
        } else {
            //未收藏
            storeActions.add({
                id:id
            })
        }

        this.setState({
            isStore:!this.state.isStore
        });
    }
    //验证登录
    loginCheck(){
        const history = this.props.history;
        const id = this.props.id;
        const username = this.props.userinfo.username;
        if (!username){
            history.push('/login/'+ encodeURIComponent('/detail/') +id)
            return false;
        }
        return true;
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