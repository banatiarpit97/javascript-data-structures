function mergesort(arr){
    if(arr.length == 1){
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergesort(left), mergesort(right));
}

function merge(left, right){
    const results = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift());
        }
        else{
            results.push(right.shift());            
        }
    }
    while(left.length){
        results.push(left.shift());
    }
    while(right.length) {
        results.push(right.shift());
    }

    return results;
}

console.log(mergesort([8,4,0,1,99,4,88]));