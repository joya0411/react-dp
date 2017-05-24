import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import Home from '../containers/Home/Home';
import City from '../containers/City/City';
import Search from '../containers/Search/Search';
import NotFound from '../404';
import Detail from '../containers/Detail/Detail';
import Login from '../containers/Login/Login';

const routeMap = () => (
    <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/city" component={City}/>
                <Route path="/search/:category/:keyword?" component={Search}/>
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/Login/:route?r" component={Login}/>
                <Route component={NotFound}/>
            </Switch>
    </Router>
)


export default routeMap


