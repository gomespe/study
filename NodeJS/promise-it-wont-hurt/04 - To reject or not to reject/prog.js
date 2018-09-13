var promise = new Promise((resolve, reject) => {
    resolve('I FIRED')
    reject(new Error('I DID NOT FIRED'))
})

onRejected =  (error) => {
    console.log(error.message)
}
promise
    .then(console.log,
        onRejected)