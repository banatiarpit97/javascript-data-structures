var a = 'arpit';
a = a.split('');

function reverse(){
    for(let i=0;i<a.length/2;i++){
        let start = i;
        let end = a.length - i -1;

        a[start] ^= a[end];
        a[end] ^= a[start]; 
        a[start] ^= a[start];          
    }

    console.log(a);
}

reverse();