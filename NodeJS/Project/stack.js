module.exports = {
    pop: (array) => {
        if(!Array.isArray(array))
            throw new Error("Data provided is not an array")
        if(array.length === 0){
            // throw new Error("Empty array cannot be popped")
            throw {"statusCode":409,"error":"Empty Array","message":"Must have at least one elemento to pop"}
        }
            array.pop()
    },
    
    push: (array, value) => {
        if(!Array.isArray(array))
            throw new Error("Data provided is not an array")
        
        //if 'value' should follow a contract. Example: only strings, only numbers, etc
        //TODO
        // if() { }
    
        array.push(value)
    },
    
    top: (array) => {
        if(!Array.isArray(array))
            throw new Error("Data provided is not an array")
        if(array.length === 0)
            throw new Error("Array is empty")
        return array[ array.length - 1 ]
    },
    
    size: (array) => {
        if(!Array.isArray(array))
            throw new Error("Data provided is not an array")
        return array.length
    },
}
