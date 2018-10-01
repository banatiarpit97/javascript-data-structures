class queue{
 constructor(){
   this.items = [];
  }
 enqueue(item){
   this.items.unshift(item);
 }
 dequeue(){
   return this.items.pop();
 }
 print(){
  console.log(this.items);
 }
 front(){
  return this.items[this.items.length - 1];
 }
 isEmpty(){
  return this.items.length == 0?0:1;
 }
 size(){
  return this.items.length;
 } 
} 

 
