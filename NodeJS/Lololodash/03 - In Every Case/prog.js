const _ = require('lodash')

const worker = (arg) => {
    return _.forEach(arg, (item) => {
        if(item.population >= 1.0){
            item.size = 'big'
        }
        else if(item.population <= 0.5){
            item.size = 'small'
        }
        else{
            item.size = 'med'
        }
    })
}

module.exports = worker