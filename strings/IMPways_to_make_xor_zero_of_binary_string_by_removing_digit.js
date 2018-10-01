var a = '10010101001';

function xor(){
    count0=0;count1=0;
    for(let i of a){
       i==0?count0++:count1++;
    }

    if(count0 % 2 == 1 && count1 % 2 == 0){
        console.log(count0);
    }
    else if (count1 % 2 == 1 && count0 % 2 == 0) {
        console.log(count1);
    }
    else{
        console.log('none');
    } 
}

xor();