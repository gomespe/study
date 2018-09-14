var hapi = require('hapi')
var server = new hapi.server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
})

server.route({path: '/', method:'GET', handler: func})

function func(request, h){
    return 'Hello hapi'
}

await server.start()

console.log('Server running at:', server.info.uri)