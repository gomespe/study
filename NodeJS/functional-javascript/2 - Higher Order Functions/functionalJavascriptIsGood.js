function repeat(operation, num){
    operation()
    if(num)
        return repeat(operation, --num)
    else
        return
}

module.exports = repeat