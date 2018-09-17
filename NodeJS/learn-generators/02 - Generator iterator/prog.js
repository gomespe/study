function *factorial(n) {
    for(var i=1,total=1;i<=n;i++){
        total *= i;
        yield total
    }
}

for(var n of factorial(5)){
    console.log(n)
}