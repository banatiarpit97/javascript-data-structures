var a = [3,1,2,2,1,2,3,3];

var k = 4;

ratio = Math.floor(a.length/k);

function times(){
    map = {};
    for(let i of a){
        map[i] = map[i]?map[i]+1:1;
    }

    console.log(map)
    for(let i in map){
        if(map[i] > ratio){
            console.log(i);
        }
    }
}

times();