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



function greater() {
    stac = new stack();
    stac.push(1)
    stac.push(99)
    stac.push(3)
    stac.push(78)
    stac.push(5)
    stac.push(6)

    console.log(stac);
    max = -1;
    greater = [];
    i = stac.size()-1;
    while(!stac.isEmpty()){
        temp = stac.pop();
        if(temp<)
        greater[i] = max;
        if(temp > max){
            max = temp;
        }
        i--;
    }

    console.log(greater)
}

greater();
