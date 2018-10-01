// -------------------------------------1st method-------------------------------


// var person = {
//     firstname :'',
//     lastname :'',

//     get fullname(){
//         return this.firstname + ' ' + this.lastname;
//     },

//     set fullname(name){
//       this.firstname = name.split(" ")[0];
//         this.lastname = name.split(" ")[1];      
//     }
// }

// console.log(person.fullname);
// person.fullname = "arpit banati";
// console.log(person.fullname);


// -------------------------------------2nd method-------------------------------

var person = {
    firstname : 'a',
    lastname : 'b'
};

Object.defineProperty(person, 'fullname', {
    get: function(){
        return this.firstname + ' ' + this.lastname;
    },

    set: function(name){
        this.firstname = name.split(" ")[0];
        this.lastname = name.split(" ")[1];      
    }

});

Object.defineProperty(person, 'age', {
    value:21,                                         //value of age
    enumerable:false,                                 //will not appear when we are iterating through the object using for in loop
    writable:false                                    //makes this property read only
})


person.fullname = 'arpit banati';
person.age = 33;      //does not work as writable is false for age property
console.log(person.fullname)
console.log(person.age)
for(let i in person){
    console.log(person[i]);       // does not show age property as enumerable is false for it
}