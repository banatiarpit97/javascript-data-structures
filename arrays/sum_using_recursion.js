var a = [1,2,3];
var result = 0;

function sum(i){
    if(i==a.length){
        console.log(result);
        return;
    }

    result += a[i];
    sum(++i);
}

sum(0);