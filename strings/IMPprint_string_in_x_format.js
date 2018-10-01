var a = 'geeksforgeeks';

function x(){
    for(let i=0,j=a.length-1;i<a.length,j>=0;i++,j--){
        tmp = '';

        if(i<j){

            for(x=0;x<i;x++){
                tmp += ' ';
            }
            
            tmp += a[i];

            for(x=0;x<j-i-1;x++){
                tmp += ' ';
            }

            tmp += a[j];
        }
        
        if(i==j){
            for (x = 0; x < i; x++) {
                tmp += ' ';
            }
            tmp += a[i];
        }

        if (i>j) {
            for(x=j-1;x>=0;x--){
                tmp += ' ';
            }
            tmp += a[j];
            for (x = 0; x < i - j - 1; x++) {
                tmp += ' ';
            }

            tmp += a[i];
        }
        
        console.log(tmp);
    }
}

x();