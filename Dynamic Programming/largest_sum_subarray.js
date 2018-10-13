function largest(arr){
    let max = arr[0];
    let cur = arr[0];

    for(let i=0;i<arr.length;i++){
        cur = Math.max(arr[i], cur+arr[i]);
        max = Math.max(max, cur);
    }

    console.log(max);
}

largest([-2, -3, 4, -1, -2, 1, 5, -3])