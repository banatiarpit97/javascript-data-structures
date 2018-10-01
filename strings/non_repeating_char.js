var a = "aabbccddgh";

function no_repeat(a){
    map = {};
    for(char of a){
      map[char] = map[char]?map[char]+1:1;
    }

    for(i in map){
        if(map[i] == 1){
            console.log(i);
            return;
        }
    }
    console.log('no character');
}

no_repeat(a);