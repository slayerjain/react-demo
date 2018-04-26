import db from '../firebase/firebase';

export const addExpenseToFirebase = (expense, uid) => (
  db.collection(`users/${uid}/expenses`).add(expense)
    .then(ref => ref.id)
    .catch((err) => {
      throw err;
    })
);

export const getExpensesFromFirebase = uid => (
  db.collection(`users/${uid}/expenses`).get().then((querySnapshot) => {
    const expenses = [];
    querySnapshot.forEach((expense) => {
      expenses.push({
        id: expense.id,
        ...expense.data(),
      });
    });
    return expenses;
  }).catch((err) => {
    console.log(err);
  })
);

export const removeExpensesFromFirebase = (id, uid) => (
  db.collection(`users/${uid}/expenses`).doc(id).delete().then(() => id)
    .catch((err) => {
      throw err;
    })
);

export const editExpenseFromFirebase = (id, updates, uid) => (
  db.collection(`users/${uid}/expenses`).doc(id).update(updates).then(() => true)
    .catch((err) => {
      throw err;
    })
);
