var a = [-10,-77,-66, 3, 5, ,7];

function fixed_point(){
    for (let i=0;i<a.length;i++){
        if(a[i] == i){
            console.log(i);
            return;
        }
    }
}

fixed_point();