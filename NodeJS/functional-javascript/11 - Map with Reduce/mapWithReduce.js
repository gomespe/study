module.exports = function arrayMap(arr, fn){
    var result = []
    arr.reduce(function(prev,curr,idx,arr){
        result.push(fn(curr))
    }, null)
    return result
}

// module.exports = function arrayMap(arr, fn, thisArg) {
//     return arr.reduce(function(acc, item, index, arr) {
//         acc.push(fn.call(thisArg, item, index, arr))
//         return acc
//     }, [])
// }
  
