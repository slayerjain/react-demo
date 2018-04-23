import db from '../firebase/firebase';

export const addExpenseToFirebase = expense => (
  db.collection('expenses').add(expense)
    .then(ref => ref.id)
    .catch((err) => {
      console.log('Error adding document', err);
    })
);