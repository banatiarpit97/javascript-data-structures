var a = '}{{}}{{{';

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
        // console.log(this.items[this.items.length - 1]);        
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0 ? 0 : 1;
    }
    size() {
        return this.items.length;
    }
}



function remove(){
    var stac =  new stack();
    for(elem of a){
        if(elem == '{'){
           stac.push(elem);
        }
        else if(elem == '}'){
            if(stac.peek() == '{'){
                stac.pop();
            }
            else{
                stac.push(elem);
            }
        }
    }

    console.log(stac.items);
}

remove();