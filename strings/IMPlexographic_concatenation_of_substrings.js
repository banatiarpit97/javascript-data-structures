var a = 'abc';

function subs(){
    arr = [];res = '';
    for(let i=0;i<a.length;i++){
        console.log(a[i])
        for(let len=1;len<=a.length-i;len++){
            arr.push(a.substr(i, len));
        }
    }

    console.log(arr.sort())

    for(let i of arr){  //a ab abc b bc c
        res += i;
    }
    console.log(res) 
}

subs();