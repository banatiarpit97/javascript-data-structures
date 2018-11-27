function selection(...arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let min = arr[i]; 
        let minIndex = null;       
        for (j = i+1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        if(minIndex){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];            
        }
    }

    console.log(arr);
}

selection(2, 3, 4, 1, 8, 3, 5, 0, 99, 77);
