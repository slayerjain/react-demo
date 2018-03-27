// const person = {
//   name: 'shubham',
//   age: 22,
//   location: {
//     city: 'Delhi',
//     temp: 34,
//   },
// };
//
// const { name, age } = person;
//
// console.log(`${name} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

const address = ['4415/14 Lotan Jat Street', 'Pahari Dhiraj', 'Delhi', '110006'];
const [, city, state] = address;
console.log(`You are in ${city}, ${state}.`);


const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName,, mediumPrice] = item;

console.log(`A ${itemName} costs ${mediumPrice}`);
