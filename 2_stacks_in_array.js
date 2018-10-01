class stack {
    constructor() {
        this.items = [];
        this.i=0;this.j=this.items.length;
    }
    push1(item) {
        this.items[this.i] = item;
        this.i++;
        this.j++;
    }
    pop1() {
        if(this.i>0){
            this.j--;
            this.i--; 
            return this.items[this.i];
        }
        else{
            return 'Stack1 is empty';            
        }
    }
    push2(item) {
        this.items.push(item);
    }
    pop2() {
        if(this.items.length > this.j+1){
            return this.items.pop();
        }
        else{
            return 'Stack2 is empty';
        }
    }

}

var Stack = new stack();

Stack.push1(1)
Stack.push1(2)
Stack.push1(3)
Stack.push1(4)

Stack.push2(5)
Stack.push2(6)
Stack.push2(7)
Stack.push2(8)

console.log(Stack.pop1());
console.log(Stack.pop2());
console.log(Stack.pop2());
console.log(Stack.pop2());
console.log(Stack.pop2());
console.log(Stack.pop1());
console.log(Stack.pop1());
console.log(Stack.pop1());
console.log(Stack.pop1());


console.log(Stack.pop1());

console.log(Stack.items);


