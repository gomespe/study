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