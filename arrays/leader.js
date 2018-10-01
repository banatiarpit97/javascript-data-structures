a = [66,2,3,4,9,0,8,5,7];

function leader(){
    max = a[a.length-1];
    for(let i=a.length-2;i>=0;i--){
        if(a[i] > max){
            max = a[i];
            console.log(a[i])
        }
    }
}

leader();