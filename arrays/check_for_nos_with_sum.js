var a = [1,4,45,6,10,-8];

function sum(){
    map = {};
    sum = 16;

    for(elem of a){
        if(map[sum - elem]){
            console.log([elem, sum-elem]);
            return;
        }
        else{
            map[elem] = 1;
        }
    }
}

sum();