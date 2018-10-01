var a = 'arpit';
var b = 'banati';

function remove(){
    let mapa = {};
    let mapb = {};
    let final = '';
    for (elem2 of b) {
        mapb[elem2] = mapb[elem2] ? mapb[elem2] + 1 : 1;
    }

    for(elem of a){
        if(!mapb[elem]){
            final += elem;
        }
    }

    console.log(final)
}

remove();