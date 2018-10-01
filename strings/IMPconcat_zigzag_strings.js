var a = 'geeksforgeeks';
var n = 3;

function zigzag(){
    var arr = new Array(n);res = '';
    row = 0;direction = 'down';
    for(let i = 0;i<a.length;i++){
        if(!arr[row]){
            arr[row] = '';
        }
        arr[row] += a[i];
    
        if(direction == 'down'){
            row++;
        }
        else{
            row--;
        }
        if (row == 0) {
            direction = 'down';
        }
        if (row == n - 1) {
            direction = 'up';
        }

    }

    for(let i of arr){
        res += i;
    }
    console.log(res);
}

zigzag();