var a = [100,180,260,310,40,535,695];

function buysell(){
    let mn,mx;
    for(let i=0;i<a.length;i++){
        if((!mn) && (a[i] < a[i+1])){
            mn = a[i];
        }
        if((mn && a[i]>a[i+1]) || (i==a.length-1)){
            mx = a[i];
            console.log(mn,mx);
            mn = null;
            mx = null;
        }
    }
}

buysell();