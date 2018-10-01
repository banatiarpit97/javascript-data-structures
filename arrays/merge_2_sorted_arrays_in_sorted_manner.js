var a = [1,5,9,16];
var b = [2,3,6,11,13,15,20,25];

function merge(){
    i=0;j=0;res = [];
    while(i<a.length || j<b.length){
        if(a[i] && b[j]){
            if(a[i] < b[j]){
                res.push(a[i]);
                i++;
            }
            else{
                res.push(b[j]);
                j++;
            }
        }
        else if(!a[i]){
            res.push(b[j++])
        }
        else if (!b[j]) {
            res.push(a[i++])
        }
    }

    console.log(res)
}

merge();