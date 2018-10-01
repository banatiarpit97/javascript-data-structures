var a  = 'arpit';
var b = 'banati';

function common(){
    let mapa = {};
    let mapb = {};
    let res = [];    
    for(elem1 of a){
        mapa[elem1] = mapa[elem1]?mapa[elem1]+1:1;
    }

    for (elem2 of b) {
        mapb[elem2] = mapb[elem2] ? mapb[elem2] + 1 : 1;
    }

    for (key in mapa){
        if(mapb[key]){
            res.push(key);
        }
    }

    res.sort();
    console.log(res)
}

common();