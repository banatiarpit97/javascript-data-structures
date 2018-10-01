var a = "geeksforgeeks";

function second(){
    map = {};
    flag = 0;

    for(elem of a){
        map[elem] = map[elem]?map[elem]+1:1;
    }

    max = map[Object.keys(map)[0]];
    second = 0;    

    for(key in map){
        if(map[key] > max){
            second = max;
            key1 = prev;            
            max = map[key];
        }
        else if(map[key] > second && map[key] != max){
            second = map[key];
            key1 = key;
        }
        prev = key;
    }

    // for (key1 in map) {
    //     if (map[key1] > second && map[key1] < max) {
    //         second = map[key1];
    //     }
    // }

    console.log(key1)
}

second();