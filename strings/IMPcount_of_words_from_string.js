var a = 'ab';

function count(){
    count = 1;

    if(a.length == 1){
        console.log(1);
        return;
    }

    if(a[0] == a[1]){
       count *= 1;
    }
    else{
        count *= 2;
    }

    for(let i=1;i<a.length-1;i++){
        if(a[i] == a[i+1] && a[i] == a[i-1]){
            count *= 1;
        }
        else if (a[i] == a[i + 1] || a[i] == a[i - 1] || a[i-1] == a[i + 1]){
            count *= 2;
        }
        else{
            count *= 3;
        }
    }

    if(a[a.length-1] == a[a.length-2]){
        count *= 1;
    }
    else{
        count *=2;
    }

    console.log(count);
}

count();