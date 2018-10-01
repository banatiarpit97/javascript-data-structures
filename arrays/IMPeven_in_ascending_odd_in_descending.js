var a = [1,2,3,5,4,7,10];

function sort(){
    for(let i=0;i<a.length;i++){
        if(a[i]%2 == 1){
            a[i] = a[i]*-1;
        }
    }
    QuickSort(a);

    console.log(a);
}

function QuickSort(arr) {
    quick(arr, 0, arr.length - 1)
}

function quick(arr, left, right) {
    if (arr.length > 1) {
        var index = partition(arr, left, right);

        if (left < index - 1) {
            quick(arr, left, index - 1);
        }
        if (right > index) {
            quick(arr, index, right);
        }
    }

}

function partition(arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++; right--;
        }
    }
    return left;
}

sort();