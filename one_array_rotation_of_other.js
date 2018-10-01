a = [1,2,3,4,5];
b = [3,4,6,1,2];

function rotation(a,b){
    let ind;
    for(let i=0;i<b.length;i++){
        if(b[i] == a[0]){
            ind = i;
        }
    }
    if(!ind){
        console.log('not rotation');
        return; 
    }

    for(let i=1,j=ind;i<a.length;i++){
     if(a[i] == b[(j+i)%b.length]){
         continue;
     }
     else{
         console.log('not rotation');
         return;         
     }
    }

    console.log('rotation');
}

rotation(a,b);