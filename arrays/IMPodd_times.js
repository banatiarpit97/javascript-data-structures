var a = [1, 2, 2, 3, 4, 5, 5,4,3];

function odd_times() {
    map = {};
    for (elem of a) {
        map[elem] ? map[elem] += 1 : map[elem] = 1;
    }

    for (let i in map) {
        if (map[i] % 2 == 1) {
            console.log(i);
            return;
        }
    }

    console.log('none');
    return;
}

function odd_times_xor(){
res = 0;
    for(elem of a){
        res = res ^ elem;
    }

    console.log(res);
}

odd_times_xor();