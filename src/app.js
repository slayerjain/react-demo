import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import 'react-chat-elements/dist/main.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    store.dispatch(startSetExpenses());
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
    logout();
  }
});
