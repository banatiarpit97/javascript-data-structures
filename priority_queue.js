class element{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
    }
}

class priority_queue{
    constructor(){
        this.items = [];
    }

    enqueue(data, priority) {
        let elem = new element(data, priority);
        if(!this.items){
            this.items.push(elem);
        }
        else{
            for(let i=0;i<this.items.length;i++){
                if(priority < this.items[i].priority){
                    this.items.splice(i,0,elem);
                    return;
                }
            }
            this.items.push(elem);            
        }
    }
    dequeue() {
        return this.items.shift();
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

let q = new priority_queue();

q.enqueue(4, 4);
q.enqueue(8, 1);
q.enqueue(14, 7);
q.enqueue(80, 2);

q.print();