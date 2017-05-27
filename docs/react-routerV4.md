# react-router V4

AppRouter.jsx

```jsx harmony
    import { HashRouter as Router,Route } from 'react-router-dom';
    import createBrowserHistory from 'history/createBrowserHistory';
    const history = createBrowserHistory();

    import SubRouter from './SubRouter';
    import App from '../containers';

    <Router history={history}>
        <App>
            <Route path="/" component={SubRouter} />
        </App>
    </Router>

```

SubRouter.jsx

```jsx harmony
    import { Route,Switch } from 'react-router-dom'
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/city" component={City}/>
        <Route path="/search/:category/:keyword?" component={Search}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/Login/:router?" component={Login}/>
        <Route path="/user" component={User}/>
        <Route component={NotFound}/>
    </Switch>
```

App.jsx

```jsx harmony
    {
        this.state.initDone
        ? this.props.children
        : <div>正在加载...</div>
    }
```
# 
* 没有匹配上显示404页面

```jsx harmony
    <Route component={NotFound}/>
```

* 可选 URL：path="/Login/:router?"，加上?即可
* history：

```jsx harmony
    import createBrowserHistory from 'history/createBrowserHistory';
    const history = createBrowserHistory();
```
```jsx harmony
    import { withRouter } from 'react-router-dom'

    export default withRouter(connect(
        mapStateToProps,
        mapDispatchToProps
    )(App))
```

* App.jsx： this.props.children,根据 router 加载不同的页面