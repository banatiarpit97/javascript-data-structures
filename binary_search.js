function binary_search(arr, elem){
    arr.sort();
    left = 0;
    right = arr.length-1;
    while(left <= right){
        var mid = Math.floor((right + left / 2));
        if(elem < arr[mid]){
            right = mid-1;            
        }
        else if(elem > arr[mid]){
            left = mid +1;
        }
        else{
            return arr.indexOf(elem);
        }
    }
    return -1;
}

var index = binary_search([1,2,3,4,5,6,99], 4);
console.log(index);