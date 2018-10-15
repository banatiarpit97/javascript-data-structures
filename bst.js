class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
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

class BST{
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

    findRecursive(data, current){
        if(data == current.data){
            console.log('found');
            console.log(current);
            return;
        }

        if (data < current.data) {
            if (!current.left) {
                console.log('not found');
            }
            else {
                this.findRecursive(data, current.left);
            }
            return;
        }

        if (data > current.data) {
            if (!current.right) {
                console.log('not found');
            }
            else {
                this.findRecursive(data, current.right);
            }
            return;
        }
    }

    find(data){
        if(!this.root){
            console.log('not found');
            return;
        }
        else{
            this.findRecursive(data, this.root);
        }
    }

    findMin(){
        if(!this.root){
            console.log('empty tree')
            return;
        }
        else{
            let node = this.root;
            while(node.left){
                node = node.left;
            }
            console.log('min element is', node.data);
        }

    }

    findMax() {
        if (!this.root) {
            console.log('empty tree')
            return;
        }
        else {
            let node = this.root;
            while (node.right) {
                node = node.right;
            }
            console.log('max element is', node.data);
        }

    }

    validateRecursive(node, min=null,max=null){                      //V IMP
        if(max != null && node.left > max){
            console.log('not validated');
            return false;
        }
        if (min != null && node.right < min) {
            console.log('not validated');            
            return false;
        }

        if(node.left){
            if (!this.validateRecursive(node.left, min, node.data)){
                console.log('not validated');                
                return false;
            }
        }
        if (node.right) {
            if (!this.validateRecursive(node.right, node.data, max)) {
                console.log('not validated');                
                return false;
            }
        }

        console.log('validated');        
        return true;
    }

    validate(){
        this.validateRecursive(this.root);
    }

    inOrderTraversal(callback){
        this.inOrderRecursive(this.root, callback);
    }


    inOrderRecursive(node, callback){
        if (node) {
            this.inOrderRecursive(node.left, callback);
            callback(node);
            this.inOrderRecursive(node.right, callback);
        }
    }

    preOrderTraversal(callback) {
        this.preOrderRecursive(this.root, callback);
    }


    preOrderRecursive(node, callback) {
        if (node) {
            callback(node);
            this.preOrderRecursive(node.left, callback);            
            this.preOrderRecursive(node.right, callback);
        }
    }

    postOrderTraversal(callback) {
        this.postOrderRecursive(this.root, callback);
    }


    postOrderRecursive(node, callback) {
        if (node) {
            this.postOrderRecursive(node.left, callback);
            this.postOrderRecursive(node.right, callback);
            callback(node);        
        }
    }
 
    remove(data){                                                 //IMP
        let n = this.findToRemove(data, this.root);
        if(n == 0){
            console.log('node not found');
        }
        else if(n){
            node.data = null;
            console.log(this.root);
        }
    }

    findToRemove(data, current){
        if(data == current.data){
            if(!current.left && !current.right){
                current.data = null;
            }
            else if(!current.left){
                current.data = current.right.data;
                current.right = null;
            }
            else if (!current.right) {
                current.data = current.left.data;
                current.left = null;
            }
            else{
                let tmp = current.right;
                while(tmp.left){
                    tmp = tmp.left;
                }
                current.data = tmp.data;
                this.findToRemove(tmp.data, current.right)
            }
        }
        else if(data<current.data && current.left){
            this.findToRemove(data, current.left);
        }
        else if(data<current.data){
            return 0;
        }
        else if (data > current.data && current.right) {
            this.findToRemove(data, current.right);
        }
        else if (data > current.data) {
            return 0;
        }
    }

    is_bst(node,lower_lim=null, upper_lim = null){
        if(lower_lim != null && node.value > lower_lim){
            console.log('false')
            return false;
        }
        if (upper_lim != null && node.value < upper_lim) {
            console.log('false')            
            return false;
        }

        let is_left_bst = true;
        let is_right_bst = true;
        
        if(node.left){
            this.is_bst(node.left,lower_lim,node.value);
        }
        if (node.right) {
            this.is_bst(node.right, node.value, upper_lim);
        }

        return is_left_bst && is_right_bst;
    }

    lowest_common_ancestor(root, i, j){                                        //IMP
        let path_to_first = this.path_to_node(root, i);
        let path_to_second = this.path_to_node(root, j);
        console.log(path_to_first, path_to_second);
        
        if(!path_to_first || !path_to_second){
            return null;
        }

        let lca = null;
        while(path_to_first.length > 0 && path_to_second.length > 0){
            let first_pop = path_to_first.pop();
            let second_pop = path_to_second.pop();
            
            if(first_pop == second_pop){
                lca = first_pop;
            }
            else{
                break;
            }

        }
        return lca;
        
    }

    path_to_node(root, value) {            //V IMP
        if(root == null){
            return null;
        }
        if(root.data == value){
            return [root.data];
        }

        let left_path = this.path_to_node(root.left, value);
        if(left_path){
            left_path.push(root.data);
            return left_path;
        }
        let right_path = this.path_to_node(root.right, value);  
        if (right_path) {
            right_path.push(root.data);
            return right_path;
        }
        return null;
    }

    lowest_common_ancestor_easy(x,y){
        let current = this.root;
        while(current){
            if (x > current.data && y > current.data){
                current = current.right;
            }
            if (x < current.data && y < current.data) {
                current = current.left;
            }
            else{
                break;
            }
        }
        console.log(current.data)
    }

    iterative_in_order(){
        let s1 = new stack();
        let current = this.root;
        let done = false;

        while(!done){
            if(current){
                s1.push(current);
                current = current.left;
            }
            else{
                if(!s1.isEmpty()){
                    current = s1.pop();
                    console.log(current.data)
                    current = current.right;
                }
                else{
                    done = true;
                }
            }
        }
        s1.push(current);
    }

    inorder_traversal_without_recursion_and_stack_with_parent_pointer() {
        let node = this.root;
        while (node) {
            if (!leftdone) {
                while (node.left) {
                    node = node.left;
                }
                console.log(node.data)
                leftdone = true;
            }

            if (node.right) {
                leftdone = false;
                node = node.right;
            }
            else if (node.parent) {
                while (node.parent && node.parent.right == node) {
                    node = node.parent;
                }
                if (!node.parent) {
                    break;
                }
                node = node.parent;
            }
            else {
                break;
            }
        }
    }

    iterative_pre_order(){
        let s1 = new stack();
        s1.push(this.root);


        while(!s1.isEmpty()){
            let p = s1.pop();
            console.log(p.data);
            if (p.right) {
                s1.push(p.right)
            }
            if(p.left){
                s1.push(p.left)
            }
        }
    }

    iterative_post_order(){
        let s1 = new stack();
        let s2 = new stack();
        s1.push(this.root);

        while(!s1.isEmpty()){
            let p = s1.pop();
            s2.push(p.data);

            if (p.left) {
                s1.push(p.left)
            }
            if (p.right) {
                s1.push(p.right)
            }

        }

        console.log('s2', s2.items);
    }

    complete_or_not(){
        let q = new queue();
        q.enqueue(this.root);
        let flag = false;

        while(!q.isEmpty()){
            var elem = q.dequeue();

            if(elem.left){
                if(flag){
                    console.log('false');
                    return;
                }

                q.enqueue(elem.left);
            }
            else {
                flag = true;
            }

            if (elem.right) {
                if (flag) {
                    console.log('false');
                    return;
                }

                q.enqueue(elem.right);
            }
            else {
                flag = true;
            }
        }

        console.log('true')
    }

    spiral_order_traversal(){                     //IMP
        let s1 = new stack();
        let s2 = new stack();
        
        s1.push(this.root);

        while(!s1.isEmpty() || !s2.isEmpty()){
            while(!s1.isEmpty()){
                let elem = s1.pop();
                console.log(elem.data);
                if(elem.right){
                    s2.push(elem.right);
                }
                if (elem.left) {
                    s2.push(elem.left);
                }
            }
            while (!s2.isEmpty()) {
                let elem = s2.pop();
                console.log(elem.data);
                if (elem.left) {
                    s1.push(elem.left);
                }
                if (elem.right) {
                    s1.push(elem.right);
                }
            }
        }
    }

    reverse_level_order(){
        let current = this.root;
        let q = new queue();
        let s = new stack();
        let temp;
        q.enqueue(current);
        while(!q.isEmpty()){
            temp = q.dequeue();
            s.push(temp);
            if(temp.right){
                q.enqueue(temp.right);
            }
            if(temp.left){
                q.enqueue(temp.left);
            }
        }

        while(!s.isEmpty()){
            console.log(s.pop().data);
        }
    }

    count_half_nodes() {
        let current = this.root;
        let q = new queue();
        let temp;
        let count = 0;
        q.enqueue(current);

        while (!q.isEmpty()) {
            temp = q.dequeue();
            console.log(temp.data)
            if (temp.left && !temp.right) {
                count++;
                q.enqueue(temp.left);
            }
            else if (temp.right && !temp.left) {
                count++;
                q.enqueue(temp.right);
            }
            else if (temp.right && temp.left) {
                q.enqueue(temp.left);
                q.enqueue(temp.right);
            }
        }
        console.log(count)
    }

    count_leaf_nodes() {
        let current = this.root;
        let q = new queue();
        let temp;
        let count = 0;
        q.enqueue(current);

        while (!q.isEmpty()) {
            temp = q.dequeue();
            if (temp.left && !temp.right) {
                q.enqueue(temp.left);
            }
            else if (temp.right && !temp.left) {
                q.enqueue(temp.right);
            }
            else if (temp.right && temp.left) {
                q.enqueue(temp.left);
                q.enqueue(temp.right);
            }
            else{
                count++;
            }
        }
        console.log(count)
    }

    recursive_count_leaf_nodes(node){          //IMP
        if(!node){
            return 0;
        }
        else if(!node.left && !node.right){
            return 1;
        }

        return this.recursive_count_leaf_nodes(node.left)+this.recursive_count_leaf_nodes(node.right)
    }

    check_for_identical_bst(tree){
        let q1 = new queue();
        let q2 = new queue();

        let tmp1;
        let tmp2;
        q1.enqueue(this.root);
        q2.enqueue(tree.root);

        while(!q1.isEmpty() || !q2.isEmpty()){
            tmp1 = q1.dequeue();
            tmp2 = q2.dequeue();
            if(tmp1 != tmp2){
                console.log("false")
                return false;
            }
            if(tmp1.left && tmp2.left){
                q1.enqueue(tmp1.left)
                q2.enqueue(tmp2.left)
            }
            else if (tmp1.left || tmp2.left) {
                console.log("false")
                return false;
            }
            if (tmp1.right && tmp2.right) {
                q1.enqueue(tmp1.right)
                q2.enqueue(tmp2.right)
            }
            else if (tmp1.right || tmp2.right) {
                console.log("false")
                return false;
            }
        }
        console.log("true");
    }

    height_of_binary_tree(){
        let q = new queue();
        q.enqueue(this.root);
        let height = 0;
        let nodeCount;
        let tmp;

        while(1){
            if(q.size() == 0){
                console.log(height)
                return height;
            }
            height++;

            nodeCount = q.size();
            while(nodeCount > 0){
                let tmp = q.dequeue();
                if(tmp.left){
                    q.enqueue(tmp.left)
                }
                if (tmp.right) {
                    q.enqueue(tmp.right)
                }
                nodeCount--;
            }
        }
    }

    recursive_height_of_binary_tree(node){
        if(!node){
            return 0;
        }
        else{
            let l = this.recursive_height_of_binary_tree(node.left);
            let r = this.recursive_height_of_binary_tree(node.right);
        
            return (l >= r)?(l+1):(r+1);
        }
    }

    delete_all_nodes_of_bst(){
        let q = new queue();
        q.enqueue(this.root);
        let node;

        while(!q.isEmpty()){
            node = q.dequeue();
            if(node.left){
                q.enqueue(node.left);
                node.left = null;
            }
            if (node.right) {
                q.enqueue(node.right);
                node.right = null;
            }
        }
    }

    recursive_delete_all_nodes_of_bst(node) {
        if(!node){
            return 0;
        }
        else{
            this.recursive_delete_all_nodes_of_bst(node.left);
            this.recursive_delete_all_nodes_of_bst(node.right);
            node.left = null;
            node.right = null;
        }
    }

    iterative_search_in_binary_tree(x){
        let current = this.root;
        let q = new queue();
        let temp;
        q.enqueue(current);

        while (!q.isEmpty()) {
            temp = q.dequeue();
            if(temp.data == x){
                console.log('true');
                return;
            }
            if (temp.left) {
                q.enqueue(temp.left);
            }
            if (temp.right) {
                q.enqueue(temp.right);
            }
        }
        console.log("false")
    }

    size_of_binary_tree() {                      //IMP  //data needs to be sent from bottom node to top
        console.log(this.size(this.root));                  //so data passed using return statements
    }
    size(node){
        if(!node){
            return 0;
        }
        else{
            return this.size(node.left) + 1 + this.size(node.right); 
        }
    }

    average_of_levels_of_binary_tree() {
        let q = new queue();
        q.enqueue(this.root);
        let nodeCount;
        let tmp;
        let sum;
        let avg = [];
        let levelSize;

        while (1) {
            if (q.size() == 0) {
                console.log(avg)
                return;
            }
            sum = 0;

            nodeCount = q.size();
            levelSize = q.size();
            while (nodeCount > 0) {
                let tmp = q.dequeue();
                sum += tmp.data;
                if (tmp.left) {
                    q.enqueue(tmp.left)
                }
                if (tmp.right) {
                    q.enqueue(tmp.right)
                }
                nodeCount--;
            }
            avg.push(sum/levelSize)
        }
    }

    nodes_without_sibling(){
        let q = new queue();
        q.enqueue(this.root);
        while(!q.isEmpty()){
            let temp = q.dequeue();
            if(temp.right && !temp.left){
                console.log(temp.right.data);
                q.enqueue(temp.right)
            }
            else if (!temp.right && temp.left) {
                console.log(temp.left.data);
                q.enqueue(temp.left)
            }
            else if (temp.right && temp.left) {
                q.enqueue(temp.left)
                q.enqueue(temp.right)
            }
        }
    }

    nodes_at_kth_dis(node, k){                 //IMP
        if(!node){
            return 0;
        }
        if(k == 0){
            console.log(node.data);
            return;
        }
        else{
            this.nodes_at_kth_dis(node.left, k-1);
            this.nodes_at_kth_dis(node.right, k - 1);
        }
    }

    min_depth_of_binary_tree(){
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let height = 1;

        while(!q.isEmpty()){
            let temp = q.dequeue();

            if(temp == marker){
                height++;
                q.enqueue(marker);
            }
            else{
                if(temp.left && temp.right){
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
                else{
                    console.log(height);
                    return;
                }   
            }
        }
    }

    nodes_between_2_levels(m,n){
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let height = 1;

        while (!q.isEmpty()) {
            let temp = q.dequeue();

            if (temp == marker) {
                height++;
                if(q.isEmpty()){
                    return;
                }
                q.enqueue(marker);
            }
            else {
                if(height >= m && height <= n){
                    console.log(temp.data);
                }
                else if(height>n){
                    return;
                }

                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
            }
        }
    }

    right_view_of_binary_tree(){ //rightmost node of every level
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let prev;
        let temp = null;

        while (!q.isEmpty()) {
            prev = temp;
            temp = q.dequeue();

            if (temp == marker) {
                console.log(prev.data);
                if (q.isEmpty()) {
                    return;
                }
                q.enqueue(marker);
            }
            else {
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
            }
        }
    }

    left_and_right_view_of_binary_tree() { //leftmost and rightmost node of every level
        //can also be called as boundary traveral of tree
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let prev;
        let temp = null;

        while (!q.isEmpty()) {
            prev = temp;
            
            temp = q.dequeue();
            if (prev == marker) {
                console.log(temp.data)
                if(q.size() == 1){
                    return;
                }
            }

            if (temp == marker) {
                console.log(prev.data);
                if (q.isEmpty()) {
                    return;
                }
                q.enqueue(marker);
            }
            else {
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
            }
        }
    }

    sum_of_number_formed_from_root_to_leaf(node, val, sum){  //vvimp
        if(!node){
            return 0;
        }
        val = val*10+node.data;
        console.log(val)

        if(!node.left && !node.right){
            return val;
        }
        return (this.sum_of_number_formed_from_root_to_leaf(node.left, val, sum)+this.sum_of_number_formed_from_root_to_leaf(node.right, val, sum))
    }
    
    isIsomorphic(n1, n2){
        if(!n1 && !n2){
            return true;
        }
        if (!n1 || !n2) {
            return false;
        }
        if (n1.data != n2.data) {
            return false;
        }

        return ((this.isIsomorphic(n1.left, n2.left) || this.isIsomorphic(n1.right, n2.right)) || (this.isIsomorphic(n1.left, n2.right) || this.isIsomorphic(n1.right, n2.left)))
    }

    convert_to_mirror(node){
        if(!node){
            return;
        }
        else{
            this.convert_to_mirror(node.left)
            this.convert_to_mirror(node.right)
            let temp = node.left;         //swapping pointers not data
            node.left = node.right;
            node.right = temp;
        }
    }

    inorder_predecessor_successor_of_key(node, successor, predecessor, key){   //IMP
        let temp;
        if(!node){
            return 0;
        }
        
        if(node.data == key){
            temp = node.left;
            while(temp.right){
                temp = temp.right;
            }
            predecessor = temp

            temp = node.right;
            while (temp.left) {
                temp = temp.left;
            }
            successor = temp;

            console.log(predecessor.data, successor.data);
            return;
        }

        if(node.data < key){    //when there is no left subtree
            predecessor = node;
            this.inorder_predecessor_successor_of_key(node.right, successor, predecessor, key)
        }
        else {                   //when there is no right subtree
            successor = node;
            this.inorder_predecessor_successor_of_key(node.left, successor, predecessor, key)
        }
    }

    print_ancestors_of_node(node, x){
        if(!node){
            return null;
        }

        if(node.data == x){
            return 1;
        }
        let l = this.print_ancestors_of_node(node.left, x);
        let r = this.print_ancestors_of_node(node.right, x);

        if(l == 1 || r == 1){
            console.log(node.data);
            return 1;
        }
    }

    dis_of_node_from_root(x) {
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let dis = 0;

        while (!q.isEmpty()) {
            let temp = q.dequeue();
            // console.log(temp.data)

            if (temp == marker) {
                dis++;
                if(q.isEmpty()){
                    console.log("node not present")
                    return;
                }
                q.enqueue(marker);
            }
            else if(temp.data == x){
                console.log(dis);
                return;
            }
            else {
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
            }
        }
    }

    mirror_of_node(x, left, right){ 
        if(!left || !right){
            return false;
        }

        if(left.data == x){
            console.log(right.data)
            return right.data;
        }
        if (right.data == x) {
            console.log(left.data)
            return left.data;
        }
        let mirror = this.mirror_of_node(x, left.left, right.right);
        if(mirror){
            return mirror; 
        }
        this.mirror_of_node(x, left.right, right.left);
    }

    is_foldable(left, right) {
        if (!left && !right) {
            console.log('true')
            return true;
        }
        if (!left || !right) {
            console.log('false')
            return false;
        }

        return this.is_foldable(left.left, right.right) && this.is_foldable(left.right, right.left);
    }

    merge_by_sum(t1, t2){       //IMP
        if(!t1){
            return t2;
        }
        if (!t2) {
            return t1;
        }
        t1.data += t2.data;
        t1.left = this.merge_by_sum(t1.left, t2.left);
        t1.right = this.merge_by_sum(t1.right, t2.right);
        return t1;
    }

    populate_inorder_successor_of_nodes(node, next=null){   
        if(node){
            this.populate_inorder_successor_of_nodes(node.next, next);
            p.right = next;
            next = p;
            this.populate_inorder_successor_of_nodes(node.left, next)
        }
    }

    root_to_leaf_sum_equal_to_k(node, k, sum=0){  //data needs to be sent from top node to bottom
            if (!node) {                            //so pass it as parameter
                return 0;
            }
            sum += node.data;

            if (!node.left && !node.right) {
                if(sum == k){
                    console.log(true)
                }
                return;
            }
        this.root_to_leaf_sum_equal_to_k(node.left,k, sum);
        this.root_to_leaf_sum_equal_to_k(node.right, k, sum)
    }

    count(node){     //IMP
        if(!node){
            return 0;
        }
        return this.count(node.left)+this.count(node.right)+1;
    }

    can_removing_an_edge_will_divide_tree_in_2_halves(node , total){
        if(!node){
            return false;
        }
        if(this.count(node) == (total-this.count(node))){
            return true;
        }
        return this.can_removing_an_edge_will_divide_tree_in_2_halves(node.left, total) || this.can_removing_an_edge_will_divide_tree_in_2_halves(node.right, total)
    }

    binary_tree_subtree_of_another(n1, n2){
        if(!n2){
            return true;
        }
        if(!n1){
            return false;
        }
        if(n1.data == n2.data){
            console.log(n1.data, n2.data)
            if (this.binary_tree_subtree_of_another(n1.left, n2.left) && this.binary_tree_subtree_of_another(n1.right, n2.right)){
                return true;
            }
            else{
                return false;
            }
        }
        this.binary_tree_subtree_of_another(n1.left, n2)
        this.binary_tree_subtree_of_another(n1.right, n2)
    }

    symetric_tree(root){
        if(!root){
            return true;
        }
        else{
            var q = new queue();
            q.enqueue(root.left);
            q.enqueue(root.right);
        }
        q.print()

        while(!q.isEmpty()){
            if(q.size() < 2){
                return false;
            }
            let tmp1 = q.dequeue();
            let tmp2 = q.dequeue();

            if(tmp1.data == tmp2.data){
                q.enqueue(tmp1.left)
                q.enqueue(tmp2.right)
                q.enqueue(tmp1.right)
                q.enqueue(tmp2.left)
            }
            else{
                return false;
            }
        }
        return true;
    }

    check_for_children_sum(node){
        let leftData, rightData;
        if(!node){
            return true;
        }
        if (!node.left && !node.right) {
            return true;
        }
        if (!node.left) {
            rightData = node.right.data;
            leftData = 0;
        }
        if (!node.right) {
            leftData = node.left.data;
            rightData = 0;
        }
        if(node.left && node.right){
            if (node.data == (leftData + rightData)){
                let l = this.check_for_children_sum(node.left);
                let r = this.check_for_children_sum(node.right);
                if(l && r){return true;}
            }
            else{
                return false;
            }
        }
    }

    every_node_should_store_sum_of_left_subtree(node) {   //IMP
        if (!node) {
            return 0;
        }
        if(!node.left && !node.right){
            return node.data;
        }
        node.data = node.data+this.every_node_should_store_sum_of_left_subtree(node.left);
        return node.data + this.every_node_should_store_sum_of_left_subtree(node.right);
    }

    connect_nodes_at_same_level(){
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let prev;
        let temp;

        while (!q.isEmpty()) {
            prev = temp;
            temp = q.dequeue();
            // console.log(temp.data)

            if (temp == marker) {
                if (q.isEmpty()) {
                    return;
                }
                q.enqueue(marker);
            }
            else{
                if(prev && prev != marker){
                    prev.next = temp
                }
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
            }
        }
    }

    bst_from_inorder_traversal(arr, start, end){ //IMP
        if(start > end){
            return 0;
        }
        let max = Math.max(...arr.slice(start, end+1));
        let node = new Node(max);
        console.log(max)
        if(start == end){
            return node;
        }

        node.left = this.bst_from_inorder_traversal(arr, start, arr.indexOf(max)-1);
        node.right = this.bst_from_inorder_traversal(arr, arr.indexOf(max) + 1, end);

        return node;

    }

    print(node) {
        console.log(node.data);
    }

    diameter_of_bst(node){
        if(!node){
            return 0;
        }

        let lh = this.recursive_height_of_binary_tree(node.left)
        let rh = this.recursive_height_of_binary_tree(node.right)

        let ld = this.diameter_of_bst(node.left)
        let rd = this.diameter_of_bst(node.right)

        return Math.max(lh+rh+1, Math.max(ld, rd))
    }

    density_of_bst(){
        let size = 0;
        let height = 0;
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let temp;

        while (!q.isEmpty()) {
            temp = q.dequeue();

            if (temp == marker) {
                height++;
                if (q.isEmpty()) {
                    console.log(size / height)
                    return;
                }
                q.enqueue(marker);
            }
            else {
                size++;
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
            }
        }
    }

    double_tree(node){
        if(!node){
            return;
        }
        this.double_tree(node.left)
        this.double_tree(node.right)

        let temp = node.left;
        node.left = new Node(node.data);
        node.left.left = temp;     
    }

    difference_between_sum_of_nodes_at_odd_and_even_level(){
        let level = 1;
        let oddSum = 0
        let evenSum = 0
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let temp;

        while (!q.isEmpty()) {
            temp = q.dequeue();

            if (temp == marker) {
                if (q.isEmpty()) {
                    console.log(oddSum, evenSum)
                    return;
                }
                q.enqueue(marker);
                level = (level == 1)?0:1;
            }
            else {
                if(level == 1){
                    oddSum += temp.data;
                }
                else{
                    evenSum += temp.data;
                }
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
            }
        }
    }

    evaluation_of_expression_tree(node, arr){
        if(!node){
            return 0;
        }
        let l = this.evaluation_of_expression_tree(node.left, arr)
        let r = this.evaluation_of_expression_tree(node.right, arr)

        if(arr.indexOf(node.data) > -1){
            switch (node.data) {
                case '+':
                    return l+r;
                    break;
                case '-':
                    return l-r;
                    break;
                case '*':
                    return l*r;
                    break;
                case '/':
                    return l/r;
                    break;            
            }
        }
        else{
            return Number(node.data);
        }
    }

    first_non_matching_leaves_in_2_bst(t1, t2){
        let s1 = new stack();
        let s2 = new stack();

        s1.push(t1)
        s2.push(t2)

        while(!s1.isEmpty() || !s2.isEmpty()){
            if (s1.isEmpty() || s2.isEmpty()){
                return;
            }

            let temp1 = s1.pop();
            while (temp1 && !(!temp1.left && !temp1.right)){
                s1.push(temp1.right);
                s1.push(temp1.left)
                temp1 = s1.pop();
            }

            let temp2 = s2.pop();
            while (temp2 && !(!temp2.left && !temp2.right)) {
                s2.push(temp2.right);
                s2.push(temp2.left)
                temp2 = s2.pop();
            }

            if(temp1 && temp2){
                if(temp1.data != temp2.data){
                    console.log(temp1.data, temp2.data);
                    return
                }
            }

        }
    }

    max_and_min_in_binary_tree(node){   //  IMP  //for max, find max of root, left subtree, right subtree
        if(!node){
            return 0;
        }

        let retMax = node.data;
        let retMin = node.data;
        let lMax = this.max_and_min_in_binary_tree(node.left)[0]
        let rMax = this.max_and_min_in_binary_tree(node.right)[0];
        let lMin = this.max_and_min_in_binary_tree(node.left)[1]
        let rMin = this.max_and_min_in_binary_tree(node.right)[1];


        if (lMax>retMax){
            retMax = lMax
        }
        if (lMin < retMin) {
            retMin = lMin
        }
        if (rMax > retMax) {
            retMax = rMax
        }
        if (rMin < retMin) {
            retMin = rMin
        }
        return [retMax, retMin];
    }

    multiplication_of_sum_leaves_at_same_level(){
        let mul = 1;
        let sum = 0;
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let prev;
        let temp = null;

        while (!q.isEmpty()) {
            prev = temp;

            temp = q.dequeue();
            if (prev == marker) {
                sum += temp.data;
                if (q.size() == 1) {
                    return;
                }
            }

            if (temp == marker) {
                if(prev.data != sum){
                    sum += prev.data;
                }
                mul *= sum;
                sum = 0;
                if (q.isEmpty()) {
                    console.log(mul)
                    return;
                }
                q.enqueue(marker);
            }
            else {
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
            }
        }
    }

    find_next_right_node(key){
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let prev;
        let temp = null;

        while (!q.isEmpty()) {
            prev = temp;

            temp = q.dequeue();
            if (prev == marker) {
                if (q.size() == 1) {
                    return;
                }
            }

            if (temp == marker) {
                if (q.isEmpty()) {
                    console.log('not found')
                    return;
                }
                q.enqueue(marker);
            }
            else {
                if (prev && prev.data == key) {
                    console.log(temp.data)
                    return;
                }
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
            }
        }
    }

    level_of_node(key) {
        let level = 1;
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let temp = null;

        while (!q.isEmpty()) {
            temp = q.dequeue();

            if (temp == marker) {
                level++;
                if (q.isEmpty()) {
                    console.log('not found')
                    return;
                }
                q.enqueue(marker);
            }
            else {
                if (temp.data == key) {
                    console.log(level)
                    return;
                }
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
            }
        }
    }

    remove_all_half_nodes(node){ //check again
        let temp;
        if(!node){
            return 0;
        }

        node.left = this.remove_all_half_nodes(node.left)
        node.right = this.remove_all_half_nodes(node.right)

        if (!node.left && !node.right) {
            return node;
        }
        if (node.left && !node.right){
            temp = node.left
            node = null;
            return temp;
        }
        if (!node.left && node.right) {
            temp = node.right;
            node = null;
            return temp;
        }    
    }

    level_with_max_nodes(){
        let level = 1;
        let count = 0;
        let res = 0;
        let resLevel;
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let temp = null;

        while (!q.isEmpty()) {
            temp = q.dequeue();

            if (temp == marker) {
                if(count > res){
                    res = count;
                    resLevel = level;
                }
                count = 0;
                level++;
                if (q.isEmpty()) {
                    console.log(resLevel)
                    return;
                }
                q.enqueue(marker);
            }
            else {
                count++;
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
            }
        }
    }

    print_all_root_to_leaf_paths(node, path){ //check
        if(!node){
            return;
        }
        path.push(node.data)
        if(!node.left && !node.right){
            console.log('s',path)
        }
        else{
            this.print_all_root_to_leaf_paths(node.left, path)
            path.pop()
            this.print_all_root_to_leaf_paths(node.right, path)
            // path.pop()

        }
    }

    iterative_check_if_trees_are_mirror_of_each_other(t1, t2){
        let s1 = new queue();
        let s2 = new queue();
        s1.enqueue(t1)
        s2.enqueue(t2)

        while(!s1.isEmpty() || s2.isEmpty()){
            let temp1 = s1.dequeue()
            let temp2 = s2.dequeue()
            if(temp1 && temp2){
                if (temp1.data == temp2.data) {
                    s1.enqueue(temp1.left)
                    s2.enqueue(temp2.right)
                    s1.enqueue(temp1.right)
                    s2.enqueue(temp2.left)
                }
                else {
                    console.log('false');
                    return;
                }
            }
            else if(temp1 || temp2){
                console.log('false');
                return;
            }  
        }
    }

    binary_tree_perfect_or_not(){
        let level = 1;
        let resLevel;
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let temp = null;

        while (!q.isEmpty()) {
            temp = q.dequeue();

            if (temp == marker) {
                level++;
                if (q.isEmpty()) {
                    console.log("true")
                    return;
                }
                q.enqueue(marker);
            }
            else {
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (!temp.left && !temp.right) {
                    if(!resLevel){
                        resLevel = level;
                    }
                    else if(level != resLevel){
                        console.log('false1');
                        return;
                    }
                }
                else if (!temp.left || !temp.right) {
                    console.log('false2');
                    return;
                }
            }
        }
    }

    binary_tree_from_level_order_traversal(arr){   //IMP
        let q = new queue();
        q.enqueue(new Node(arr.shift()));
        let root;

        while(!q.isEmpty()){
            let parent = q.dequeue();
            if(!root){
                root = parent;
            }
            if(arr.length > 0){
                let temp = new Node(arr.shift())
                q.enqueue(temp);
                parent.left = temp;
            }
            if (arr.length > 0) {
                let temp = new Node(arr.shift())
                q.enqueue(temp);
                parent.right = temp;
            }

        }
        console.log(root)
    }

    binary_tree_that_holds_logical_and_operation(node){
        if(!node){
            return;
        }

        if(node.left && node.right){          
            let l = this.binary_tree_that_holds_logical_and_operation(node.left)
            let r = this.binary_tree_that_holds_logical_and_operation(node.right)
            node.data = l&r;
        }

        return node.data;
    }

    depth_of_deepest_odd_level_leaf(){
        let level = 1;
        let resLevel = 0;
        let q = new queue();
        q.enqueue(this.root);
        let marker = new Node('marker');
        q.enqueue(marker);
        let temp = null;

        while (!q.isEmpty()) {
            temp = q.dequeue();

            if (temp == marker) {
                level++;
                if (q.isEmpty()) {
                    console.log(resLevel)
                    return;
                }
                q.enqueue(marker);
            }
            else {
                if (temp.left && temp.right) {
                    q.enqueue(temp.left);
                    q.enqueue(temp.right);
                }
                else if (!temp.left && !temp.right) {
                    if ((level%2 == 1) && resLevel < level) {
                        console.log(temp.data)
                        resLevel = level;
                    }
                }
                else if (!temp.left && temp.right) {
                    q.enqueue(temp.right);
                }
                else if (temp.left && !temp.right) {
                    q.enqueue(temp.left);
                }
            }
        }
    }

    binary_tree_to_threaded_binary_tree(){ 
            //in threaded tree, if right pointer of a node is null then it points to node's inorder successor
        let q = new queue();
        this.inOrderTraversal(function(node){q.enqueue(node)})

        this.recursive_binary_tree_to_threaded_binary_tree(this.root, q)
    }
    recursive_binary_tree_to_threaded_binary_tree(root, q){
        if(!root){
            return null;
        }

        if(root.left){
            this.recursive_binary_tree_to_threaded_binary_tree(root.left, q);
        }
        q.dequeue();
        if (root.right) {
            this.recursive_binary_tree_to_threaded_binary_tree(root.right, q);
        }
        else{
            root.right = q.front();
        }

    }

    efficient_binary_tree_to_threaded_tree(){
        if(!node){
            return null;
        }
        if(!node.left && !node.right){
            return root;
        }

        if(node.left){
            let l = this.efficient_binary_tree_to_threaded_tree(node.left);
            l.right = node;
        }
        if(!node.right){
            return node;
        }

        this.efficient_binary_tree_to_threaded_tree(node.right)
    }

    convert_to_sum_tree(node){
        if(!node){
            return 0;
        }

        let temp = node.data;
        node.data = this.convert_to_sum_tree(node.left)+this.convert_to_sum_tree(node.right);
        return (node.data+temp);
    }

    convert_left_right_tree_to_down_right_tree(node){
        if(!node){
            return null;
        }

        this.convert_left_right_tree_to_down_right_tree(node.left)
        this.convert_left_right_tree_to_down_right_tree(node.right)

        if(!node.left){
            node.left = node.right;
        }
        else{
            node.left.right = node.right;
        }
    }

    convert_binary_tree_to_tree_with_children_sum_property(node){
        let l = 0;
        let r = 0;
        if(!node || (!node.left && !node.right)){
            return 0;
        }

        this.convert_binary_tree_to_tree_with_children_sum_property(node.left)
        this.convert_binary_tree_to_tree_with_children_sum_property(node.right)

        if(node.left){
            l = node.left.data;
        }
        if (node.right) {
            r = node.right.data;
        }
        let d = l+r-node.data;
        if(d >= 0){
            node.data = l+r;
        }
        else{
            this.increment(node, d);
        }
    }
    increment(node, diff){
        if(node.left){
            node.left.data = node.left.data + diff;
            this.increment(node.left, diff)
        }
        else if (node.rigth) {
            node.right.data = node.right.data + diff;
            this.increment(node.right, diff)
        }
    }

    max_path_sum_between_2_leaves(node, res){
        if(!node){
            return 0;
        }
        if(!node.left && !node.right){
            return node.data;
        }

        let l = this.max_path_sum_between_2_leaves(node.left)
        let r = this.max_path_sum_between_2_leaves(node.right)

        res = Math.max(res, (l+r+node.data))
        console.log(res)
        return Math.max(l,r)+node.data;
    }

    flip_binary_tree_to_right_side(node){
        if (!node || (!node.left && !node.right)){
            return node;
        }

        let temp = this.flip_binary_tree_to_right_side(node.left);

        node.left.left = node.right;        
        node.left.right = node;
        node.left = node.right = null;

        return temp;
    }

    height_of_binary_tree_whose_leaves_are_connected_using_double_linked_list(node){
        if(!node){
            return 0;
        }
        if(node.left && (node.left.right == node) && node.right && (node.right.left == node)){
            return 1;
        }

        return 1+Math.max(this.height_of_binary_tree(node.left), this.height_of_binary_tree(node.right));
    }

    sink_all_odd_nodes(node){
        //odd valued node can not be parent of even valued node

        if(!node || (!node.left && !node.right)){
            return 0;
        }

        this.sink_all_odd_nodes(node.left)
        this.sink_all_odd_nodes(node.right)

        if(node.data % 2 == 1){
            this.sink_node(node);
        }
    }
    sink_node(node){
        if(!node || (!node.left && !node.right)){
            return;
        }
        if(node.left && node.left.data % 2 == 0){
            [node.data, node.left.data] = [node.left.data, node.data];
            this.sink_node(node.left)
        }
        if (node.right && node.right.data % 2 == 0) {
            [node.data, node.right.data] = [node.right.data, node.data];
            this.sink_node(node.right)
        }
    }

    max_consec_path_length(prev, current, len){
        if(!current){
            return len;
        }
        else if(prev.data != current.data -1){
            len = 0;
        }
        let l = this.max_consec_path_length(current, current.left, len+1);
        let r = this.max_consec_path_length(current, current.right, len + 1);

        return Math.max(l,r);
    }

    remove_nodes_not_lying_in_path_with_sum_greater_than_k(current, sum){
        if(!current){
            return false;
        }
        if (!current.left && !current.right) {
            if (current.data < sum) {
                current.data = 0;
                return false;
            }
            else{
                return true;
            }
        }
        
        let bool1 = this.remove_nodes_not_lying_in_path_with_sum_greater_than_k(current.left, sum-current.data)
        let bool2 = this.remove_nodes_not_lying_in_path_with_sum_greater_than_k(current.right, sum - current.data)

        if(!bool1 && !bool2){
            current.data = 0;
            return false;
        }
        else{
            return true;
        }
    }

    remove_nodes_not_lying_in_path_with_length_greater_than_k(current, cur_len, k) {
        if (!current) {
            return false;
        }
        if (!current.left && !current.right) {
            console.log(cur_len)
            if (cur_len <= k) {
                current.data = 0;
                return false;
            }
            else {
                return true;
            }
        }

        let bool1 = this.remove_nodes_not_lying_in_path_with_length_greater_than_k(current.left, cur_len+1, k)
        let bool2 = this.remove_nodes_not_lying_in_path_with_length_greater_than_k(current.right, cur_len+1, k)

        if (!bool1 && !bool2) {
            current.data = 0;
            return false;
        }
        else {
            return true;
        }
    }

    max_path_sum(current, res){ //check
        //max sum might or might not contain root node
        if(!current){
            return null;
        }
        let l = this.max_path_sum(current.left, res);
        let r = this.max_path_sum(current.right, res);

        //m1 include atmost 1 child
        //m2 is sum when no ancestor of current is in maxsum path
        //and current is the root of max sum path
        let m1 = Math.max(Math.max(l,r)+current.data, current.data);
        let m2 = Math.max(m1, l+r+current.data);

        res = Math.max(res, m2);

        return res;
    }

    remove_all_leaf_nodes(node){
        if(!node){
            return false;
        }

        let l = this.remove_all_leaf_nodes(node.left);
        let r = this.remove_all_leaf_nodes(node.right);

        if(!l && !r){
            node.data = null;
        }
        return true;
    }

    remove_leaf_node_with_value_x(node, x) {
        if (!node) {
            return false;
        }

        let l = this.remove_leaf_node_with_value_x(node.left, x);
        let r = this.remove_leaf_node_with_value_x(node.right, x);

        if ((!l) && (!r) && (node.data == x)) {
            node.data = null;
        }
        return true;
    }

    second_largest_element(node){
        let prev;
        while(node.right){
            prev = node;
            node = node.right;
        }

        if(node.left){
            console.log(node.left.data);
        }
        else{
            console.log(prev.data)
        }
    }

    replace_node_with_depth(node, depth){
        if(!node){
            return 0;
        }

        node.data = depth;
        this.replace_node_with_depth(node.left, depth+1)
        this.replace_node_with_depth(node.right, depth + 1)

        return true;
    }

    sum_of_nodes_at_kth_level(str, k){
        let sum = 0, level=0;
        for(let i of str){
            if(i == "("){
                level++;
            }
            else if(i == ")"){
                level--;
            }
            else{
                if(level == k){
                    sum += Number(i)
                }
            }
        }
        console.log(sum)
    }

    sum_of_all_nodes(node){
        if(!node){
            return 0;
        }

        let sum = this.sum_of_all_nodes(node.left)+this.sum_of_all_nodes(node.right);
        return (sum+node.data);
    }


    print_extreme_node_in_alternate_order(root){
        let q = new queue();
        q.enqueue(root);
        q.enqueue(new Node("marker"))
        let flag = 0;
        let prev, cur;
        cur = new Node("marker");

        while(!q.isEmpty()){
            prev = cur;
            cur = q.dequeue();
            if(prev.data == "marker" && flag){
                console.log(cur.data);
            }
            else if(cur.data == "marker"){
                if(!flag){
                    console.log(prev.data)
                } 
                flag = !flag;
                if(!q.isEmpty()){
                    q.enqueue(new Node("marker"))
                }
                else{
                    return;
                }
            }
            if (cur.left) {
                q.enqueue(cur.left)
            }
            if (cur.right) {
                q.enqueue(cur.right)
            }
        }
    }

    outer_to_inner_level_order_traversal(root) {
        let q = new queue();
        let arr = [];
        q.enqueue(root);
        q.enqueue(new Node("marker"))
        let prev, cur;
        cur = new Node("marker");
        let flag = false;

        while (!q.isEmpty()) {
            prev = cur;
            cur = q.dequeue();
            if (prev.data == "marker") {
                console.log(cur.data);
                flag = true;
            }
            else if (cur.data == "marker") {
                if (arr.length) {
                    console.log(arr.pop())
                }
                let start = true;
                while (arr.length != 0) {
                    if (start) {
                        console.log(arr.shift());
                    }
                    else {
                        console.log(arr.pop());
                    }
                    start = !start;
                }
                flag = false;
                if (!q.isEmpty()) {
                    q.enqueue(new Node("marker"))
                }
                else {
                    return;
                }
            }
            else {
                arr.push(cur.data)
            }
            if (cur.left) {
                q.enqueue(cur.left)
            }
            if (cur.right) {
                q.enqueue(cur.right)
            }
        }
    }

    outer_to_inner_level_order_traversal_from_last_level(root){
        let s1 = new stack();
        let s2 = new stack();
        let q = new queue();
        let arr = [];
        q.enqueue(root);
        q.enqueue(new Node("marker"))
        let prev, cur;
        cur = new Node("marker");
        let flag = false;

        while (!q.isEmpty()) {
            prev = cur;
            cur = q.dequeue();
            if (prev.data == "marker") {
                s1.push(cur.data)
                flag = true;
            }
            else if (cur.data == "marker") {
                if (arr.length) {
                    s1.push(arr.pop());
                }
                let start = true;
                while(arr.length != 0){
                    if(start){
                        s1.push(arr.shift());
                    }
                    else{
                        s1.push(arr.pop());
                    }
                    start = !start;
                }
                flag = false;
                if (!q.isEmpty()) {
                    while(!s1.isEmpty()){
                        s2.push(s1.pop())
                    }
                    q.enqueue(new Node("marker"))
                }
                else {
                    while (!s1.isEmpty()) {
                        s2.push(s1.pop())
                    }
                    while (!s2.isEmpty()) {
                        console.log(s2.pop())
                    }
                    return;
                }
            }
            else{
                arr.push(cur.data)
            }
            if (cur.left) {
                q.enqueue(cur.left)
            }
            if (cur.right) {
                q.enqueue(cur.right)
            }
        }
    }

    determine_if_binary_tree_is_height_balanced(root){
        if(!root){
            return 1;
        }

        let l = this.recursive_height_of_binary_tree(root.left);
        let r = this.recursive_height_of_binary_tree(root.right);

        if(Math.abs(l-r) > 1){
            return 0;
        }
        else{
            if(this.determine_if_binary_tree_is_height_balanced(root.left) &&
                this.determine_if_binary_tree_is_height_balanced(root.right)){
                return 1;
            }
            else{
                return 0;
            }
        }
    }

    count_non_leaf_nodes(node){
        if(!node){
            return 0;
        }

        if(!node.left && !node.right){
            return 0;
        }

        let l = this.count_non_leaf_nodes(node.left)
        let r = this.count_non_leaf_nodes(node.right)
        
        return (l+r+1);
    }

    diagonal_level_traversal(root){
        let q = new queue();
        q.enqueue(root);
        q.enqueue(new Node("marker"));

        while(!q.isEmpty()){
            let temp = q.dequeue();
            if(temp.data == "marker"){
                if(q.isEmpty()){
                    console.log(q.items)
                    return;
                }
                else{
                    q.enqueue(new Node("marker"));
                }
            }
            else{
                while(temp){
                    if(temp.left){
                        q.enqueue(temp.left);
                    }
                    temp = temp.right;
                }
            }
        }
    }

    print_leaf_nodes_left_to_right(node){   //not necessarily level wise
        if(!node){
            return;
        }
        if(!node.left && !node.right){
            console.log(node.data);
            return;
        }
        this.print_leaf_nodes_left_to_right(node.left);
        this.print_leaf_nodes_left_to_right(node.right);

        return;
    }

    largest_value_in_each_level(root){
        let q = new queue();
        q.enqueue(root);
        q.enqueue("marker");
        let max = Number.NEGATIVE_INFINITY;

        while(!q.isEmpty()){
            let temp = q.dequeue();
            if(temp == "marker"){
                console.log(max)
                max = Number.NEGATIVE_INFINITY;
                if(q.isEmpty()){
                    return;
                }
                q.enqueue("marker");
            }
            else{
                if(temp.data > max){
                    max = temp.data;
                }
                if(temp.left){
                    q.enqueue(temp.left)
                }
                if (temp.right) {
                    q.enqueue(temp.right)
                }
            }
        }
    }

    deepest_left_leaf_node(node){
        if(!node){
            return;
        }
        if(!node.left && !node.right){
            console.log(node.data);
            return 1;
        }
        let l = this.deepest_left_leaf_node(node.left);
        if(!l){
            let r = this.deepest_left_leaf_node(node.right);
        }
        if(l || r){
            return 1;
        }
        else{
            return 0;
        }
    }

    count_nodes_that_lie_in_given_range(node, low, high){
        if(!node){
            return 0;
        }
        let l=0, r=0;
        if(node.data < low){
            r = this.count_nodes_that_lie_in_given_range(node.right, low, high);
        }
        else if (node.data > high) {
            l = this.count_nodes_that_lie_in_given_range(node.left, low, high);
        }
        else{
            l = this.count_nodes_that_lie_in_given_range(node.left, low, high);
            r = this.count_nodes_that_lie_in_given_range(node.right, low, high);
            return (l+r+1);          
        }
        return (l+r)
    }

    check_if_binary_tree_has_suplicate_values(root){
        let map = {};
        let q = new queue();
        q.enqueue(root);

        while (!q.isEmpty()) {
            let temp = q.dequeue();
            if(map[temp.data]){
                console.log('yes');
                return;
            }
            map[temp.data] = 1;
            if (temp.left) {
                q.enqueue(temp.left)
            }
            if (temp.right) {
                q.enqueue(temp.right)
            }
        }
    }

    sorted_level_order_traversal_of_binary_tree(root){
        //in bst -> level order is already sorted
        let q = new queue();
        q.enqueue(root);
        q.enqueue("marker");
        let arr = [];

        while (!q.isEmpty()) {
            let temp = q.dequeue();
            if (temp == "marker") {
                arr.sort((a,b) => {return a-b;})
                for(let i of arr){
                    console.log(i)
                }
                arr = [];
                if (q.isEmpty()) {
                    return;
                }
                q.enqueue("marker");
            }
            else {
                arr.push(temp.data)
                if (temp.left) {
                    q.enqueue(temp.left)
                }
                if (temp.right) {
                    q.enqueue(temp.right)
                }
            }
        }
    }

    top_three_elements(node, first=Number.NEGATIVE_INFINITY,
        second = Number.NEGATIVE_INFINITY,
        third = Number.NEGATIVE_INFINITY){
        if(!node){
            return;
        }
        if(node.data > first){
            third = second;
            second = first;
            first = node.data
        }
        else if(node.data > second){
            third = second;
            second = node.data;
        }
        else if (node.data > third) {
            third = node.data;
        }
        this.top_three_elements(node.left, first, second, third)
        this.top_three_elements(node.right, first, second, third)

        console.log([first, second, third]);
    }

    height_of_tree_considering_even_level_leaves_only(root){
        //Find the height of the binary tree given that only the nodes
        //on the even levels are considered as the valid leaf nodes.

        let q = new queue();
        q.enqueue(root);
        q.enqueue("marker");
        let level = 1;
        let max;

        while (!q.isEmpty()) {
            let temp = q.dequeue();
            if (temp == "marker") {
                level++;
                if (q.isEmpty()) {
                    console.log(max)
                    return;
                }
                q.enqueue("marker");
            }
            else {
                if(!temp.left && !temp.right && (level%2 == 0)){
                    max = level;
                }
                if (temp.left) {
                    q.enqueue(temp.left)
                }
                if (temp.right) {
                    q.enqueue(temp.right)
                }
            }
        }
    }

    bst_to_greater_sum_tree(node, sum){
        //Given a BST, transform it into greater sum tree 
        //where each node contains sum of all nodes greater 
        //than that node.

        if(!node){
            return;
        }
        this.bst_to_greater_sum_tree(node.right, sum);
        
        sum += node.data;
        node.data = sum-node.data;

        this.bst_to_greater_sum_tree(node.left, sum)
    }

    

}

function convert_sorted_array_to_bst(a, start, end){
    if(start > end){
        return;
    }
    let mid = Math.ceil((start+end)/2);

    let root = new Node(a[mid]);
    root.left = convert_sorted_array_to_bst(a, start, mid-1);
    root.right = convert_sorted_array_to_bst(a, mid+1, end);

    return root;
}

function postorder_from_given_preorder_and_inorder(i,j,n,io=[4,2,5,1,3,6],pre=[1,2,4,5,3,6]){
    root = find(io, pre[j], n)

    if(root != 0){
        postorder_from_given_preorder_and_inorder(i, j+1, root)
    }
    if (root != n) {
        postorder_from_given_preorder_and_inorder(io[root+1], pre[root + 1], n-root-1)
    }
}


let bst = new BST();
// bst.root = node;
bst.insert(55)
bst.insert(54)
bst.insert(60)
bst.insert(34)
bst.insert(84)
bst.insert(58)
bst.insert(57)
bst.insert(59)
// bst.insert(24)
// bst.insert(23)

// bst.insert(5)
// bst.insert(6)
// bst.insert(4)
// bst.insert(3)
// bst.insert(8)
// bst.insert(8)
// bst.insert(5)
// bst.insert(7)
// bst.insert(9)

                                //         55
                                //        /   \
                                //     54      60
                                //     /      /  \
                                //   34      58    84
                                //          /  \
                                //        57    59
// bst.find(54);
let bst2 = new BST();
bst2.insert(2)
bst2.insert(1)
bst2.insert(3)

let bst1 = new BST();   
bst1.insert(100)
bst1.insert(50)
bst1.insert(90)
bst1.insert(10)
bst1.insert(120)
bst1.insert(20)
bst1.insert(15)
bst1.insert(25)

bst.bst_to_greater_sum_tree(bst.root, 0);
// bst.height_of_tree_considering_even_level_leaves_only(bst.root)
// bst.top_three_elements(bst.root)
// bst.sorted_level_order_traversal(bst.root)
// console.log(bst.count_nodes_that_lie_in_given_range(bst.root, 60, 100))
// bst.deepest_left_leaf_node(bst.root)
// bst.largest_value_in_each_level(bst.root)
// bst.print_leaf_nodes_left_to_right(bst.root)
// bst.diagonal_level_traversal(bst.root)
// console.log(bst.count_non_leaf_nodes(bst.root))
// console.log(bst.determine_if_binary_tree_is_height_balanced(bst.root))
// bst.outer_to_inner_level_order_traversal_from_last_level(bst.root)
// bst.outer_to_inner_level_order_traversal(bst.root)
// bst.print_extreme_node_in_alternate_order(bst.root)
// console.log(bst.sum_of_all_nodes(bst.root))
// bst.sum_of_nodes_at_kth_level("(0(5(6()())(4()(9()())))(7(1()())(3()())))", 3)
// bst.replace_node_with_depth(bst.root, 0)
// bst.second_largest_element(bst.root)
// bst.remove_leaf_node_with_value_x(bst.root, 84)
// bst.remove_all_leaf_nodes(bst.root)
// console.log(bst.max_path_sum(bst.root, Number.NEGATIVE_INFINITY));
// bst.remove_nodes_not_lying_in_path_with_length_greater_than_k(bst.root, 1, 3)
// bst.remove_nodes_not_lying_in_path_with_sum_greater_than_k(bst.root, 200)
// console.log(bst.max_consec_path_length(bst.root, bst.root, 1))
// bst.sink_all_odd_nodes(bst.root);
// console.log(bst.flip_binary_tree_to_right_side(bst.root))
// bst.max_path_sum_between_2_leaves(bst.root, 0)
// bst.convert_binary_tree_to_tree_with_children_sum_property(bst.root)
// bst.convert_left_right_tree_to_down_right_tree(bst.root)
// bst.convert_to_sum_tree(bst.root)

console.log(bst.root)

// bst.binary_tree_to_threaded_binary_tree()
// bst.depth_of_deepest_odd_level_leaf()
// bst2.binary_tree_that_holds_logical_and_operation(bst2.root)
// console.log(bst2.root)
// bst.binary_tree_from_level_order_traversal([1,2,3,4,5,6])
// bst2.binary_tree_perfect_or_not()
// bst.iterative_check_if_trees_are_mirror_of_each_other(bst.root, bst2.root)
// bst.print_all_root_to_leaf_paths(bst.root, []);
// bst.level_with_max_nodes()
// bst.remove_all_half_nodes(bst.root)
// console.log(bst.root)
// bst.level_of_node(58)
// bst.find_next_right_node(58)
// console.log(bst.max_and_min_in_binary_tree(bst.root))
// bst.first_non_matching_leaves_in_2_bst(bst.root, bst1.root)
// console.log(bst.evaluation_of_expression_tree(bst.root, ['+','*','-','/']))
// bst.difference_between_sum_of_nodes_at_odd_and_even_level()
// bst.double_tree(bst.root);
// bst.density_of_bst()
// console.log(bst.diameter_of_bst(bst.root));
// console.log(bst.bst_from_inorder_traversal([5,10,40,30,28], 0, 4))
// bst.connect_nodes_at_same_level()
// bst.every_node_should_store_sum_of_left_subtree(bst.root)
// console.log(bst.check_for_children_sum(bst.root))
// console.log(bst.symetric_tree(bst.root))
// console.log(bst.binary_tree_subtree_of_another(bst.root, bst2.root))
// console.log(bst.can_removing_an_edge_will_divide_tree_in_2_halves(bst.root, 8))
// bst.root_to_leaf_sum_equal_to_k(bst.root, 143)
// bst.inorder_predecessor_successor_of_key(bst.root)
// console.log(bst.merge_by_sum(bst.root, bst1.root));
// bst.is_foldable()
// bst.mirror_of_node(34, bst.root.left, bst.root.right);
// bst.dis_of_node_from_root(57)
// bst.print_ancestors_of_node(bst.root, 59)
// console.log(bst.recursive_count_leaf_nodes(bst.root))
// bst.left_and_right_view_of_binary_tree()
// console.log(convert_sorted_array_to_bst([1,2,3,4,5,6,7,8], 0, 7))
// bst.inorder_predecessor_successor_of_key(bst.root, null, null, 58)
// console.log(bst.recursive_height_of_binary_tree(bst.root))
// bst.convert_to_mirror(bst.root)
// bst.recursive_delete_all_nodes_of_bst(bst.root)
// console.log(bst.isIsomorphic(bst.root, bst1.root))
// console.log(bst.sum_of_number_formed_from_root_to_leaf(bst.root, 0, 0));
// bst.right_view_of_binary_tree();
// bst.nodes_between_2_levels(2,3)
// bst.min_depth_of_binary_tree();
// bst.nodes_at_kth_dis(bst.root, 2)
// bst.nodes_without_sibling()
// bst.average_of_levels_of_binary_tree();
// bst.lowest_common_ancestor_easy(84, 57)
// bst.size_of_binary_tree()
// bst.height_of_binary_tree();
// bst.delete_all_nodes_of_bst();
// bst.iterative_search_in_binary_tree(60)
// bst.check_for_identical_bst(bst1)
// bst.count_leaf_nodes();
// bst.count_half_nodes();
// bst.reverse_level_order();
// let a = bst.validate();
// console.log('ll', a)
// bst.iterative_post_order();
// bst.complete_or_not();
// bst.spiral_order_traversal();
// bst.iterative_in_order();
// bst.inOrderTraversal(bst.print);
// bst.postOrderTraversal(bst.print);
// bst.findMax();
// bst.is_bst(bst.root);
// lca = bst.lowest_common_ancestor(bst.root, 58, 84);
// console.log(lca)
// console.log(bst.root);
// console.log("")
// bst.remove(55);
// console.log(bst.root);





// bst.insert(5)
// console.log(bst);
