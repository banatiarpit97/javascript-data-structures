class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insertRecursive(node, current) {
        if (node.data < current.data) {
            if (!current.left) {
                current.left = node;
                return;
            }
            this.insertRecursive(node, current.left)
        }
        else if (node.data > current.data) {
            if (!current.right) {
                current.right = node;
                return;
            }
            this.insertRecursive(node, current.right);
        }
    }

    insert(data, current) {
        let node = new Node(data);
        if (this.root == null) {
            this.root = node;
            return;
        }
        this.insertRecursive(node, this.root);
    }


    inOrderTraversal(callback) {
        this.inOrderRecursive(this.root, callback);
    }


    inOrderRecursive(node, callback) {
        if (node) {
            this.inOrderRecursive(node.left, callback);
            callback(node.data);
            this.inOrderRecursive(node.right, callback);
        }
    }

    print(node) {
        console.log(node.data);
    }
}

class Node1 {
    constructor(data, next = null, prev=null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class double_linked_list {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtLast(data) {
        let node = new Node1(data);
        if (!list.head) {
            list.head = node;
            list.length++;
            return;
        }
        let current = list.head;
        while (current.next) {       
            current = current.next;
        }
        current.next = node;
        node.prev = current;
        list.length++;
    }

}

var bst = new BST();
bst.insert(55)
bst.insert(60)
bst.insert(54)
bst.insert(34)
bst.insert(84)
bst.insert(58)
bst.insert(57)
bst.insert(59)

// console.log(bst.root);
// bst.inOrderTraversal(bst.print);
var list;
function convert(){
    list = new double_linked_list();
    bst.inOrderTraversal(list.insertAtLast)
    console.log(list);
}

convert();