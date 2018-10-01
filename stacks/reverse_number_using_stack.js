var a = 2314;
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


function reverse(){
    var s = new stack();
    while(a>0){
        temp = a%10;
        s.push(temp);
        a = Math.floor(a/10);
    }
    
    res = 0;i=1;
    while(!s.isEmpty()){
        res = s.pop()*i + res;
        i *=10;
    }

    console.log(res)
}

reverse();