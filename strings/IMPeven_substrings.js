var number = '1234';  //12,2,1234,234,34,4

function even(){
    count = 0;
    for(let i=0;i<number.length;i++){
        if(number[i] % 2 ==0){
            count += i+1;
        }
    }

    console.log(count);
}

even();
