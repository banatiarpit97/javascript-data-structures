var a = 'aaabbb';

function check(){
    i=0;count=0;
    while(i<a.length){
        if(a[i] == 'a'){
            count++;
        }
        else{
            break;
        }
        i++;
    }
    while (i < a.length) {
        if (a[i] == 'b') {
            count--;
        }
        else {
            break;
        }
        i++;
    }

    if(count == 0){
        console.log('true')
    }
    else{
        console.log('false')
    }
}

check();