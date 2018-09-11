var http = require('http')
var url = require('url')


function ISOtime(time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function UNIXtime(time){
    return {
        unixtime: time.getTime()
    }
}
http.createServer(function (request, response){
    if(request.method === 'GET'){
        response.writeHead(200, { 'Content-Type': 'application/json' })  
        url = url.parse(request.url, true)

        switch(url.pathname){
            case '/api/parsetime':
                response.end(JSON.stringify(ISOtime(new Date(url.query.iso))))
                break
            case '/api/unixtime':
                response.end(JSON.stringify(UNIXtime(new Date(url.query.iso))))
                break
        }
    }
}).listen(Number(process.argv[2]))

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
