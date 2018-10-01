var a = [0,0,1,0,1,0,1,1];

function swaps(){
    count = 0;
    temp = 0;
    for(let i=a.length-1;i>=0;i--){
        if(a[i] == 0){
            temp++;
        }
        else{
            count += temp;
        }
    }

    console.log(count);
}

swaps();
