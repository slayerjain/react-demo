const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

console.log(config);

firebase.initializeApp(config);

const db = firebase.firestore();

export { firebase, db as default };

// // const demoData = db.collection('Demo').doc('demoDoc');
//
// const expenses = db.collection('expenses');
//
// expenses.add({
//   description: 'Dosa',
//   note: '',
//   amount: 109500,
// }).then(() => {
//   console.log('Added the record');
// }).catch((err) => {
//   console.log(err);
// });
// //
// expenses.add({
//   description: 'Phone bill',
//   note: '',
//   amount: 59000,
// });
//
// expenses.add({
//   description: 'Rent',
//   note: '',
//   amount: 45000000,
// });
