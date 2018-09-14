var fs = require('fs')
    , http = require('http')
    , async = require('async')

async.waterfall([
    function(cb){
        fs.readFile(process.argv[2], 'utf-8', cb)
    },

    function(url, cb){
        http.get(url, function(res){
            var body = ''
            res.setEncoding('utf8')
            res.on('data',(chunk) => {
                body += chunk.toString()
            })

            res.on('end', function (){
                cb(body)
            })
        })
    }
    ], function (result){
        console.log(result)
})