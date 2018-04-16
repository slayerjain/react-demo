import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/total-expenses';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => (
  <div>
    {
      `Viewing ${expenseCount} expense${expenseCount > 1 ? 's' : ''} totaling ${numeral(expenseTotal/ 100).format('$0,0.00')}`
    }
  </div>
);

const mapStateToProps = state => {
  const selectedExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: selectedExpenses.length,
    expenseTotal: totalExpenses(selectedExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
