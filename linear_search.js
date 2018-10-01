function linear_search(arr, search){
    list = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] === search){
            list.push(i)
        }
    }
    return list.length?list:-1;
}

var index = linear_search([1,7,4,5,6,7], 7);

if(index == -1){
    console.log('item not found');
}
else{
    console.log('item found at', ...index)
    
}