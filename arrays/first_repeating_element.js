var a = [10,5,3,4,3,5,6];

function repeat(){
    map = {};
    index = Number.MAX_SAFE_INTEGER;
    for(let i=0;i<a.length;i++){
        if(map[a[i]] && map[a[i]] < index){
            index = map[a[i]]
            elem = a[i];
        }
        else if(!map[a[i]]){
            map[a[i]] = i;
        }
    }

    console.log(elem, index)
}

repeat();