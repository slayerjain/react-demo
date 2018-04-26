import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import { AddToDBException } from '../errors/errors';
import { addExpenseToFirebase, getExpensesFromFirebase, removeExpensesFromFirebase, editExpenseFromFirebase } from '../async/firebase';

// Bad practice
import { firebase, googleAuthProvider } from '../firebase/firebase';

const getUid = state => state.auth.uid;

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
  const uid = yield select(getUid);
  const id = yield call(addExpenseToFirebase, expense, uid);
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
  const uid = yield select(getUid);
  console.log(uid);
  const expenses = yield call(getExpensesFromFirebase, uid);
  if (expenses) {
    yield put({
      type: 'SET_EXPENSES',
      expenses,
    });
  }
}

export function* removeExpense({ id }) {
  const uid = yield select(getUid);
  const idDeleted = yield call(removeExpensesFromFirebase, id, uid);
  if (idDeleted) {
    yield put({
      type: 'REMOVE_EXPENSE',
      id,
    });
  }
}

export function* editExpense({ id, updates }) {
  const uid = yield select(getUid);
  const isUpdated = yield call(editExpenseFromFirebase, id, updates, uid);
  if (isUpdated) {
    yield put({
      type: 'EDIT_EXPENSE',
      id,
      updates,
    });
  }
}

// TODO remove this helper function
const login = () => (
  firebase.auth().signInWithPopup(googleAuthProvider).catch((err) => {
    console.log(err);
  })
);

const logout = () => (
  firebase.auth().signOut().catch((err) => {
    console.log(err);
  })
);

export function* startLogin() {
  yield call(login);
}

export function* startLogout() {
  yield call(logout);
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
    takeEvery('START_LOGIN', startLogin),
    takeEvery('START_LOGOUT', startLogout),
  ]);
}

export default mySaga;
