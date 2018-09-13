require('es6-promise')

'use strict';

var promise = new Promise(function (resolve, reject){
    setTimeout(resolve, 300, 'FULFILLED!')
})

promise
    .then((result) => {
        console.log(result)
    })




//  EXEMPLO ROMEU
// var n = 100;
// var promise = new Promise(function (resolve, reject) {
//     if (n % 2 === 0) {
//         resolve(n);
//     } else {
//         reject('Não era par');
//     }
// });

// promise
//     .then((result) => {
//         return result * result;
//     }).catch((err) => {
//         console.log('deu errado:', err)
//         return 2
//     }).then((result) => {
//         console.log(`valor ${result}`)
//     })


// 'use strict';
    
// // Create a promise

// var promise = new Promise(function (fulfill, reject) {
//   // After the timeout reaches 300ms, fulfill the promise with value
//   // 'FULFILLED!'.

//   setTimeout(function () {
//     fulfill('FULFILLED!');
//   }, 300);
// });

// // Add a handler to the promise’s fulfillment. `console.log` will be called
// // with the value passed to `fulfill`, which is `'FULFILLED!'`.
// // Note that this statement will ALWAYS be executed before `fulfill` is
// // called (we'll talk about this in depth in the lessons to come).

// promise.then(console.log);
