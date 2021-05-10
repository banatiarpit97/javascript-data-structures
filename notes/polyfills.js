function map(arr, fn){
    let res = [];
    arr.forEach((elem, i) => {
        res.push(fn(elem, i));
    });
    return res;
}


function filter(arr, fn){
    let res = [];
    arr.forEach((elem, i) => {
        if(fn(elem, i)) {
            res.push(elem);
        }
    });
    return res;
}


function forEach(arr, fn){
    for(let i=0;i<arr.length;i++){
        fn(arr[i]);
    }
}


function reduce(arr, fn, init){
    let acc = init;
    arr.forEach(e => {
        acc = fn(acc, e);
    })
    return acc;
}


function some(arr, fn){
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i])){
            return true;
        }
    }
    return false;
}


function every(arr, fn){
    for(let i=0;i<arr.length;i++){
        if(!fn(arr[i])){
            return false;
        }
    }
    return true;
}

//sending params one by one like a(2)4()(7) = 13
function outer(a){
    let sum = a;
    return function inner(b){
        if(b) {
            sum += b;
            return inner;
        } else {
            return sum;
        }
    }
}