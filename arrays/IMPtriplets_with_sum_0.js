var a = [0,-1,2,-3,1];

function triplets(){
    a.sort();
    console.log(a);
    for(let i=0;i<a.length-1;i++){
        l=i+1;m=a.length-1;

        while(l<m){
            if(a[i]+a[l]+a[m] == 0){
                console.log(a[i], a[l++], a[m--]);
            }
            else if (a[i] + a[l] + a[m] > 0){
                m--;
            }
            else{
                l++
            }
        }
    }
}

triplets();