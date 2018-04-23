import { put, call } from 'redux-saga/effects';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import { startAddExpense } from '../../sagas/expenses';
import uuid from '../__mocks__/uuid';
import { addExpenseToFirebase } from '../../async/firebase';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value',
    },
  });
});

test('should setup create expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

test('should add expense to database and store', () => {
  const expenseData = {
    description: 'Coffee',
    amount: 100,
    createdAt: uuid(0),
    note: 'Sample note',
  };
  const expenseAction = {
    type: 'ADD_EXPENSE',
    expense: {
      id: 'A sample ID',
      ...expenseData,
    },
  };
  const generator = startAddExpense({ expense: expenseData });
  expect(generator.next().value).toEqual(call(addExpenseToFirebase, expenseData));
  expect(generator.next('A sample ID').value).toEqual(put(expenseAction));
});

test('should add expense to database and store with the defaults', () => {
  const defaultExpenseData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: '',
  };

  const expenseAction = {
    type: 'ADD_EXPENSE',
    expense: {
      id: 'A sample ID',
      ...defaultExpenseData,
    },
  };
  const generator = startAddExpense();
  expect(generator.next().value).toEqual(call(addExpenseToFirebase, defaultExpenseData));
  expect(generator.next('A sample ID').value).toEqual(put(expenseAction));
});
// test('should setup create expense action object with default values', () => {
//   const defaultExpenseData = {
//     description: '',
//     amount: 0,
//     createdAt: 0,
//     note: '',
//   };
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...defaultExpenseData,
//       id: expect.any(String),
//     },
//   });
// });
