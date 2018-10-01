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



function reverse() {
    stac = new stack();
    stac.push(1)
    stac.push(6)
    stac.push(4)
    stac.push(3)
    stac.push(5)
    stac.push(2)

    console.log(stac);

    reverseRecursion()

    console.log(stac);


}

function reverseRecursion() {

    if (!stac.isEmpty()) {
        let p = stac.pop();
        reverseRecursion();
        pushToStack(p)
    }
}

function pushToStack(p) {
    var pp;
    if (stac.isEmpty()) {
        stac.push(p);
    }
    else {
        if(stac.peek()>p){
            pp = stac.pop();
            pushToStack(p);
            stac.push(pp);            
        }
        else{
            stac.push(p);
        }
    }
}



reverse();