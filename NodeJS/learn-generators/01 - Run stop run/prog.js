function *Range(from,to) {
    for(var i = from; i<=to; i++){
        yield i;
    }
}

for(var r of Range(5,10)) {
    console.log(r)
}