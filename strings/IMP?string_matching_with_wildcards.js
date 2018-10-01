var a = 'arpit';
var b = '*r*?t';

function match(){
    let i = 0;j=0;
    while(i<a.length || j < b.length){
        if(a[i] == b[j]){
            i++;j++;
        }
        else if (a[i] == '?' || b[j] == '?'){
            i++;j++;
        }
        else if(a[i] == '*'){
            if(a[i+1] == b[j+1]){
                i+=2;j+=2;
            }
            else{
                j++;
                if (j >= b.length - 1 && i < a.length - 1) {
                    console.log('false');
                    return false;
                }
            }
        }
        else if (b[j] == '*') {
            if (a[i + 1] == b[j + 1] || a[i+1] == '?' || b[j+1] == '?') {
                i += 2; j += 2;
            }
            else {
                i++;
                if(i >= a.length-1 && j<b.length-1){
                    console.log('false');
                    return false;        
                }
            }
        }
        else{
            console.log('false');
            return false;
        }
    }
}

match();