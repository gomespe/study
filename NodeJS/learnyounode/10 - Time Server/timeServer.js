var net = require('net')

var server = net.createServer(function listener(socket){
    socket.end(getTime() + '\n')
})

server.listen(Number(process.argv[2]))

function getTime(){
    date = new Date();
    return date.getFullYear() + '-' +
            printPretty(date.getMonth()+1) + '-' +
            printPretty(date.getDate()) + ' ' +
            printPretty(date.getHours()) + ':' +
            printPretty(date.getMinutes())
}

function printPretty(n){
    return (n<10) ? ('0'+n) : n
}



// var net = require('net')
    
// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))
