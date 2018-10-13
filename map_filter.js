var a = [1,2,3,4,5,6]

var b = a.filter((a) => {
    return a%2 == 0;
})

var c = a.map((a) => {
    return a % 2 == 0;
})

console.log(a,b,c)