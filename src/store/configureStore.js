import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import mySaga from '../sagas/expenses';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(mySaga);
  return store;
};
