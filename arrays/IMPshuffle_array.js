let a = [1,2,3,4,5,6];

function shuffle(){
    let temp = Array.from(a);

    k = a.length;
    for(let i=0;i<a.length;i++){
        let r = Math.floor(Math.random()*k);
        a[i] = temp[r];
        k--;
        [temp[r], temp[temp.length - i-1]] = [temp[temp.length-i-1], temp[r]];
    }

    console.log(a);
}

shuffle();