var char = 'e';
var count = 2;
var str = 'geeksforgeeks';

function print(){
    res = '';flag = true;
    for(let i of str){
        if(flag){
            if(i == char){
                count--;
                if(count == 0){
                    flag = false;
                }
            }
        }
        else{
            res += i;
        }
    }

    console.log(res)
}

print();