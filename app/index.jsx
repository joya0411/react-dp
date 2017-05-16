import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './static/css/global.css';
import './static/css/font.css';

// 创建 Redux 的 store 对象
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);
