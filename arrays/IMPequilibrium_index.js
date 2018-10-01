var a = [-7,1,5,2,-4,3,0];

function equilibrium(){
    left = 0;
    sum = 0;

    a.forEach((e) => {sum += e;})
    for(let i=0;i<a.length;i++){
       sum -= a[i];
       if(left == sum){
           console.log(i);
           return;
       }   
       left += a[i];
    }
}

equilibrium();