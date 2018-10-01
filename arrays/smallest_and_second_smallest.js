var a = [12,13,1,10,34,1];

function small(){
    let smallest = Number.POSITIVE_INFINITY;
    let second;
    for(let i=0;i<a.length;i++){
        if(a[i]<smallest){
            second = smallest;
            smallest = a[i];
        }
        else if(a[i] < second && a[i] != smallest){
            second = a[i];
        }
    }

    console.log(smallest, second);
}

small();