var a = [100,56,5,6,102,58,101,57,7,103,59];

function count(){
   QuickSort(a);

   count = 1;
   for(i=1;i<a.length;i++){
       if(a[i] != a[i-1]+1){
          count++;
       }
   }

   console.log(a,count)
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

count();