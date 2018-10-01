var CryptoJS = require("crypto-js");

let count = 0;
let totalSum = 0;
let hashes = [];

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


class Node {
    constructor(data, parent, password) {
        this.timestamp = new Date();
        this.nodeNumber = ++count;
        this.nodeId = randomNodeid();
        this.referenceNodeId = parent;
        this.childReferenceNodeId = [];
        this.genesisReferenceNodeId = tree.genesis;
        for(let d in data){
            data[d] = encrypt(data[d], password);
        }
        this.hashValue = generateHashKey({
            timestamp: this.timestamp,
            data: this.data,
            nodeNumber: this.nodeNumber,
            nodeId: this.nodeId,
            referenceNodeId: this.referenceNodeId,
            childReferenceNodeId: this.childReferenceNodeId,
            genesisReferenceNodeId: this.genesisReferenceNodeId
        });
    }
}

class markerNode{
    constructor(){
        this.data = "marker";
    }
}

class Tree {
    constructor() {
        this.genesis = null;
    }

    addRecord(data, password){
        totalSum += data.value;
        let parentCount = 0;
        let marker = new markerNode();
        data.value = data.value.toFixed(2);
        let childQueue = new queue();
        let parentQueue = new queue();
        if(!this.genesis){
            this.genesis = new Node(data, null, password);
            this.genesis.genesisReferenceNodeId = this.genesis;
        }
        else{
            if (totalSum > this.genesis.value) {
                console.log("node can not be added because sum of all nodes is greater than the sum of genesis node")
            }
            for(let child of this.genesis.childReferenceNodeId){
                childQueue.enqueue(child);
            }
            parentQueue.enqueue(this.genesis);
            childQueue.enqueue(marker);
            while (!childQueue.isEmpty()) {
                let cur = childQueue.dequeue(); 
                if(cur == marker){
                    let parent = parentQueue.dequeue();
                    if((parentCount+data.value) <= parent.data.value){
                        parent.childReferenceNodeId.push(new Node(data, parent, password))
                        return;
                    }
                    else{
                        totalCount += parentCount;
                        parentCount = 0;
                        return;
                    }
                }
                parentCount += cur.data.value;
                for (let child of cur.children) {
                    childQueue.enqueue(child);
                }
                childQueue.enqueue(marker);
                parentQueue.enqueue(cur)
            }
        }

    }

}

function randomNodeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function djb2HashCode(key) {
        let code = 0;
        for (let i = 0; i < key.length; i++) {
            code += key.charCodeAt(i);
        }
        return code % 37;
    }

function generateHashKey(key) {
    let hash = "";
    for(let k in key){
        if(typeof(k) == "object"){
            for(let j in k){
                hash += k[j]; 
            }
        }
        else{
            hash += k;
        }

    }
        let code = djb2HashCode(hash);
        if (hashes[code] == undefined) {
            hashes[code] = 1;
            return code;
        }
        else {
            while (hashes[++code] != undefined) {
                continue;
            }
            hashes[code] = 1;
            return code;
        }
    }

function getHashKey(key) {
        let code = djb2HashCode(key);
        while (this.items[code].key != key) {
            code++;
        }
        return this.items[code];
    }

function encrypt(message, password){
    return CryptoJS.AES.encrypt(message, password);
}

function decrypt(ciphertext, password) {
    var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), password);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    consol.log(plaintext);
}

let tree = new Tree();
tree.addRecord({value:50})
tree.addRecord({ value: 20 })

console.log(tree.genesis)
