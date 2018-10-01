var a = [3,2,10,4,40];
var x = 4;

function search(){
    let low = 0;
    let high = a.length-1;
    while(low<high){
        mid = (low+high)/2;

        if(x == a[mid]){
            console.log(mid);
            return;
        }
        else if (x == a[mid-1]) {
            console.log(mid-1);
            return;
        }
        else if (x == a[mid+1]) {
            console.log(mid+1);
            return;
        }
        else{
            if(x>a[mid]){
                low = mid+2;
            }
            if (x < a[mid]) {
                high = mid - 2;
            }
        }
    }
}

search();