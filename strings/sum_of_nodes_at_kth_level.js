var a = '(0(5(6()())(4()(9()())))(7(1()())(3()())))';
var k=2;

function sum(){
    level = -1;
    sum = 0;
    for(let i of a){
        if(i == '('){
            level++;
        }
        else if(i == ')'){
            level--;
        }
        else{
            if(level == k){
                sum += Number(i);
            }
        }
    }
    console.log(sum);
}

sum();