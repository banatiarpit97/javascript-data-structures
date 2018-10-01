class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class AVL{
    constructor(){
        this.root = null
    }

    insertRecursive(node, current){
        if (node.data < current.data) {
            if(!current.left){
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

    insert(data){
      let node = new Node(data);      
      if(this.root == null){
          this.root = node;
          return;
      }
      this.insertRecursive(node, this.root);    
    }

    height(node){
        if(node == null){
            return -1;
        }
        else{
            return Math.max(this.height(node.left), this.height(node.right))+1;
        }
    }

} 

var avl = new AVL();
avl.insert(8)
avl.insert(53)
avl.insert(3)
avl.insert(66)
avl.insert(5)
avl.insert(77)
avl.insert(9)

console.log(avl.root)
console.log(avl.height(avl.root))
