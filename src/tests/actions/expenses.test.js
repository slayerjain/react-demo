import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    updates : {
      note: 'New note value',
    },
  });
});

test('should setup create expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 12345,
    createdAt: 1000,
    note: 'A sample rent data',
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('should setup create expense action object with default values', () => {
  const defaultExpenseData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: '',
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaultExpenseData,
      id: expect.any(String),
    },
  });
});