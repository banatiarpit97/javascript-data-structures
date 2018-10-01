var a = 'abcd';
var b = 'abcde';
function oneCharAway(a,b){
    let error = 0;
    if ((a.length - b.length > 1) || (-a.length + b.length > 1)){
        console.log('no');
        return;
    }

    if (a.length == b.length){
        for(i=0;i<a.length;i++){
            if(!(a[i] = b[i])){
                error +=1;
            }
        }
        if(error>1){
           console.log('no');
           return;
        }
        else {
            console.log('yes');
            return;
        }
    }

    if ((a.length - b.length == 1) || (-a.length + b.length == 1)) {
        for (i = 0,j=0; i < a.length, j<b.length;) {
            if (!(a[i] = b[j])){
                error +=1;
                if(a.length<b.length){
                    i++;
                }
                else{
                    j++;
                }
            }
            else{
                i++;j++;
            }
        }

        if(error > 1){
            console.log('no');
            return;
        }
        else{
            console.log('yes');
            return;
        }
    }
 }

 oneCharAway(a,b);