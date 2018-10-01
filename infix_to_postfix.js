var a = 'a+b*(c^d-e)^(f+g*h)-i';

var precendence = {'+':1,'-':1,'*':2,'/':2,'^':3};

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
    output = '';
   for(elem of a){
       if(elem >= 'a' && elem <= 'z'){
           output += elem;
       }

       else if(precendence[elem]){
           if(!precendence[Stack.peek()] || precendence[Stack.peek()] < precendence[elem]){
               Stack.push(elem)
           }
           else{
               while (precendence[Stack.peek()] >= precendence[elem]){
                   output += Stack.pop();
               }
               Stack.push(elem);
           }
       }

       else if(elem == '('){
           Stack.push(elem);
       }

       else if(elem == ')'){
           while(Stack.peek() != '('){
               output += Stack.pop();
           }
           Stack.pop()
       }
   }

   while(!Stack.isEmpty()){
       output += Stack.pop();
   }

   console.log(output)
}

postfix();