//if string is palindrome then 1 removal else 2 removal

var a = '10010001';

function remove(){
    flag = 0;
    for(let i=0;i<a.length/2;i++){
        if(a[i] == a[a.length-i-1]){
            continue;
        }
        else{
            flag = 1;
        }
    }
    if(flag){
        console.log(2);
    }
    else{
        console.log(1)
    }
}

remove();