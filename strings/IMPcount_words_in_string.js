var a = 'One two         three\n    four\tfive  '
for(elem of a){
    console.log(elem);
}

function count(){
    let count = 1,flag=0;
    for(let i=0;i<a.length;i++){
        if (a[i] == ' ' || a[i] == '\n' || a[i] == '\t'){
            flag = 1;
        }
        else if(a[i]){
            if(flag == 1){
                count++;
            }
            flag = 0;
        }
    }

    console.log(count);
}

count();