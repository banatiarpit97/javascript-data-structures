var a = [1,2,3,4,5,6,7]; //sorted

function min_max(){
    let res = [];
    for(let i=0;i<a.length/2;i++){
        res.push(a[a.length-1-i]);
        if (a[a.length - 1 - i] != a[i]){
            res.push(a[i]);
        }
    }

    console.log(res);
}

min_max();