var a = [2,4,1];

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

function preorder(){
  s = new stack();
  top = Number.NEGATIVE_INFINITY;
  var temp;

  for(elem of a){
      if(elem < top){
          console.log('false');
          return;
      }

      while(s.peek() < elem){
          temp = s.pop();
      }
      top = temp;
      s.push(elem);
  }

  console.log('true')
}

preorder();