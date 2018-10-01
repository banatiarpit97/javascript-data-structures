var a = [1,2,3,4,5];
k = 2;

function rotate() {
    t1 = [];t2 = [];j=0;
    for(let i=0;i<=k;i++){
        t1[i] = a[i];
    }
    t1.reverse();

    for(let i=k+1;i<a.length;i++){
        t2[j] = a[i];
        j++;
    }

    console.log(t2)
    t2.reverse();

    let result = t1.concat(t2);

    console.log(result.reverse());
}

rotate();