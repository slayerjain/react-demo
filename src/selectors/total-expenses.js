const reducer = (total, amount) => total + amount;

export default expenses => (
  // expenses.length > 0 ? expenses.reduce(reducer) : 0
  expenses.length > 0 ? expenses.map(expense => expense.amount).reduce(reducer, 0) : 0
);
