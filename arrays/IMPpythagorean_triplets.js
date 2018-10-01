var a = [3,1,4,6,5];

function pythagorean(){
    for(let i=0;i<a.length;i++){
      a[i] *= a[i]; 
    }

  QuickSort(a);

    for(let i=a.length-1;i>0;i--){
      let sum  = a[i];
      let j = 0;
      let k = i-1;

      while(j<k){
        console.log(a[j],a[k],sum)
        if((a[j] + a[k]) == sum){
          console.log('true');          
          return [a[j], a[k], a[i]];
        }
        else if (a[j] + a[k] < sum){
          j++;
        }
        else if (a[j] + a[k] > sum) {
          k--;
        }
      }
    }
    console.log('false');

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

pythagorean();