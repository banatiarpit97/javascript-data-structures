// function single_linked_list() {

//     this.head = null;
//     this.length = 0;

//     let Node = function(data, next){
//         this.data = data;
//         this.next = next;
//     }

//     this.insertAtStart = function (data){
//         let node = new Node(data, this.head);
//         this.head = node;
//         this.length++;
//     }
// }


class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class single_linked_list{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insertAtStart(data){
        let node = new Node(data, this.head);
        this.head = node;
        this.length++;
    }

    insertAtLast(data){
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.length++;            
            return;
        }
        let current = this.head;
        while(current.next){          //to reach the last node
            current = current.next;
        }
        current.next = node;
        this.length++;
    }

    removeFirst(){
        if(!this.head){
            console.log('linked list is empty');            
            return;
        }
        this.head = this.head.next;
        this.length--;
    }

    removeLast() {
        if (!this.head) {
            console.log('linked list is empty');
            return;
        }
        if (this.length == 1) {
            this.head = null;
            this.length--;            
            return;
        }
        let current = this.head;
        while (current.next.next) {     //to reach 2nd last node
            current = current.next;
        }
        current.next = null;
        this.length--;
    }

    getSize(){
        if(!this.head){
            return 0;
        }
        let size = 1;
        let current = this.head;
        while (current.next) {
            size++;
            current = current.next;
        }
        return size;
    }

    isEmpty(){
        if(this.length == 0){
            return 1;
        }
        else{
            return 0;
        }
    }

    getHead(){
        return this.head;
    }

    toString(){
        let string = "";
        let current = this.head;
        while(current){                                       //if we have to execute a function on every node
            string += current.data + (current.next?' ':'');
            current = current.next;
        }
        return string;
    }

    removeAt(index){
        if(!this.head){
            console.log('linked list is empty');
            return;
        }
        if(index == 0){
            this.head = this.head.next;
            this.length--;
            return;
        }
        if(index > 0 && index <= this.length){
            let count = 0;
            let current = this.head;
            let previous;
            while(current){
                if(index == count){
                previous.next = current.next;
                break;
                }
                count++;
                previous = current;                  //maintain previous node
                current = current.next;
            }
        }
        this.length--;        
    }

    remove(data) {
            if(!this.head){
                console.log('llinked ist is empty');
                return;
            }
            if(data == this.head.data){
                this.head = this.head.next;
                this.length--;
                return;
            }
            let current = this.head;
            let previous;
            while (current) {
                if (data == current.data) {
                    previous.next = current.next;
                    this.length--;                    
                    break;
                }
                // count++;
                previous = current;
                current = current.next;
            }
            console.log('element not present');
            return;
    }

    insertAt(index, data){
        if(index == 0 || this.length == 0){
            let node = new Node(data, this.head);
            this.head = node;
            this.length++;
            return;
        }
        if (index >= (this.length)){
            let current = this.head;
            let node = new Node(data);
            while(current.next){
                current = current.next;
            }
            current.next = node;            
            this.length++;
            return;
        }
        let count = 0;
        let current = this.head;
        let previous;
        while(current){
            if(index == count){
                let node = new Node(data, current);
                previous.next = node;
                this.length++;
                break;
            }
            count++;
            previous = current;
            current = current.next;
        }
    }

    indexOf(data){
        let count = 0;
        let current = this.head;
        while (current) {
            if (data == current.data) {
                return count;
            }
            count++;
            current = current.next;
        }
        return 'element not present';
    }

    makeCircular(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = this.head;
    }


}

function midPoint(list){
    let slow = fast = list.head;
        while (fast.next && fast.next.next){
            fast = fast.next.next;
            slow = slow.next;
    }
    console.log('mid point is', slow.data);
    
}

function isCircular(list){
    let slow = fast = list.head;
    while (fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
            if(fast === slow){
                console.log('circular');
                return;
            }
    }
    console.log('not circular');
}

function fromLast(list, n){
    if (n < 0) {
        console.log('Enter a positive number');
        return;
    }
    if(n >= list.length){
        console.log('length of list is smaller than the number passed');
        return;
    }
    let slow = fast = list.head;
    for(i=0;i<n;i++){
        fast = fast.next;
    }
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    console.log(slow.data);
}

function reverse(list){
    let head = list.head;
    let previous = null;
    let current = list.head;
    let temp;
    while(current){
        temp = current.next;
        current.next = previous;
        previous = current;      
        current = temp;
    }
    list.head = previous;           //IMP
}

function add_1(list){
    reverse(list);
    list.head.data += 1;
    if(list.head.data == 10){
        list.head.data = 0;
        current = list.head.next;
        while (current.data == 9) {
            current.data = 0;
            current = current.next;
        }
        if (current) {
            current.data += 1;
        }
    }
    
    reverse(list)
}

function delete_n_after_m(list, m, n){
    current = list.head;
    while(current){
        i = 0;j = 0;
        while(i<m-1){
            if(current.next){
                current = current.next;
                i++;
            }
            else{
                return;
            }
        }
        temp = current;
        while(j<n){
            if(temp.next){
                temp = temp.next;
                j++;
            }
            else{
                return;
            }
        }
        current.next = temp.next;
        current = current.next;
    }
}

function even_odd_together(list){
    let newLinkedList = new single_linked_list();    
    let odd = list.head;    
    newLinkedList.insertAtStart(list.head.data);
    if (list.head.next){
        even = list.head.next
    }
    while(odd.next){
        if(odd.next.next){
            // console.log(odd.data)
            odd = odd.next.next;
            newLinkedList.insertAtLast(odd.data);
        }   
        else{
            break;
        }

}
    if(even){
        newLinkedList.insertAtLast(even.data);    
        while (even.next) {
            if(even.next.next){
                even = even.next.next;
                if(even){
                    newLinkedList.insertAtLast(even.data);
                }
            }
            else{
                break;
            }    
        }

    }
    console.log(newLinkedList.toString());
}

function decimal_equivalent_of_binary_list(list){
    current = list.head;
    decimal = 0;

    while(current){
        decimal = (decimal*2) + current.data;
        current = current.next;
    }

    console.log(decimal)
}

function remove_loop(list){         //V V IMP
    slow = fast = list.head;

    while(fast.next && fast.next.next){  //to check if loop exist or not
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){      //meeting point will be any node in the loop
            tmp = tmp1 = slow;
            break;
        }
    }
    tmp = tmp.next;
    loopSize = 1;
    while(tmp != tmp1){    //to get size of loop
        tmp = tmp.next;
        loopSize++;
    }
    console.log(loopSize)
    i=0;
    tmp1 = tmp2 = list.head;    
    while(i<loopSize-1){     //to reach the last node of loop, we apply algo to reach a node from last
        tmp2 = tmp2.next;
        i++;
    }
    var prev2 = tmp2;
    while(tmp1 != tmp2.next){
        prev = tmp2;
        tmp1 = tmp1.next;
        tmp2 = tmp2.next;        
    }
    prev2.next = null;
}

function add_2_nos_in_lists(list1, list2){
    list1.reverse()
    list2.reverse()
    i = list1.head;
    j = list2.head;
    resList = new single_linked_list();
    carry = 0;
    while(i || j){
        if(!i){tmp = j.data+carry;}
        else if (!j) { tmp = i.data + carry;}        
        else { tmp = i.data + j.data + carry;}

        if(tmp > 10){
            carry = Math.floor(tmp/10);
            tmp = tmp % 10;
        }
        else{
            carry = 0;
        }

        resList.insertAtLast(tmp);

        i = i.next;
        j= j.next;
    }
    if(carry){
        resList.insertAtLast(carry);        
    }

    console.log('res',resList.toString())
}

function swap_2_nodes(list, m, n){
    console.log(list.toString());
    let current = list.head;
    while(current.next.data != m){
        current = current.next;
    }
    let tmp1 = current;
    current = list.head;
    while (current.next.data != n) {
        current = current.next;
    }
    let tmp2 = current;

    tmp3 = tmp1.next;
    tmp4 = tmp2.next.next;
    tmp1.next = tmp2.next;
    tmp1.next.next = tmp3.next;
    tmp2.next = tmp3;
    tmp2.next.next = tmp4;

    console.log(list.toString());
}

function merge_2_sorted_list(list1, list2){
    cur1 = list1.head;
    cur2 = list2.head;
    res = new single_linked_list();
    while(cur1 || cur2){
        if(cur1 && cur2){
            if(cur1.data < cur2.data){
                res.insertAtLast(cur1.data);
                cur1 = cur1.next;
            }
            else{
                res.insertAtLast(cur2.data);
                cur2 = cur2.next;
            }
        }
        else if(cur1){
            res.insertAtLast(cur1.data);
            cur1 = cur1.next;
        }
        else if (cur2) {
            res.insertAtLast(cur2.data);
            cur2 = cur2.next;
        }
    }

    console.log('res',res.toString())
}

function number_of_times_int_occurs(list, m){
    current = list.head;
    count=0;
    while(current){
        if(current.data == m){
            count++;
        }
        current = current.next;
    }
    console.log(count);
}

function lexographic_checking_of_strings(list1, list2){
    let cur1 = list1.head;
    let cur2 = list2.head;

    while(cur1 || cur2){
        if(cur1 && cur2){          
            if(cur1.data == cur2.data){
                cur1 = cur1.next;
                cur2 = cur2.next;
            }
            else if (cur1.data < cur2.data){
                console.log("string1 is small")
                break;
            }
            else{
                console.log("string2 is small")
                break;   
            }
        } 
        else if(cur1){
            console.log("string2 is small")
            break; 
        }  
        else{
            console.log("string1 is small")
            break; 
        } 
    }
}

function sort_list_of_0_1_2(list){
    let current = list.head;
    n0=n1=n2=0;
    while(current){
        if(current.data == 0){
            n0++;
        }
        else if (current.data == 1){
            n1++;
        }
        else if (current.data == 2) {
            n2++;
        }
        current = current.next;
    }
    console.log(n0,n1,n2)
    i=0;current = list.head;
    while(i<n0){
        current.data = 0;
        current = current.next;
        i++;
    }
    i=0;
    while (i < n1) {
        current.data = 1;
        current = current.next;
        i++;
    }
    i=0;
    while (i < n2) {
        current.data = 2;
        current = current.next;
        i++;
    }
}

function sort_list_of_0_1_2_using_new_lists(list){
    let current = list.head;
    let list0 = new single_linked_list();
    let list1 = new single_linked_list();
    let list2 = new single_linked_list();
    let cur0 = list0.head;
    let cur1 = list1.head;
    let cur2 = list2.head;
    while(current){
        if(current.data == 0){
            list0.insertAtLast(0);
            if(cur0){
                cur0 = cur0.next;
            }
            else{
                cur0 = list0.head;
            }

        }
        else if (current.data == 1) {
            list1.insertAtLast(1)
            if (cur1) {
                cur1 = cur1.next;                
            }
            else {
                cur1 = list1.head;
            }
        }
        else if (current.data == 2) {
            list2.insertAtLast(2)
            if (cur2) {
                cur2 = cur2.next;                
            }
            else {
                cur2 = list2.head;
            }
        }
        current = current.next;
    }
    if(cur1){
        cur0.next = list1.head;
    }
    if(cur2){
        cur1.next = list2.head;
    }

    console.log(list0.toString())
}
function remove_duplicate_elements_in_sorted_list(list){
    current = list.head;
    while(current && current.next){
        if(current.data == current.next.data){
            current.next = current.next.next;
        }
        else{
            current = current.next;
        }
    }
    console.log(list.toString())
}

function modular_node(list, k){
    current = list.head;
    i=1;
    let temp;
    while(current){
        if(i%k == 0){
            temp = current.data;
        }
        i++;
        current = current.next;
    }
    console.log(temp)
}

function middle_node_becomes_head(list) {
    slow = list.head;
    fast = list.head;
    prev=null;
    while(fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
        if(!fast){               //if even number of elements, then middle is second one
            break;
        }
    }
    prev.next = slow.next;
    slow.next = list.head;
    list.head = slow;
    console.log(list.toString())
}

function rotation_count_in_sorted_rotated_list(list){
    current = list.head;i=0;
    while(current){
    if(current.data < list.head.data){
        console.log(i);
        break;
    }
    else{
        i++;
        current = current.next;
    }
    }
}

function pairwise_swap_elements(list){
    current = list.head;
    while(current.next && current.next.next){
        [current.data, current.next.data] = [current.next.data, current.data];
        current = current.next.next
    }
    console.log(list.toString())
}

function list_of_strings_palindrome_or_not(list){
    let s = list.toString();
    s = s.split(" ").join("");
    console.log(s)
    for(i=0;i<s.length/2;i++){
        if(s[i] != s[s.length-1-i]){
            console.log("not");
            break;
        }
    }
}

function delete_every_node_using_recursion(list){
    recursive_delete(list.head);
    
}

function recursive_delete(node){
    if (!node.next) {
        node.next = null;
        return;
    }
    else {
        recursive_delete(node.next);
        node.next = null;
    }
}

function loop_at_kth_pos(list, k){
    let current = list.head;
    let i=1;
    while(current.next){
        if(i==k){
            temp = current;
        }
        current = current.next;
        i++;
    }
    current.next = temp;

    console.log(list.head.next.next.next.next.next.next.next)
}

function multiply_2_nos_represented_by_lists(list1, list2){
    let cur1 = list1.head;
    let cur2 = list2.head;
    let num1 = 0;
    let num2 = 0;
    while(cur1){
        num1 = num1*10 + cur1.data
        cur1 = cur1.next;
    }
    while (cur2) {
        num2 = num2 * 10 + cur2.data
        cur2 = cur2.next;
    }
    res = num1*num2;
    console.log(res);
}

function rotate_linked_list(list, k){
    let i=1;let temp;
    let current = list.head;
    while(current.next){
        current = current.next;
        i++
        if(i==k){
            temp = current
        }
    }
    current.next = list.head;
    list.head = temp.next;
    temp.next = null;

    console.log(list.toString())
}

function delete_node_without_having_head_pointer(node){
    [node.data, node.next.data] = [node.next.data, node.data];
    node.next = node.next.next;

    //replace the data of node to be deleted with its next node and then delete the next node
    //we can not traverse the list as we do not have head pointer
    //we can not directly delete the node given as we would need its previous node
}

function first_non_repeating_integer(list){
    let current = list.head;
    let map = {};
    while(current){
        map[current.data] = map[current.data] ? map[current.data]+1:1;
        current = current.next;
    }
    current = list.head;
    while (current) {
        if(map[current.data] ==1){
            console.log(current.data);
            break;
        }
        current = current.next;
    }
}

function sort_linked_list_which_is_already_sorted_on_absolute_values(list){
    let current = list.head.next;
    let prev = list.head;
    while(current){
        if(current.data < 0){
            prev.next = current.next;
            current.next = list.head;
            list.head = current;
            current = prev.next;
        }
        else{
            prev = current;
            current = current.next;
        }
    }

    console.log(list.toString())
}

function delete_alternate_nodes_from_2nd_node(list){
    let current = list.head.next;
    let prev = list.head;

    while(current && current.next){
        prev.next = current.next;
        prev = current.next;
        current = prev.next;
    }

    console.log(list.toString())
}

function print_alternate_nodes_using_recursion(node){
    if(node == null){
        return;
    }
    else{
        console.log(node.data);
        if(node.next && node.next.next){
            print_alternate_nodes_using_recursion(node.next.next)
        }
    }
}

function reverse_each_word_in_list(list){
    current = list.head;
    while(current){
        let s = current.data;
        let n = "";
        for(let i of s){
            n = i+n;
        }
        current.data = n;
        current = current.next
    }
    console.log(list.toString())
}

function insert_in_sorted_linked_list(list, n){
    list.makeCircular();
    current = list.head;
    while(current){
        console.log(current.data)
        if(n >= current.data && n < current.next.data){
            console.log(n)
            let node = new Node(n);
            node.next = current.next;
            current.next = node;
            break;
        }
        else{
            current = current.next;
        }
    }
    console.log(list.head.next.next)
}


let singleLinkedList = new single_linked_list();
// if(singleLinkedList.isEmpty()){
//     console.log('true');
// }
singleLinkedList.insertAtLast(9);
singleLinkedList.insertAtLast(1);
singleLinkedList.insertAtLast(8);
singleLinkedList.insertAtStart(4);
singleLinkedList.insertAtLast(9);
singleLinkedList.insertAtStart(6);
singleLinkedList.insertAtStart(1);
singleLinkedList.insertAtStart(8);
singleLinkedList.insertAtStart(8);


let tmpLinkedList = new single_linked_list();
tmpLinkedList.insertAtLast(1);
tmpLinkedList.insertAtLast(2);
tmpLinkedList.insertAtLast(2);
tmpLinkedList.insertAtStart(0);
tmpLinkedList.insertAtLast(0);
tmpLinkedList.insertAtStart(1);
tmpLinkedList.insertAtStart(2);
tmpLinkedList.insertAtStart(1);

let stringLinkedList = new single_linked_list();
stringLinkedList.insertAtStart('arpit')
stringLinkedList.insertAtStart('banati')

let sortedLinkedList = new single_linked_list();
sortedLinkedList.insertAtLast(1)
sortedLinkedList.insertAtLast(2)
sortedLinkedList.insertAtLast(3)
sortedLinkedList.insertAtLast(4)
sortedLinkedList.insertAtLast(5)
sortedLinkedList.insertAtLast(6)
console.log(sortedLinkedList.toString())

insert_in_sorted_linked_list(sortedLinkedList, 4)
// reverse_each_word_in_list(stringLinkedList)
// console.log(singleLinkedList.toString());
// midPoint(singleLinkedList);
// singleLinkedList.makeCircular();
// isCircular(singleLinkedList);
// fromLast(singleLinkedList, -5);
// reverse(singleLinkedList);
console.log('hh1',singleLinkedList.toString());
console.log('hh2', tmpLinkedList.toString());
// print_alternate_nodes_using_recursion(singleLinkedList.head)
// sort_list_of_0_1_2_using_new_lists(tmpLinkedList)
// delete_alternate_nodes_from_2nd_node(singleLinkedList)
// sort_linked_list_which_is_already_sorted_on_absolute_values(singleLinkedList)
// first_non_repeating_integer(singleLinkedList)
// delete_node_without_having_head_pointer(singleLinkedList.head.next.next);
// console.log(singleLinkedList.toString())
// rotate_linked_list(singleLinkedList, 3)
// multiply_2_nos_represented_by_lists(singleLinkedList, tmpLinkedList)
// loop_at_kth_pos(singleLinkedList, 3)
// delete_every_node_using_recursion(singleLinkedList)
// list_of_strings_palindrome_or_not(singleLinkedList)
// pairwise_swap_elements(singleLinkedList)
// rotation_count_in_sorted_rotated_list(singleLinkedList)
// middle_node_becomes_head(singleLinkedList)
// modular_node(singleLinkedList, 2)
// remove_duplicate_elements_in_sorted_list(tmpLinkedList)
// sort_list_of_0_1_2(tmpLinkedList)
// lexographic_checking_of_strings(singleLinkedList, tmpLinkedList)
// number_of_times_int_occurs(singleLinkedList, 8);
// merge_2_sorted_list(singleLinkedList, tmpLinkedList)
// swap_2_nodes(tmpLinkedList, 9,6);
// singleLinkedList.makeCircular();
// remove_loop(singleLinkedList);
// add_1(singleLinkedList)
// delete_n_after_m(singleLinkedList, 1, 1);
// even_odd_together(singleLinkedList);
// decimal_equivalent_of_binary_list(singleLinkedList);
// add_2_nos_in_lists(singleLinkedList, tmpLinkedList);

// singleLinkedList.insertAt(4, 99);
// console.log(singleLinkedList.toString());
// console.log(singleLinkedList.indexOf(9))

// singleLinkedList.removeAt(2);

// singleLinkedList.insertAtLast(10);
// console.log(singleLinkedList.getSize());

// singleLinkedList.removeLast();
// console.log(singleLinkedList.getSize());

// console.log(singleLinkedList.head);