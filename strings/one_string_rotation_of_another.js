var a = 'arpit';
var b = 'pitlr';

function rotation(){
    if(a.length != b.length){
        console.log('false');
        return;
    }
    for(let i=0;i<b.length;i++){
        if(b[i] == a[0]){
            var k = 1;
            while(k<a.length){
                if(b[(i+k)%b.length] == a[k]){
                    k++;
                }
                else{
                    break;
                }
            }
        }
        if( k== a.length){
            console.log('true');
            return;
        }
    }
    console.log('false');
    return;
}

rotation();