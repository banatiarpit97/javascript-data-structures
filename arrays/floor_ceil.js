var a =[1,2,8,10,12,19];
x = 3;

function floor_ceil(){
    floor = Number.MIN_SAFE_INTEGER;
    ceil = Number.MAX_SAFE_INTEGER;
    for(elem of a){
        if(elem == x){
            console.log([elem,elem]);
            return;
        }
        else if(elem > x){
            if(elem < ceil){
                ceil = elem;
            }
        }
        else if (elem < x) {
            if (elem > floor) {
                floor = elem;
            }
        }
    }

    console.log([floor, ceil]);
    return;

}

floor_ceil();