class stack{
  constructor(){
    this.items = [];
  }
  push(item){
    this.items.push(item);
  }
  pop(){
    return this.items.pop();
  }
  print(){
    console.log(this.items.reverse());
  }
  peek(){
    console.log(this.items[this.items.length - 1]);
  }
  isEmpty(){
    return this.items.length == 0?'empty':'not empty';
  }
  size(){
    console.log(this.items.length);
  } 
} 

function baseConverter(decimal, base){
var converted = '';
var digits = '0123456789ABCDEF'
  let rems = new stack();
  while(decimal > 0){
    rem = Math.floor(decimal % base);
    converted = digits[rem]+converted;
    decimal = Math.floor(decimal/base);
  }

  console.log(converted);
}

baseConverter(205, 16)

