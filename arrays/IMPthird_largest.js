var a = [1,14,2,16,10,20];

function third(){
    let first = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;
    let third = Number.NEGATIVE_INFINITY;  
    
    for(let i=0;i<a.length;i++){
        if(a[i] > first){
            third = second;
            second = first;
            first = a[i];
        }
        else if(a[i]>second){
            third = second;
            second = a[i];
        }
        else if(a[i]>third){
            third = a[i];
        }
    }

    console.log(third)
}

third();