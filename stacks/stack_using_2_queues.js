//can either make push operation costly or pop operation costly

// for pop

class queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.unshift(item);
    }
    dequeue() {
        return this.items.pop();
    }
    print() {
        console.log(this.items);
    }
    front() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0 ? 1 : 0;
    }
    size() {
        return this.items.length;
    }
}

class stack{
    constructor(){
        this.queue1 = new queue();
        this.queue2 = new queue();        
    }

    push(item){
        this.queue1.enqueue(item);

    }

    pop(){
        while (this.queue1.size() > 1) {
            // console.log(this.queue1.dequeue())
            this.queue2.enqueue(this.queue1.dequeue());
        }
        this.queue1.dequeue();
        while (!this.queue2.isEmpty()) {
            this.queue1.enqueue(this.queue2.dequeue());
        }
    }
}

var s = new stack();

s.push(1)
s.push(2)
s.push(3)
s.push(4)

console.log(s.queue1.items)

s.pop();

console.log(s.queue1.items)

