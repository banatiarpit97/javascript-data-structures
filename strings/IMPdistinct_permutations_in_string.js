var a = 'arpitt';

function permutation(){
    let len = a.length;
    let map = {};
    let den = 1;

    for(let elem of a){
        map[elem] = map[elem]?map[elem]+1:1;
    }

    for(key in map){
        if(map[key]>1){
            den *= fact(map[key]);
        }
    }

    let num = fact(len);

    console.log(num/den);
}

function fact(n){
    let res = 1;
   for(let i=n;i>1;i--){
       res *= i;
   }

   return res;
}

permutation();
