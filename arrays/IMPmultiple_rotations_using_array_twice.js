var a = [1,3,5,7,9];
var n = 3;

function rotate(){
    let temp = [];

    for(let i=0;i<a.length;i++){
        temp[i] = a[i];
        temp[i+a.length] = a[i];        
    }

    console.log(temp)
    for (let i = n % a.length; i < (n % a.length)+a.length;i++){
        console.log(temp[i]);
    }
}

rotate();