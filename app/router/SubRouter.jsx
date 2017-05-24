import React from 'react'
import { Route,Switch } from 'react-router-dom'


import Home from '../containers/Home/Home';
import City from '../containers/City/City';
import Search from '../containers/Search/Search';
import NotFound from '../404';
import Detail from '../containers/Detail/Detail';
import Login from '../containers/Login/Login';

export default class SubRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/city" component={City}/>
                <Route path="/search/:category/:keyword?" component={Search}/>
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/Login/:route?" component={Login}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}




