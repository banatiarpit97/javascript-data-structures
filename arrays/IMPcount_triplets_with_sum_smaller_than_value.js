var a = [5,1,3,4,7];
var sum = 12;
function count(){
    let ans = 0;
    a = a.sort((a,b)=>{return a-b;})
    console.log(a)

    for(let i=0;i<a.length-2;i++){
        let left = i+1;
        let right = a.length-1;

        while(left<right){
           if(a[i]+a[left]+a[right] >= sum){
              right--;
           }
           else{
               ans += (right-left);
               left++;
           }
        }
    }

    console.log(ans)
}

count();