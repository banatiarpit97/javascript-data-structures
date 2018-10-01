var a = [1,2,1,2,1,3];

function balance(){
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0;i<a.length/2;i++){
        sum1 += a[i];
    }
    for (let i = a.length/2; i < a.length; i++) {
        sum2 += a[i];
    }

    console.log(Math.abs(sum1-sum2));
}

balance();