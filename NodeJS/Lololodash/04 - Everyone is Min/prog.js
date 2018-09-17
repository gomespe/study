const _ = require('lodash');

const worker = function (list){
    var res = {
        hot: [],
        warm: []
    };

    function isgreater(num){
        return num > 19;
    }

    _.forEach(list, (temperatures, cityName) => {
        if(_.every(temperatures, isgreater)){
            res.hot.push(cityName);
        } else if(_.some(temperatures, isgreater)){
            res.warm.push(cityName);
        }
    });

    return res;
}

module.exports = worker