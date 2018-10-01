var a = [1,2,3,4,5,6,7,8,9,10,11,12];
k = 3;

function rotate(){
    let temp;
   let g = gcd(a.length, k);
   console.log(g);

   for(let i=0;i<g;i++){
       temp = a[i];
       j = i;

       while(1){
           l = j + k;
           if (l >= a.length) {
               l = l - a.length;
           }
           if(l==i){
               break;
           }

           a[j] = a[l];
           j = l;
       }
       a[j] = temp;
   }

   console.log(a)
}

function gcd(m,n){
    for(let i=n;i<=m*n;i=i*n){
        if(m%i == 0){
            return i;
        }
    }
}

rotate();