var http = require('http'),
    async = require('async')

function httpGetFromArgs(i){
    return function(done){
        http.get(process.argv[i], (res) => {
            var body = ''
            res.on('data', (chunk) => {
                body += chunk.toString()
            })
            res.on('end', () => {
                done(null,body)
            })
        })
    }
}

async.series({
    requestOne: httpGetFromArgs(2),
    requestTwo: httpGetFromArgs(3) 

}, function(err,results){
    console.log(results)
})