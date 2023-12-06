let userName = 'Poly';
function fetchUserByName(name) {
  console.log('start fetch');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isDone = Math.random() < 0.5;
      if (isDone) {
        const user = {
          name,
          email: 'mango@gmail.com',
        };
        resolve(['Mango', 'mango@gmail.com']);
      }
      reject(`${name} not found`);
    }, 1000);
  });
}

fetchUserByName('Mango')
  .then(([name, email]) => {
    console.log(name, email);
    userName = name;
    return name;
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('end fetch');
  });
console.log(userName);
