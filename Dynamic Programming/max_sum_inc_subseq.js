function max(arr){
    let lis = new Array(arr.length);
    let max = Math.max(...arr)

    for (let i = 0; i < lis.length; i++) {
        lis[i] = arr[i];
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if ((arr[i] > arr[j]) && (lis[i] < (lis[j] + arr[i]))) {
                lis[i] = lis[j] + arr[i];
                if (lis[i] > max) {
                    max = lis[i];
                }
            }
        }
    }

    console.log(max)
}

max([10,5,4,3])