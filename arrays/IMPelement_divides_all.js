var a = [25,20,5,10,101];

function divide(){
    min = Number.POSITIVE_INFINITY;
  for(let i of a){
      if(i<min){
          min = i;
      }
  }  

  for(let i of a){
      if(i % min == 0){
          continue;
      }
      else{
          console.log('false');
          return;
      }
  }
  console.log('true')
}

divide();