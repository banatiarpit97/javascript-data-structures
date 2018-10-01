var a = [16,17,4,3,5,2];

function next_greatest(){
    let tmp, max = -1;
    for(let i = a.length-1;i>=0;i--){
        tmp = a[i];
        a[i] = max;
        if(tmp > max){
            max = tmp;
        }
    }

    console.log(a)
}

next_greatest();