class element{
    constructor(key, value){
        this.key = key;
        this.value = value;
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
        let elem = new element(key, value);
        let code = this.loseHashCode(key);
        console.log(code)
        if(this.items[code] == undefined){
            this.items[code] = elem;            
        }
        else{
            while(this.items[++code] != undefined){
                continue;
            }
            this.items[code] = elem;
        }
    }

    get(key) {
        let code = this.loseHashCode(key);
        while(this.items[code].key != key){
            code++;
        }
        return this.items[code];
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
// ht.print();
console.log(ht.get('Sue'));
console.log(ht.items);