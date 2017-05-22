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
import NotFound from '../404'

const routeMap = () => (
    <HashRouter>
        <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/city" component={City}/>
                <Route path="/search/:category" component={Search}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </HashRouter>
)


export default routeMap


