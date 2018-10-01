var a = 'ArpiTb';
a = a.split('');

function convert(){
    for(let i=0;i<a.length;i++){
        if(a[i] >= 'a' && a[i] <= 'z'){
            a[i] = a[i].toUpperCase();
        }
        else if (a[i] >= 'A' && a[i] <= 'Z') {
            a[i] = a[i].toLowerCase();
        }
    }
}
console.log(a)
convert();
console.log(a)