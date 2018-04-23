const promise = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve({
  //     name: 'Shubham',
  //     age: 22,
  //   });
  // }, 1500);
  reject('Something went error!');
});

console.log('Before');

promise.then((data) => {
  console.log('1', data);
});

console.log('After');
