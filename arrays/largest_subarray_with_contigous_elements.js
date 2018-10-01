var a = [1,56,57,58,90,92,94,93,91,45];

function contigous(){
    let len = 1;
    for(let i=0;i<a.length-1;i++){
        let mn = a[i];
        let mx = a[i];

        for(let j=i+1;j<a.length;j++){
            if(a[j] > mx){
                mx = a[j];
            }
            if (a[j] < mn) {
                mn = a[j];
            }

            if((mx-mn) == (j-i)){
                if((mx-mn+1) > len){
                    len = mx-mn+1;
                }
            }
        }
    }

    console.log(len)
}

contigous();