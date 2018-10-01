var a = [1,5,7,-1];
sum = 6;

function count(){
    count = 0;
    map = {};

    for(let i of a){
        if(map[sum-i]){
            count++
        }
        map[i] = 1;
    }

    console.log(count)
}

count();