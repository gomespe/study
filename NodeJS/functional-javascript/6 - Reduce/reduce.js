function countWords(inputWords){
    let result = new Object()
    return inputWords.reduce((accumulator, currentValue) => {
        if(accumulator[currentValue.toString()] === undefined){
            accumulator[currentValue.toString()] = 1
        }
        else{
            accumulator[currentValue.toString()]++
        }
        return accumulator
    }, result)
}

module.exports = countWords

// function countWords(arr) {
// return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
// }, {}) // second argument to reduce initialises countMap to {}
// }

// module.exports = countWords
  

