var a = '4189';
sum = 0;
count = 0;

for(let i=0;i<a.length;i++){
    if(Number(a[i]) == 9){
        count++;
    }
    sum = Number(a[i]);
    for(let j=i+1;j<a.length;j++){
        sum += Number(a[j]);
        if(sum%9==0){
            count++;
        }
    }
}

console.log(count)