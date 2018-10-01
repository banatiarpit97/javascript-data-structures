var a = [1,2,2,3,4,5,5,5,6,6,6,6,6,6,7,8,9,9,9];

function remove(){
    let ne  = [];
    let prev = null;
    for(elem of a){
      if(prev == elem){
          continue;
      }
      else{
        ne.push(elem);
        prev = elem;
      }
    }

    console.log(ne)
}

remove();