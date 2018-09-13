require('es6-promise')

'use strict';

var promise = new Promise( function (resolve, reject) {
    setTimeout(reject,300,new Error('REJECTED!'))
})

function onReject (error) {
    console.log(error.message)
}

promise
    .then(null,onReject)

