// ______________________________________SET CLASS________________________________________


// class set{
//     constructor(){
//       this.items = {};
//     }

//     has(item){
//         return this.items[item];
//     }
//     add(item){
//         if(!this.has(item)){
//             this.items[item] = item;
//         }
//     }
//     delete(item){
//         delete this.items[item];
//     }
//    clear(){
//        this.items = {};
//    }
//     size(){
//         return Object.keys(this.items).length;
//     }
//     values(){
//         let values = [];
//         let keys = Object.keys(this.items);
//         for(let i of keys){
//             values.push(this.items[i]);
//         }
//         return values;        
//     }

//     union(otherSet){
//         let resultSet = new set();
//         let values1 = this.values();
//         let values2 = otherSet.values();        
//         for(let i of values1){
//             resultSet.add(i);
//         }
//         for (let i of values2) {
//             resultSet.add(i);
//         }

//         return resultSet;
//     }

//     intersection(otherSet){
//         let resultSet = new set();
//         let values1 = this.values();
//         for (let i of values1) {
//             if(otherSet.has(i)){
//                 resultSet.add(i);
//             }
//         }

//         return resultSet;
//     }

//     intersection(otherSet) {
//         let resultSet = new set();
//         let values1 = this.values();
//         for (let i of values1) {
//             if (!otherSet.has(i)) {
//                 resultSet.add(i);
//             }
//         }

//         return resultSet;
//     }

//     subset(otherSet){
//         let resultSet = new set();
//         let values1 = this.values();
//         for (let i of values1) {
//             if (!otherSet.has(i)) {
//                 return false;
//             }
//         }

//         return true;
//     }
// }

// s = new set();
// other = new set();
// other.add(1)
// other.add(2)
// other.add(3)
// other.add(4)
// s.add(3);
// s.add(6);
// s.add(2);
// s.add(1);
// console.log(s.size());
// console.log(s.values())
// s.delete(5)
// console.log(s.has(5));
// console.log(s.union(other));
// console.log(s.intersection(other))
// console.log(s.subset(other));



// ______________________________________INBUILT SET CLASS________________________________________

var set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.delete(2)
console.log(set.has(2))
// set.clear();
console.log(set.size);
console.log(set.values());