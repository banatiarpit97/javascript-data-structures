var s = '( ((X)) (((Y))) )';

function depth(){
    max = 0;
    count = 0;
    for(elem of s){
        if(elem == '('){
            count++;
        }
        else if(elem == ')'){
            if(count <= 0){
                console.log('invalid string');
                return;
            }
            if(count > max){
                max = count;
            }
            count--;
            
        }
    }

    console.log(max);
}

depth();