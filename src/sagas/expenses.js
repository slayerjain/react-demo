import { call, put, takeEvery, all } from 'redux-saga/effects';
import { AddToDBException } from '../errors/errors';
import { addExpenseToFirebase, getExpensesFromFirebase, removeExpensesFromFirebase, editExpenseFromFirebase } from '../async/firebase';


// worker Saga: will be fired on START_ADD_EXPENSE actions
export function* addExpense(action = { expense: {} }) {
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

export function* setExpense() {
  const expenses = yield call(getExpensesFromFirebase);
  if (expenses) {
    yield put({
      type: 'SET_EXPENSES',
      expenses,
    });
  }
}

export function* removeExpense({ id }) {
  const idDeleted = yield call(removeExpensesFromFirebase, id);
  if (idDeleted) {
    yield put({
      type: 'REMOVE_EXPENSE',
      id,
    });
  }
}

export function* editExpense({ id, updates }) {
  const isUpdated = yield call(editExpenseFromFirebase, id, updates);
  if (isUpdated) {
    yield put({
      type: 'EDIT_EXPENSE',
      id,
      updates,
    });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield all([
    takeEvery('START_ADD_EXPENSE', addExpense),
    takeEvery('START_SET_EXPENSES', setExpense),
    takeEvery('START_REMOVE_EXPENSE', removeExpense),
    takeEvery('START_EDIT_EXPENSE', editExpense),
  ]);
}

export default mySaga;
