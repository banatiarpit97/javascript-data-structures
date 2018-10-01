var a = [1,4,5,7];
var b = [10,20,30,40];
var x = 38;

function closest(){
   let l = 0;
   let r = b.length-1;
   let min = Number.POSITIVE_INFINITY;
   let temp1, temp2;

   while(l<a.length && r>0){
       if (Math.abs(a[l] + b[r] - x) < min){
           temp1 = a[l];
           temp2 = b[r];
           min = Math.abs(a[l] + b[r] - x)
       }

       if (a[l] + b[r] < x) {
           l++;
       }
       else{
           r--;
       }
   }

   console.log(min, temp1, temp2);
}

closest();