var a = [1,1,2,2,2,2,3,4];

var x = 2;

function frequency(){
    let first = getFirst();
    let last = getLast(); 
 
    console.log(first)
    console.log(last-first+1);
}

function getFirst(){
    let low = 0;
    let high = a.length-1;
    let mid;
    while(low<=high){
        mid = Math.floor((low+high)/2);

        if(a[mid] == x && (a[mid-1]<x || mid==0)){
            return mid;
        }
        else if(a[mid] < x){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
}

function getLast() {
    let low = 0;
    let high = a.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (a[mid] == x && (a[mid + 1] > x || mid == a.length-1)) {
            return mid;
        }
        else if (a[mid] > x) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
}

frequency();