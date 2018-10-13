//a subsequence of arr[] is called Bitonic if it is first increasing, then decreasing.
//lis[i] ==> Longest Increasing subsequence ending with arr[i] 
//lds[i] ==> Longest decreasing subsequence starting with arr[i]

function lbs(arr){
    let lis = new Array(arr.length);
    let lds = new Array(arr.length);

    for(let i=0;i<lis.length;i++){
        lis[i] = lds[i] = 1;
    }

    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if((arr[i] > arr[j]) && (lis[i]<(lis[j]+1))){
                lis[i] = lis[j]+1;
            }
        }
    }

    for (let i = arr.length-2; i >= 0; i--) {
        for (let j = arr.length-1; j > i; j--) {
            if ((arr[i] > arr[j]) && (lds[i] < (lds[j] + 1))) {
                lds[i] = lds[j] + 1;
            }
        }
    }

    let max = Number.NEGATIVE_INFINITY;
    for(let i=0;i<arr.length;i++){
        if(lis[i]+lds[i]-1 > max){
            max = lis[i] + lds[i] - 1;
        }
    }
    console.log(max)
}

lbs([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])