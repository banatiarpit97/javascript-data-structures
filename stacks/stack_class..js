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
  console.log(this.items);
 }
 peek(){
  return this.items[this.items.length - 1];
 }
 isEmpty(){
  return this.items.length == 0?1:0;
 }
 size(){
  return this.items.length;
 } 
} 

