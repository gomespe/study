var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res){
    var filename = process.argv[3]

    var readStream = fs.createReadStream(filename)

    readStream.pipe(res)
})
server.listen(Number(process.argv[2]))

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' })

//     fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
