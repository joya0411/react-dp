import React from 'react'
import { Route,Switch } from 'react-router-dom'

import Home from '../containers/Home/Home';
import City from '../containers/City/City';
import Search from '../containers/Search/Search';
import NotFound from '../containers/404/404';
import Detail from '../containers/Detail/Detail';
import Login from '../containers/Login/Login';
import User from '../containers/User/User';

export default class SubRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/city" component={City}/>
                <Route path="/search/:category/:keyword?" component={Search}/>
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/Login/:router?" component={Login}/>
                <Route path="/user" component={User}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}




