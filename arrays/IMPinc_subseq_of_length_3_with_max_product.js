var a = [6,7,8,1,2,3,9,10];

function product(){
    let lsl = [];
    let lgr = [];
    let t1,t2,t3;

    for(let i=0;i<a.length;i++){
        let max = 0;
        for(let j=0;j<i;j++){
            if(a[j] < a[i] && a[j]>max){
                max = a[j];
            }
        }
        if(max != 0){
            lsl[i] = max;
        }
        else{
            lsl[i]=0;
        }
    }

    lgr[a.length-1] = 0;
    let max = a[a.length-1];
    for(let i = a.length-2;i>=0;i--){
        if(max>a[i]){
            lgr[i] = max;
        }
        else{
            max = a[i];            
            lgr[i] = 1;
        }
    }

    console.log(lsl, lgr);

    max = Number.NEGATIVE_INFINITY;
    for(let i=0;i<a.length-1;i++){
        if(lsl[i]*lgr[i]*a[i] > max){
            max = lsl[i] * lgr[i] * a[i];
            t1=lsl[i];
            t2=lgr[i];
            t3=a[i];
        }
    }

    console.log(max, t1,t3,t2);
}

product();