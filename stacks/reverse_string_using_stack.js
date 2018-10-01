var str = 'arpit';

function reverse(){
    stack = [];reversed = '';
    for(let i=0;i<str.length;i++){
       stack.push(str[i]);
    }

    console.log(stack)

    while(stack.length){
        reversed += stack.pop();
    }
    console.log(reversed)

}
reverse()