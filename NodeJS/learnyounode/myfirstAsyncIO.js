var fs = require('fs')
fs.readFile(process.argv[2], 'utf8', function numNewLines(error, str){
    if(error) return console.error(error)
    str = str.split('\n')
    console.log(str.length - 1)
})