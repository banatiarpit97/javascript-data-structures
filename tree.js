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


class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
        let equalData = function(elem){
            return elem.data !== data;
        }
        this.children = this.children.filter(equalData);
    }
}
 


class Tree{
    constructor(){
        this.root = null;
    }

    callbk(elem) {
        console.log(elem.data);
    }

    traverseBFS(){
        let q = new queue;
        q.enqueue(this.root);
        while(!q.isEmpty()){
            let cur = q.dequeue();
            this.callbk(cur);          
            for(let child of cur.children){
                q.enqueue(child);  
            }
        }
    }

    BFSRecursive(q) {
        if (q.isEmpty()) {
            return;
        }
        let cur = q.dequeue();
        this.callbk(cur);
        for (let child of cur.children) {
            q.enqueue(child);
        }
        this.BFSRecursive(q)
    }

    traverseBFSRecurcive() {
        let q = new queue;
        q.enqueue(this.root);
        this.BFSRecursive(q);     
    }

    traverseDFS() {
        let s = new stack;
        s.push(this.root);
        while (!s.isEmpty()) {
            let cur = s.pop();
            this.callbk(cur);
            for (let child of cur.children.reverse()) {
                s.push(child);
            }
        }
    }

    DFSRecursive(s) {
        if (s.isEmpty()) {
            return;
        }
        let cur = s.pop();
        this.callbk(cur);
        for (let child of cur.children) {
            s.push(child);
        }
        this.DFSRecursive(s)
    }

    traverseDFSRecurcive() {
        let s = new stack;
        s.push(this.root);
        this.DFSRecursive(s);
    }

    ways_to_traverse_n_ary_tree(){   //multiply factorial of chilren count of each node
        let q = new queue();
        q.enqueue(this.root);
        let count = 1;

        while(!q.isEmpty()){
            let node = q.dequeue();
            count *= fact(node.children.length);
            for(let child of node.children){
                q.enqueue(child);
            }
        }
        console.log(count)
    }
}

function fact(n){      
    if(n == 0 || n == 1){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}

let node = new Node(1);
node.add(5);
node.add(100);
node.children[1].children.push(new Node(99));
node.children[0].children.push(new Node(9));
node.children[0].children.push(new Node(77));
node.children[0].children.push(new Node(177));
let tree = new Tree();
tree.root = node;
tree.ways_to_traverse_n_ary_tree()
// console.log(tree.root);
// tree.traverseDFSRecurcive();