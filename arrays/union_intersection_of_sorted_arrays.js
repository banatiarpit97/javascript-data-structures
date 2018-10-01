a = [1,2,3,4,5,6];
b = [1,4,7,9,88,99,111];

function union_intersection(){
    union = [];
    intersection = [];
    let i=0,j=0;
while(i<a.length && j<b.length){
    if(a[i] == b[j]){
        intersection.push(a[i]);
            union.push(a[i])  
            i++;j++;      

    }
    else if(a[i] < b[j]){
        union.push(a[i])        
        i++;
    }
    else if (a[i] > b[j]) {
        union.push(b[j]);                  
        j++;
    }
    
}

while(i<a.length){
    union.push(a[i])
    i++;
}
while (j < b.length) {
    union.push(b[j]);
    j++;
}

console.log(intersection, union)

}

union_intersection();