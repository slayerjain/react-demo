import { call, put, takeEvery, all } from 'redux-saga/effects';
import { AddToDBException } from '../errors/errors';
import { addExpenseToFirebase, getExpensesFromFirebase } from '../async/firebase';

// worker Saga: will be fired on START_ADD_EXPENSE actions
export function* startAddExpense(action = { expense: {} }) {
  const {
    description = '',
    amount = 0,
    createdAt = 0,
    note = '',
  } = action.expense;
  const expense = {
    description, amount, createdAt, note,
  };
  const id = yield call(addExpenseToFirebase, expense);
  if (!id) {
    throw AddToDBException('Error getting new id of added document');
  }
  yield put({
    type: 'ADD_EXPENSE',
    expense: {
      id,
      ...expense,
    },
  });
}

export function* startSetExpense() {
  const expenses = yield call(getExpensesFromFirebase);
  if (expenses) {
    yield put({
      type: 'SET_EXPENSES',
      expenses,
    });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield all([
    takeEvery('START_ADD_EXPENSE', startAddExpense),
    takeEvery('START_SET_EXPENSES', startSetExpense),
  ]);
}

export default mySaga;
