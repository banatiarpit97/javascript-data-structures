//cpnvert string to number

var a = '112';

function atoi(){
    res = 0;
    for(let i of a){
        res = res*10 + Number(i);
    }

    console.log(res)
}

atoi();