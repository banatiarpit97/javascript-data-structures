function queue (){
 this.items = [];
 this.enqueue = (item) => {
   this.items.unshift(item);
 }
 this.pop = () => {
   console.log(this.items.pop());
 }
 this.print = () => {
  console.log(this.items.reverse());
 }
 this.front = () => {
  console.log(this.items[this.items.length - 1]);
 }
 this.isEmpty = () => {
  console.log(this.items.length == 0?'empty':'not empty');
 }
 this.size = () => {
  console.log(this.items.length);
 } 
}

