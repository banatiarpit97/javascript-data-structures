var a = [6,1,2,3,4,5];

var x = 6;
function search(){
    let low = 0;
    let high = a.length;
    let partition;

    while(low<=high){
        if(low == high){
            partition = low % a.length;
            break;
        }

        mid = Math.floor((low+high)/2);
        if(a[mid] > a[mid-1] && a[mid]>a[mid+1]){
            partition = mid%a.length;
            break;
        }
        else if (a[mid] > a[mid - 1]){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }

    if(x<a[0]){
        var i = binary(a, partition+1, a.length);
    }
    else{
        i = binary(a, 0, partition)
    }

    console.log(partition, i)
}

function binary(arr, left, right){
        while (left <= right) {
            var mid = Math.floor((right + left / 2));
            if (x < arr[mid]) {
                right = mid - 1;
            }
            else if (x > arr[mid]) {
                left = mid + 1;
            }
            else {
                return arr.indexOf(x);
            }
        }
        return -1;
}

search();