import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './scss/CityList.scss'; 

class CityList extends React.Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            cityList:['北京','上海','深圳','广州','杭州','苏州','南京','厦门','重庆','长沙','武汉','西安']
        }
	}
	render(){
		return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="city-list">
                    {
                        this.state.cityList.map((item,index)=>{
                            return (
                                <li className="city-item" key={index}>
                                    <span onClick={this.clickHandle.bind(this,item)}>{item}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
	}
    componentDidMount(){
        console.log('componentDidMount');
    }
    clickHandle(cityName){
        this.props.changeCity(cityName);
    }
}

export default CityList;