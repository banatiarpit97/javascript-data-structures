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
  console.log(this.items.reverse());
 }
 front(){
  return this.items[this.items.length - 1];
 }
 isEmpty(){
  return this.items.length == 0?0:1;
 }
 size(){
  console.log(this.items.length);
 } 
} 

q1 = new queue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(9);
q2 = new queue();
q2.enqueue(4);
q2.enqueue(5);
q2.enqueue(10);

weave(q1, q2);
function weave(q1, q2){
 q3 = new queue();
 while(q1.isEmpty() || q2.isEmpty()){
   if(q1.front()){
     q3.enqueue(q1.dequeue());
   }
   if(q2.front()){
     q3.enqueue(q2.dequeue());
   }
 }
 console.log(q3.print());
}
