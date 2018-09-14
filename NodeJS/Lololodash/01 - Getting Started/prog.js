const _ = require("lodash")

const worker = (list) => {
    return _.filter(list, { 'active': true })
}

module.exports = worker