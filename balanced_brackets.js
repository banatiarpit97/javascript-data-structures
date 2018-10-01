var a = '[()]{}{[()()]()}';

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
    for (elem of a) {
        if (elem == '{' || elem == '(' || elem == '[') {
            stac.push(elem);
        }
        else if (elem == '}' || elem == ')' || elem == ']') {
            let p = stac.pop();
            if ((elem == ')' && p != '(') || (elem == '}' && p != '{') || (elem == ']' && p != '[')){
               console.log('not balanced');
               return;
            }
        }
    }

    console.log('balanced');
}

balanced();