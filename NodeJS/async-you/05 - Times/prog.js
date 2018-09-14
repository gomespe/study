
var http = require('http'),
    async = require('async'),
    path = require('path')

function httpPostFromArgv(index, next){
    var options = {
        hostname: process.argv[2],
        port: process.argv[3],
        path: '/users/create',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    var req = http.request(options, (res) => {
        res.on('data', () => {})
        res.on('end', next)
        res.on('error', next)
    })

    req.on('error', (err) => {
        console.log('problem with request' + err.message)
        next(err)
    })

    req.end(JSON.stringify({"user_id": index+1}))
    // next()
}

function httpGet(next){
    http.get('http://' + process.argv[2] + ':' + (process.argv[3] || 80)  + '/users', (res) => {
        var body = ''
        res.on('data', (chunk) => {
            body += chunk
        })
        res.on('end', () => {
            next(null,body)
        })
    })
}


async.series({
    post: (cb) => {
        async.times(5, httpPostFromArgv,cb)
    },
    get: (cb) => {
        httpGet(cb)
    }
}, (err, result) => {
    if(err) console.log(err)
    console.log(result.get)
})
