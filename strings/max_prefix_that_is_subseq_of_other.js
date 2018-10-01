var a ='digger';
var b = 'biggerdiagram';

function prefix(){
    map = {};res = '';
    for(let i of b){
        map[i] = map[i]?map[i]+1:1;
    }
    console.log(map)
    

    for(let i of a){
        if(map[i]>0){
            res += i;
            map[i] = map[i]-1;
            console.log(map)
        }
        else{
            break;
        }
    }

    console.log(res)
}

prefix();