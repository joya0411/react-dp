import React from 'react'
import {
  HashRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


import Home from '../containers/Home/Home';
import City from '../containers/City/City';
import Search from '../containers/Search/Search';
import NotFound from '../404';
import Detail from '../containers/Detail/Detail';
import Login from '../containers/Login/Login';

const routeMap = () => (
    <HashRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/city" component={City}/>
                {/*<Route path="/search/:category" exact strict component={Search}/>*/}
                <Route path="/search/:category/:keyword?" component={Search}/>
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/Login" exact strict component={Login}/>
                <Route path="/Login/:router" component={Login}/>
                {/*<Route path="/Login/:id" component={Login}/>*/}
                <Route component={NotFound}/>
            </Switch>
    </HashRouter>
)


export default routeMap


