
// TODO Remove
const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

// const startAddExpense = (expenseDate = {}) => (dispatch) => {
//   const {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0,
//   } = expenseDate;
//   const expense = {
//     description, note, amount, createdAt,
//   };
//   db.collection('expenses').add(expense).then((ref) => {
//     dispatch(addExpense({
//       id: ref.id,
//       ...expense,
//     }));
//   });
// };

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

export { addExpense, removeExpense, editExpense, startAddExpense };
