arr = [1,6,2,9,4,5,1,9,7]

function min(a,b){
    let in1=null,in2=null,tmp,minD = Number.MAX_SAFE_INTEGER;
    for(i=0;i<arr.length;i++){
        if (arr[i] == a){
          if(in2 != null){
              tmp = i-in2;
              if(tmp < minD){
                  minD = tmp;
              }
              in1 = i;  
          }
          else{
              in1 = i;
          }
          console.log(in1,in2)
          continue;
        }

        if (arr[i] == b) {
            console.log(in1, in2)            
            if (in1 != null) {
                tmp = i - in1;
                if (tmp < minD) {
                    minD = tmp;
                }
                in2 = i;                  
            }
            else{
                in2 = i;
            }
        }
    }

    console.log(minD)
}

min(1,9)