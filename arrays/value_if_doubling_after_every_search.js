var a = [2,3,4,10,8,1];
var k = 2;

function value(){
    for(let i of a){
        if(i == k){
            k *= 2;
        }
    }

    console.log(k)
}

value();