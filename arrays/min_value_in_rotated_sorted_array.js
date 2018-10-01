var a = [5,6,1,2,3,4];

function min(){
    for(let i=0;i<a.length;i++){
        if(a[i+1]<a[i]){
            console.log(a[i+1]);
            return;
        }
    }

    console.log(a[0]);
    return;
}

min();