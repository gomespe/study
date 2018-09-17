const _ = require('lodash')

const worker = (list) => {
    return _.chain(list)
            .groupBy('username')
            .map((item, name) => {
                return {username: name, comment_count: _.size(item)}
            })
            .sortBy(item => {
                return -item.comment_count
            })
}

module.exports = worker
