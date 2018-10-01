class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class single_linked_list {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtLast(key, value) {
        let node = new Node(key, value);
        if (!this.head) {
            this.head = node;
            this.length++;
            return;
        }
        let current = this.head;
        while (current.next) {          //to reach the last node
            current = current.next;
        }
        current.next = node;
        this.length++;
    }
}

class hash_table {
    constructor() {
        this.items = [];
    }

    loseHashCode(key) {
        let code = 0;
        for (let i=0;i<key.length;i++) {
            code += key.charCodeAt(i);
        }
        return code % 37;
    }

    put(key, value) {
        let code = this.loseHashCode(key);
        let linkedlist;
        if(this.items[code] == undefined){
            this.items[code] = new single_linked_list();          
        }
        this.items[code].insertAtLast(key, value);
    }

    get(key) {
        let code = this.loseHashCode(key);
        if(!this.items[code]){
            return false;
        }
        else{
            let current = this.items[code].head;
            while(current && current.key != key){
                current = current.next;
            }

            if(current){
                return current.value;
            }
            else{
                return false;
            }
        }
    }

    remove(key) {
        this.items[this.loseHashCode(key)] = undefined;
    }

    print() {
        for (let i of this.items) {
            if (i != undefined) {
                console.log(i)
            }
        }
    }
}

var ht = new hash_table();
ht.put('Jamie', 'a@b.in');
ht.put('Sue', 'b@b.in');
ht.put('arpit', 'c@b.in');
// ht.print();
console.log(ht.get('Sue'));
console.log(ht.items);