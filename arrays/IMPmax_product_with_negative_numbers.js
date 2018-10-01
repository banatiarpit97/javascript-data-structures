var a = [4,6,8,2,-2,-10,-9];

function product(){
    QuickSort(a);
    
    console.log(a)

    let max = a[0] * a[1] > a[a.length - 1] * a[a.length - 2] ? a[0] * a[1] : a[a.length - 1] * a[a.length - 2];
    console.log(max);
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

product();