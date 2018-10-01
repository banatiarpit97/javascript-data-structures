var a = 'pink';
var b = 'kite';

function subsequence(){
    mapa = new Array(26);
    mapb = new Array(26);
    str = '';
    for(let i of a){
        index = i.charCodeAt(0) - 'a'.charCodeAt(0);
        mapa[index] = mapa[index]?++mapa[index]:1;
    }
    for (let i of b) {
        index = i.charCodeAt(0) - 'a'.charCodeAt(0);        
        mapb[index] = mapb[index] ? ++mapb[index] : 1;
    }

    for(let i=0;i<26;i++){
        if(mapb[i] && mapa[i]){
            var count = mapa[i] > mapb[i]?mapb[i]:mapa[i];
            var val = 'a'.charCodeAt(0) + i;                    
        }
        else{
            continue;
        }
        for(let j=0;j<count;j++){
            let v = String.fromCharCode(val);
            str += v;
        }
    }

    console.log(str)
}

subsequence();