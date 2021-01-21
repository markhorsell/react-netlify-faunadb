import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import store from './store/store';
//import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './styles/global'
//import './styles.scss';
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
    <GlobalStyles />
  </Provider>,
  document.getElementById('root')
);