function fibonacci(n, map){
    if(n<=1){
        map[n] = n;
        return n;
    }
    else{
        if (exists(n - 1, map) && exists(n - 1, map)){
            map[n] = map[n - 1] + map[n - 2];
        }    
        return ((exists(n-1, map)?map[n-1]:fibonacci(n - 1, map)) + (exists(n-2, map)?map[n-2]:fibonacci(n-2, map)));
    }
}

console.log(fibonacci(9, {}));

function exists(n, map){
    return (Object.keys(map).indexOf(n.toString()) > -1);
}