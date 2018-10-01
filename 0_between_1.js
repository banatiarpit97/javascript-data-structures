var str = '11100100101';

function between(){
    for(let i=0;i<str.length;i++){
        if(str[i] == 0){
            if(str[i-1] == 1 && str[i+1] == 1){
              console.log('true',i);
              return;
            }
        }
    }
}

between();