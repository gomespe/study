//TODO
// ERROR HANDLING

'use strict';

const stack = require('./stack.js')
const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

var array = [];

// route for push
server.route({
    method: 'GET',
    path: '/push/{value}',
    handler: (request, h) => {
        stack.push(array,request.params.value)
        return request.params.value + ' :  pushed to the stack';
    }
});

// route for pop
server.route({
    method: 'GET',
    path: '/pop/',
    handler: (request, h) => {
        let top = stack.top(array)
        stack.pop(array)
        return top + ' :  popped from the stack'
    }
});

// route for top
server.route({
    method: 'GET',
    path: '/top/',
    handler: (request, h) => {
        return stack.top(array)
    }
});

// route for size
server.route({
    method: 'GET',
    path: '/size/',
    handler: (request, h) => {
        return stack.size(array)
    }
});

// Only for debugging
// route for print
server.route({
    method: 'GET',
    path: '/print/',
    handler: (request, h) => {
        return array;
    }
});

const init = async() => {
    await server.start();
    console.log('Server running at:' + server.info.uri);
}

process.on("unhandledRejection", (err) => {
    console.log(err)
    process.exit(1)
});

init();