var a = [10,3,5,6,2];

function product(){
    var left = [1];
    // var right = new Array(a.length);
    var right = [];
    var prod = [];
    right[a.length-1] = 1;
    console.log(right);

    for(let i=0;i<a.length-1;i++){
       let tmp = left[i]*a[i];
       left.push(tmp);
    }
    for (let i = a.length-1; i > 0; i--) {
        let tmp = right[i] * a[i];
        right[i-1] = tmp;
    }

    for(i=0;i<a.length;i++){
        prod[i] = left[i]*right[i];
    }

    console.log(left, right, prod)


}

product();