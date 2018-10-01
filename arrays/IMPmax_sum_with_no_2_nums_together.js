var a = [5,5,10,100,10,5];

function max(){
    let excl = 0;
    let incl = a[0];
    let excl_new;
    for(let i=1;i<a.length;i++){
        excl_new = excl>incl?excl:incl;

        incl = excl + a[i];
        excl = excl_new;
    }

    if(incl>excl){
        console.log(incl)
    }
    else{
        console.log(excl);
    }
}

max();