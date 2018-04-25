
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

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

const startSetExpenses = () => ({
  type: 'START_SET_EXPENSES',
});

export { addExpense, removeExpense, editExpense, startAddExpense, startSetExpenses };
