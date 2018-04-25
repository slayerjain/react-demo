
// TODO Remove
const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

const startAddExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'START_ADD_EXPENSE',
  expense: {
    description,
    note,
    amount,
    createdAt,
  },
});

// const removeExpense = ({ id } = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   id,
// });

const startRemoveExpense = ({ id } = {}) => ({
  type: 'START_REMOVE_EXPENSE',
  id,
});

const startEditExpense = (id, updates) => ({
  type: 'START_EDIT_EXPENSE',
  id,
  updates,
});

const startSetExpenses = () => ({
  type: 'START_SET_EXPENSES',
});

export { addExpense, startEditExpense, startAddExpense, startSetExpenses, startRemoveExpense };
