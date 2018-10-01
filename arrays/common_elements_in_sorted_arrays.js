var b = [1,2,5,7,9];
var a = [1,5,88,99,66,77,33,44,11];

function common(arr1, arr2){
    i=0,j=0;common = [];
    while(j<arr1.length && i < arr2.length){
        if(arr1[j] == arr2[i]){
            common.push(arr1[j]);
            i++;j++;
        }
        else{
            if(arr1[j]<arr2[i]){
                j++;
            }
            else{
                i++;
            }
        }
    }

    console.log(common)
}

common(a,b);