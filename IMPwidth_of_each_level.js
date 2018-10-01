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

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        let equalData = function (elem) {
            return elem.data !== data;
        }
        this.children = this.children.filter(equalData);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    width() {
        let width = [0];
        let q = new queue;
        q.enqueue(this.root);
        q.enqueue('s');        
        while (!q.isEmpty()) {
            let cur = q.dequeue();
            console.log(cur)
            if(cur == 's' && q.size() > 1){
                q.enqueue('s');
                width.push(0);
            }
            else if(cur == 's'){
               console.log('width', width);         
            }
            else{
                ++width[width.length-1];
                // this.callbk(cur);
                for (let child of cur.children) {
                    q.enqueue(child);
                }
            }

        }
    }
}

let node = new Node(1);
node.add(5);
node.add(100);
node.add(555);
node.children[1].children.push(new Node(99));
node.children[0].children.push(new Node(9));
node.children[0].children.push(new Node(77));
node.children[1].children.push(new Node(66));
node.children[2].children.push(new Node(666));
let tree = new Tree();
tree.root = node;
console.log(tree.root);
tree.width();