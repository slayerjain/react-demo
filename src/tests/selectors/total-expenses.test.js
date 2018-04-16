import totalExpenses from '../../selectors/total-expenses';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  expect(totalExpenses([])).toBe(0);
});

test('should correctly add up a single expense', () => {
  expect(totalExpenses([expenses[0]])).toBe(123);
});

test('should correctly add up multiple expenses', () => {
  expect(totalExpenses(expenses)).toBe(490123);
});

