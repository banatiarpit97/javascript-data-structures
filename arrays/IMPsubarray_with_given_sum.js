var a = [15,2,4,8,9,5,10,23];
var sum = 23;

function check(){
    let s = a[0];start=0;
    for(let i=1;i<a.length;i++){
       while(s>sum && start < i-1){
           s = s - a[start];
           start++;
       }

       if(s==sum){
           console.log(start, i-1);
           return;
       }

       s = s + a[i];
    }
}

check();