var a = 'xxxyyzzkk';

function freq(){
    map = {};
    for (let i of a) {
        map[i] = map[i] ? map[i] + 1 : 1;
    }
    count = 0;
    first = null;
    firstCount = 0;
    secondCount = 0;
    second = null;
    for(let i in map){
        if(!first || map[i] == first){
            first = map[i];
            firstCount++;
        }
        else if(!second || map[i] == second){
            second = map[i];
            secondCount++;
        }
        else{
            console.log('false');
            return;
        }

        if(firstCount > 1 && secondCount > 1){
            console.log('false');
            return;
        }
        if(first && second && Math.abs(first - second) > 1){
            console.log('false');
            return;
        }
    }
    console.log('true')
}

freq();