import { call, put, takeEvery } from 'redux-saga/effects';
import { AddToDBException } from '../errors/errors';
import { addExpenseToFirebase } from '../async/firebase';


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

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('START_ADD_EXPENSE', startAddExpense);
}

export default mySaga;
