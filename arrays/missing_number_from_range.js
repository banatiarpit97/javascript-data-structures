a = [1,2,3,4,5,6,8,9,10];

function missing(){
    for(i=0;i<a.length;i++){
      if(a[i] !== i+1){
          console.log(i+1);
          return;
      }
    }
}

missing();