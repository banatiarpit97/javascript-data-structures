var a = [10,90,49,2,1,5,23];

function wave(){
    for(let i=0;i<a.length;i+=2){
        if(i>0 && a[i]<a[i-1]){
            [a[i], a[i - 1]] = [a[i-1], a[i]];
        }
        if (i < a.length-1 && a[i] < a[i + 1]) {
            [a[i], a[i + 1]] = [a[i + 1], a[i]];
        }
    }

    console.log(a);
}

wave();