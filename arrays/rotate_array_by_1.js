var a = [1,2,3,4,5];

function rotate(){
    let temp = a[a.length-1];

    for(i=a.length-1;i>0;i--){
        a[i] = a[i-1];
    }
    a[0] = temp;

    console.log(a);
}

rotate();