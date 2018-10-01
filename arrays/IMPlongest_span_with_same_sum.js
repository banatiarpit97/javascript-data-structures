a = [0,1,0,1,1,1,1];
b = [1,1,1,1,1,0,1];

function sum(a,b){
    
max = 0;
for(i=0;i<a.length;i++){
   sum1 = 0;sum2=0;len=0;
   for(j=i;j<a.length;j++){
     sum1 += a[j];
     sum2 += b[j];     
     if(sum1 == sum2){
       len = j-i+1;
     }
   }
    if (len > max) {
        max = len;
    }
}

return max;

}

sum = sum(a,b)
console.log(sum)