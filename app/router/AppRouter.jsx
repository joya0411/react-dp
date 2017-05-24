import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route } from 'react-router-dom'; 

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import App from '../containers';
import SubRouter from './SubRouter';

class AppRouter extends React.Component{
    render(){
        return(
            <Router history={history}>
                <App>
                    <Route path="/" component={SubRouter} />
                </App>
            </Router>
        )
    }
}

export default AppRouter;