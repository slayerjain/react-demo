import db from '../firebase/firebase';

export const addExpenseToFirebase = expense => (
  db.collection('expenses').add(expense)
    .then(ref => ref.id)
    .catch((err) => {
      throw err;
    })
);

export const getExpensesFromFirebase = () => (
  db.collection('expenses').get().then((querySnapshot) => {
    const expenses = [];
    querySnapshot.forEach((expense) => {
      expenses.push({
        id: expense.id,
        ...expense.data(),
      });
    });
    return expenses;
  }).catch((err) => {
    throw err;
  })
);
