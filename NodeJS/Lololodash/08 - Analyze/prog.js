const _ = require('lodash')

const worker = (list) => {
    var average = _.reduce(list, (sum,item) => {
        return sum + item.income
    } ,0) / _.size(list)
    console.log(average)
    // _.sortBy()

    var res = {average: average,
                underperform: [],
                overperform: []
            }
    
    res.underperform = _
        .chain(list)
        .filter((item) => {
            return item.income <= average
        }).sortBy('income')

    res.overperform = _
        .chain(list)
        .filter((item) => {
            return item.income > average
        }).sortBy('income')
    

    // _.sortBy(res.underperform, 'income')
    // _.sortBy(res.overperform,'income')
    return res
}

module.exports = worker