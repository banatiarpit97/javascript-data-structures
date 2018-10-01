var a = [1,3,20,4,1,0];

function peak(){
    findPeak(a,0, a.length-1);

}

function findPeak(arr,low, high){
  mid = Math.floor((low+high)/2);
    if ((mid == 0 || a[mid] >= a[mid - 1]) && (mid == arr.length-1 ||a[mid] >= a[mid + 1])){
        console.log(a[mid]);
        return;
    }
    else if(a[mid] < a[mid-1]){
        findPeak(arr, mid+1, high);
    }
    else if (a[mid] < a[mid + 1]) {
        findPeak(arr, low, mid-1);
    }
}

peak();