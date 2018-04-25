import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './firebase/firebase';
import { startSetExpenses } from './actions/expenses';

const store = configureStore();

// store.dispatch(startAddExpense({ description: 'Water Bill', amount: 100 }));
// store.dispatch(startAddExpense({ description: 'Gas Bill', amount: 300 }));
// store.dispatch(startAddExpense({ description: 'Water Bill', amount: 100, createdAt: 109500 }));
// store.dispatch(setTextFilter('water'));
//
// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);
//
// const state = store.getState();
//
// console.log(getVisibleExpense(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

store.dispatch(startSetExpenses());

