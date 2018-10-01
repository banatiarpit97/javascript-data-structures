var a = [10,20,30,40];

function subArr(){
    len = 1;count=0;
    for(i=0;i<a.length-1;i++){
        if(a[i+1] > a[i]){
            len++;
        }
        else{
            count += (len*(len-1))/2;
            len = 1;
        }
    }

    if(len > 1){
        count += (len * (len - 1)) / 2;        
    }

    console.log(count)
}

subArr();