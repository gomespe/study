module.exports = function (dirName, extension, callbackFunc){
    var path = require('path')
    var fs = require('fs')

    fs.readdir(dirName, function (err, data){
        if(err)
            return callbackFunc(err)
        extension = '.' + extension
        var answer = new Array()
        for(var i=0; i<data.length; i++){
            if(path.extname(data[i]) === extension){
                answer.push(data[i])
            }
        }

        callbackFunc(null,answer)
    })
}



// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
