var a = 'arpit';
var b = 'banati';

function anagrams(){
    let mapa = {};
    let mapb = {};
    let count = 0;
    for (elem1 of a) {
        mapa[elem1] = mapa[elem1] ? mapa[elem1] + 1 : 1;
    }

    for (elem2 of b) {
        mapb[elem2] = mapb[elem2] ? mapb[elem2] + 1 : 1;
    }

    for(key in mapa){
        if (mapb[key] && mapa[key] > mapb[key]){
          count += (mapa[key]-mapb[key]);
        }
        else if(!mapb[key]){
          count += mapa[key];
        }
    }

    for (key in mapb) {
        if (mapa[key] && mapb[key] > mapa[key]) {
            count += (mapb[key] - mapa[key]);
        }
        else if (!mapa[key]) {
            count += mapb[key];
        }
    }

    console.log(count);
}

anagrams();