const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

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
//
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
