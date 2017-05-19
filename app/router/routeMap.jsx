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
import NotFound from '../404'

const routeMap = () => (
    <HashRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/city" component={City}/>
                <Route component={NotFound}/>
            </Switch>

    </HashRouter>
)


export default routeMap


