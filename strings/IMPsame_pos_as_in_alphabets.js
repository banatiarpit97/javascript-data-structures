var a = 'aBced';

function samePos(){
    count = 0;
    a = a.toLowerCase();
    for(let i=0;i<a.length; i++){
        if(i == a[i].charCodeAt(0) - 'a'.charCodeAt(0)){
            count++;
        }
    }

    console.log(count)
}

samePos();