var a = 'remuneration';
var b = 'acquiesce';
var length = 5;

function string(){
    res = '';

    for(let i=0;i<length;i++){
        res += a[i];
    }

    for (let i = b.length-length; i < b.length; i++) {
        res += b[i];
    }

    console.log(res)
}

string();