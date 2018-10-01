var a = [7,9,11,12,5];

function rotation(){
    for(let i=1;i<a.length;i++){
        if(a[i] < a[i-1]){
            console.log(i);
            return;
        }
    }
    console.log(0)
}

rotation();