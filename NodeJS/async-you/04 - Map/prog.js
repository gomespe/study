var http = require('http'),
    async = require('async')

async.map(process.argv.splice(2), (url,done) => {
    http.get(url, (res) => {
        var body = ''

        res.on('data', (chunk) => {
            body += chunk
        })

        res.on('end', () => {
            done(null,body)
        })
    }).on('error', (err) => {
        throw err
    })
}, (err, results) => {
    if(err) console.log(err)
    console.log(results)
})