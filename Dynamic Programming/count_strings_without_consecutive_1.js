//Let a[i] be the number of binary strings of length i 
//which do not contain any two consecutive 1’s and which end in 0.
//Similarly, let b[i] be the number of such strings which end in 1.
//We can append either 0 or 1 to a string ending in 0, '
//but we can only append 0 to a string ending in 1

//we can also find this by (n+2)th fibonacci number
function count(n){
    let a = [], b= [];
    a[0] = b[0] = 1;

    for(let i=1;i<n;i++){
        a[i] = a[i-1]+b[i-1];
        console.log(a, b)

        b[i] = a[i-1];
    }
    console.log(a[n-1]+b[n-1])
}

count(3)