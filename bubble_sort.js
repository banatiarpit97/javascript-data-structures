function bubble(...arr){
    for(let i =0;i<arr.length;i++){
        for(j=0;j<arr.length-i-1;j++){
            if (arr[j]>arr[j+1]) {
                [arr[j], arr[j + 1]] = [arr[j+1], arr[j]];
            }
        }
}

    console.log(arr);
}

bubble(2,3,4,1,8,3,5,0,99,77);
