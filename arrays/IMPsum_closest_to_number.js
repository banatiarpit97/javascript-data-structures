var a = [1,3,4,7,10];
var x = 15;

function closest(){
    let first,second;
    let min = Number.POSITIVE_INFINITY;
    for(let i=0;i<a.length;i++){
        l = i+1;
        r = a.length-1;

        while(l<r){
            if(Math.abs(a[l]+a[r]-x) < min){
                min = Math.abs(a[l] + a[r] - x);
                first = a[l];
                second = a[r];
            }
            if (Math.abs(a[l] + a[r] - x) == x){
                console.log(0,a[l], a[r]);
                return;
            }
            else if (Math.abs(a[l] + a[r] - x) < x) {
                l++;
            }
            else {
                r--;
            }
        }
    }

    console.log(min, first, second)
}

closest();