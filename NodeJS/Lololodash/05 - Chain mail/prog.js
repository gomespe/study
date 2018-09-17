const _ = require('lodash')

const worker = function (list) {
    return _
            .chain(list)
            .sortBy()
            .map(element => element + 'CHAINED')
            .map(item => item.toUpperCase())
            .value()
}

module.exports = worker