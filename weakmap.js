var map = new WeakMap();

var ob1 = {'name':'arpit'};
var ob2 = { 'name': 'ram' };
var ob3 = { 'name': 'sham' };

map.set(ob1, 'a@b.in');
map.set(ob2, 'r@b.in');
map.set(ob3, 's@b.in');

console.log(map.has(ob1));
console.log(map.delete(ob1));
console.log(map.get(ob1));