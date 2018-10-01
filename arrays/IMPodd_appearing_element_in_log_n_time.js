var a = [1,1,2,2,1,1,2,2,13,1,1,40,40,13,13];

function odd(){
    let low=0, high = a.length-1;
   while(low<=high){
       if(low == high){
           console.log(a[low]);
           return;
       }

       let mid = Math.floor((low+high)/2);
       if(mid%2 == 0){
           if(a[mid] == a[mid+1]){
               low = mid+2;
           }
           else{
               high = mid;
           }
       }
       else if (mid % 2 != 0) {
           if (a[mid] == a[mid - 1]) {
               low = mid + 1;
           }
           else {
               high = mid-1;
           }
       }
   }
}

odd();