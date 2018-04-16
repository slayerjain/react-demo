import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import totalExpenses from '../../selectors/total-expenses';

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary
    expenseCount={[expenses[0]].length}
    expenseTotal={totalExpenses([expenses[0]])}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with expenses', () => {
  const wrapper = shallow(<ExpensesSummary
    expenseCount={expenses.length}
    expenseTotal={totalExpenses(expenses)}
  />);
  expect(wrapper).toMatchSnapshot();
});
