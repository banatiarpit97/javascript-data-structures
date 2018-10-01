var main  = 'arpit';
var sub = 'i';

function substring(){
    for(let i=0;i<=main.length-sub.length;i++){
        if(main[i] == sub[0]){
            j=1;
            if(sub.length == 1){
                console.log('true');
                return;
            }
            while(j<sub.length){
                if(main[i+j] != sub[j]){
                    break;
                }
                else{
                    j++;
                    if(j == sub.length){
                        console.log('true');
                        return;
                    }
                }
            }
        }
    }
}

substring();