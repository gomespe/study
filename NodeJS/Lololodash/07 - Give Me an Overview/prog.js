const _ = require('lodash')

const worker = (list) => {
    return _.chain(list)
            .groupBy('article')
            .map((item) => {
                return {article: item[0].article,
                        total_orders: _.reduce(item,(sum,element) => {
                            return sum + element.quantity 
                         },0)}
            })
            .sort()
            .reverse()
            
            
}

module.exports = worker