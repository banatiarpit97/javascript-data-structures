let stack = (function(){
    const items = new WeakMap();   //now items is a private variable

    class Stack{
        constructor(){
            items.set(this, []);
        }
        push(item){
            let s = items.get(this);
            s.push(item);
        }
        pop(){
            let s = items.get(this);        
            return s.pop();
        }
        print(){
            console.log(items.get(this));
        }
        peek(){
            let s = items.get(this)
            return s[s.length - 1];
        }
        isEmpty(){
            return items.get(this).length == 0 ? 1 : 0;
        }
        size(){
            return items.get(this).length;
        } 
    }
    return Stack;
})()

var s = new stack();

s.push(1)
s.push(2)
s.push(3)
console.log(s.size())
console.log(s.isEmpty())
console.log(s.peek());
s.pop();
s.print();
// console.log(s.items);     undefined
// console.log(items);       error