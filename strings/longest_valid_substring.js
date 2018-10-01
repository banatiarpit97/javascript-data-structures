var a = '()(()))()';

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
        return this.items.length == 0 ? 0 : 1;
    }
    size() {
        return this.items.length;
    }
}



function balanced() {
    var stac = new stack();
    count = 0;
    for (elem of a) {
        if (elem == '(') {
            stac.push(elem);
        }
        else if (elem == ')') {
            let p = stac.pop();
            if(p=='('){
                count += 2;
            }
            else{
                break;
            }
        }
    }

    console.log(count);
}

balanced();