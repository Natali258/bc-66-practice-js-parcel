// let userName = 'Poly';
// function fetchUserByName(name) {
//   console.log('start fetch');

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isDone = Math.random() < 0.5;
//       if (isDone) {
//         const user = {
//           name,
//           email: 'mango@gmail.com',
//         };
//         resolve(['Mango', 'mango@gmail.com']);
//       }
//       reject(`${name} not found`);
//     }, 1000);
//   });
// }

// fetchUserByName('Mango')
//   .then(([name, email]) => {
//     console.log(name, email);
//     userName = name;
//     return name;
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('end fetch');
//   });
// console.log(userName);

// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Завантаження скриптів
 */

//? Створіть функцію loadScript(url), яка буде створювати та додавати скрипт на сторінку
//? Передайте кобэк, який буде викликатися по завершеню завантаженя скрипта

// function loadScript(url, callback) {
//   const script = document.createElement('script');
//   script.setAttribute('src', url);
//   document.body.append(script);
//   script.addEventListener('load', () => {
//     return callback(script);
//   });
//   script.addEventListener('error', () => {
//     return callback(null, 'error');
//   });
// }
// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   (script, error) => {
//     if (script) {
//       loadScript(
//         'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', (script, error)=>{
//           if (script) {
//             loadScript(
//               'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js', (script, error) => {
//                 if (script) {
//                   console.log(script);
//                 }
//                 else {
//                   console.log(error);
//                 }
//               }
//             );
//           }
//           else {
//             console.log(error);
//           }
//         }
//       );
//     } else {
//       console.log(error);
//     }
//   }
// );

function loadScript(url) {
  const script = document.createElement('script');
  script.setAttribute('src', url);
  document.body.append(script);
  return new Promise((resolve, reject) => {
    script.addEventListener('load', () => {
      resolve(script);
    });
    script.addEventListener('error', () => {
      reject('error');
    });
  });
}
loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(value => {
    console.log('Download success ', value);
    return loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
    );
  })
  .then(value => {
    console.log('Download success ', value);
    return loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
    );
  })
  .then(value => {
    console.log('Download succes ', value);
  })
  .catch(error => {
    console.log(error);
  });
