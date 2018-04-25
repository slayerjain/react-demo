// import expenses from '../fixtures/expenses';
// import db from '../../firebase/firebase';
//
// import { getExpensesFromFirebase } from '../../async/firebase';
//
// beforeEach((done) => {
//   expenses.forEach(({
//     id, description, note, amount, createdAt,
//   }) => {
//     db.collection('expenses').doc(id).set({
//       description, note, amount, createdAt,
//     }).then(() => {
//       if (id === expenses.length) {
//         done();
//       }
//     });
//   });
// });
//
// jest.setTimeout(20000);
// test('should fetch the expenses from firbase', () => {
//   expect(data).toEqual(expenses);
// });
