var a = [1,2,3,4,5,6,7,1,1,1,1,1,1];

function majority(){
    map = {};
    for (elem of a){
        map[elem]?map[elem]+=1:map[elem]=1;
    }

    for(let i in map){
        if(map[i] > a.length/2){
            console.log(i);
            return;
        }
    }

    console.log('none');
    return;
}

majority();