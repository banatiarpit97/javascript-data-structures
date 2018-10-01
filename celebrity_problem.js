var arr = [
    [0,0,1,0],
    [0,0,1,0],
    [0,0,0,0],
    [0,0,1,0]
];

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

function celebrity(){
  s = new stack();
  s.push(0);
  s.push(1);
  s.push(2);
  s.push(3);

  while(s.size()>1){
      tmp1 = s.pop();
      tmp2 = s.pop();

      if(arr[tmp1][tmp2]){
          s.push(tmp2);
      }
      else if (arr[tmp2][tmp1]){
          s.push(tmp1);
      }
  }

  console.log(s.pop())
  
}

celebrity();