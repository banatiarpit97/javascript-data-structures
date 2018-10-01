var a  = 'arpla';

function palindrome(){
    error = 0;
    for(let i=0;i<a.length/2;i++){
        if(a[i] != a[a.length-1-i]){
            error++;
        }
        if(error>1){
            console.log(error)
            
            console.log('false');
            return;
        }
    }
}

palindrome();