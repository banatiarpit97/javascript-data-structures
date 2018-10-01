class hash_table{
    constructor(){
        this.items = [];
    }

    loseHashCode(key){
        let code = 0;
        for (let i = 0; i < key.length; i++){
            code += key.charCodeAt(i);
        }
        return code%37;
    }

    djb2HashCode(key){
        let code = 5381;
        for (let i = 0; i < key.length; i++) {
            code = code*33 + key.charCodeAt(i);
        }

        return code%1013;
    }

    put(key, value){
        let code  = this.loseHashCode(key);
        this.items[code] = value;
    }

    get(key){
        return this.items[this.loseHashCode(key)];        
    }

    remove(key){
        this.items[this.loseHashCode(key)] = undefined;
    }

    print(){
        for(let i of this.items){
            if(i != undefined){
                console.log(i, this.items.indexOf(i))
            }
        }
    }
}

var ht = new hash_table();
ht.put('arpit', 'a@b.in');
ht.put('banati', 'b@b.in');
ht.print();
console.log(ht.items);