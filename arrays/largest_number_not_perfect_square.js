var a = [16,20,25,2,3,10];

function perfect(){
    max = 0;
    for(i of a){
        if(Math.sqrt(i) != Math.floor(Math.sqrt(i)) && i > max){
            max = i;
        }
    }

    console.log(max)
}

perfect();