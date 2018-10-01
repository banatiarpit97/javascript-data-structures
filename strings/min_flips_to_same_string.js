var a = '00011110001110';

function flips(){
    prev = null;count = 0;
    for(let i of a){
        if(i != prev){
            count++;
            prev = i;
        }
    }

    console.log(Math.floor(count/2));
}

flips();