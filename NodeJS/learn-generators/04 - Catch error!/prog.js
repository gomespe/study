function *upper (items) {
    for(var i=0;i<items.length;i++){
        if(Number.isInteger(items[i])){
            yield null
        }
        else
            yield items[i].toUpperCase()
    }
}

var bad_items = ['a', 'b', 1, 'c']

for(var item of upper(bad_items)){
    console.log(item)
}