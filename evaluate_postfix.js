var a = '231*+9-';

var operators = { '+': 1, '-': 1, '*': 1, '/': 1};

class stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    print() {
        console.log(this.items);
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0 ? 1 : 0;
    }
    size() {
        return this.items.length;
    }
}

var Stack = new stack();

function postfix(){
    for(elem of a){
        if(!operators[elem]){
            Stack.push(elem);
        }

        else{
            tmp1 = Stack.pop();
            tmp2 = Stack.pop();
            res = operate(elem, tmp1, tmp2);
            Stack.push(res)            
        }
    }

    console.log(Stack.pop())
}

function operate(operator, value1, value2){
   if(operator == '+'){
       return Number(value1) + Number(value2);
   }
   else if (operator == '-') {
       return Number(value2) - Number(value1);
   }
   else if (operator == '*') {
       return Number(value1) * Number(value2);
   }
   else if (operator == '/') {
       return Number(value2) / Number(value1);
   }
}

postfix();