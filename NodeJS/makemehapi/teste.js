const Hapi = require('hapi')

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
})

server.route({
    method: 'GET',
    path: '/',
    handler: (request,h) => {
        return 'Hello World'
    }
})

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
        return 'Hello, ' + encodeURIComponent(request.params.name) + '!' 
    }
})

let init = async () => {
    await server.start()
    console.log(`Server running at : ${server.info.uri}`)
}

init()