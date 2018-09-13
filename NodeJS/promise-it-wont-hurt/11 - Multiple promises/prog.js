function all (p1,p2){
    return new Promise(function (resolve,reject){
        var counter = 0;
        var res = []

        p1.then((value)=>{
            counter++;
            res[0] = value

            if(counter === 2)
                resolve(res)
        })

        p2.then((value) =>{
            counter++
            res[1] = value

            if(counter === 2)
                resolve(res)
        })
    })
}

all(getPromise1(),getPromise2()).then(console.log)