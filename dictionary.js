// -------------------------------------------DICTIONARY CLASS-----------------------------------

// class dictionary{
//     constructor(){
//         this.items = {};
//     }

//     has(key){
//         return this.items[key]?true:false;
//     }

//     set(key, value){
//         this.items[key] = value;
//     }

//     delete(key){
//         if(this.has(key)){
//             delete this.items[key];            
//         }
//     }

//     get(key){
//         return this.has(key) ? this.items[key]: undefined;
//     }

//     values(){
//         let values = [];
//         let keys = Object.keys(this.items);
//         for(let i of keys){
//             values.push(this.items[i]);
//         }
//         return values; 
//     }

//     clear(){
//         this.items = {};
//     }

//     keys(){
//         return Object.keys(this.items);
//     }

//     getItems(){
//         return this.items;
//     }
// }

// var dt = new dictionary();
// dt.set('name', 'arpit');
// dt.set('stream', 'it');
// dt.delete('name')
// console.log(dt.get('name'))
// dt.clear();
// console.log(dt.keys());
// console.log(dt.values())
// console.log(dt.has('name'));
// console.log(dt.getItems());



// -------------------------------------------INBUILT MAP CLASS-----------------------------------

// var map = new Map();
// map.set('name', 'arpit');
// map.set('stream', 'it');

// console.log(map.size);
// console.log(map.has('name'));
// console.log(map.delete('name'));
// console.log(map.get('name'));
// console.log(map.keys());
// console.log(map.clear())
// console.log(map.values());