var a = [88,105,3,2,200,10];

function missing() {
    let check = new Array(100);
    for(i in a){
        if(a[i] >= 0 && a[i] <= 99){
            check[a[i]] = 1;
        }
    }

    let temp = null,j;
    for(j = 0;j<check.length;j++){
        if(!check[j] && temp == null){
            temp = j;
        }
        else if(check[j]){
            if(temp != null){
                s = temp + '-'+(j-1);
                console.log(s);
            }
            temp = null;
        }
    }
    if (temp != null) {
        s = temp + '-' + (j - 1);
        console.log(s);
    }
}

missing();