import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 12345566,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newTestExpense = {
    id: '100',
    description: 'A new test expense',
    note: 'A sample expense',
    amount: 1000,
    createdAt: 100,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newTestExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newTestExpense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'A new description',
    amount: 100,
    note: 'A new test note',
    createdAt: moment().valueOf(),
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], { ...expenses[1], ...updates }, expenses[2]]);
});

test('should not edit expense if expense not found', () => {
  const updates = {
    description: 'A new description',
    amount: 100,
    note: 'A new test note',
    createdAt: moment().valueOf(),
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: 100,
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
