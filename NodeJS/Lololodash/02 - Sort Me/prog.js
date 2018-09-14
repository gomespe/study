const _ = require('lodash')

const worker = (array) => {
    return _.sortBy(array, (num) => {return num.quantity*(-1)})
}

module.exports = worker