var a = [10,12,20,30,25,40,32,31,35,50,60];

function unsorted(){
    let start,end;
    for(let i=0;i<a.length;i++){
        if(a[i+1]<a[i]){
            start = i;
            break;
        }
    }
    for (let i = a.length-1; i >= 0; i--) {
        if (a[i - 1] > a[i]) {
            end = i;
            break;            
        }
    }

    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    for(let i=start;i<=end;i++){
        if(a[i]<min){
            min = a[i];
        }
        else if (a[i] > max) {
            max = a[i];
        }
    }

    for(let i=0;i<start;i++){
        if(a[i]>min){
            start = i;
        }
    }
    for (let i = a.length-1; i > end; i--) {
        if (a[i] < max) {
            end = i;
        }
    }
    console.log(start, end)
    
}

unsorted();