a = [10,22,9,33,21,,50,41,60];
let map = {};
a.forEach(e => {
    map[e] = 1;
});

for(let i=1;i<a.length;i++){
    for(let j=0;j<i;j++){
        if(a[j] < a[i]){
            map[a[i]] = ((map[a[j]]+1)>map[a[i]])?(map[a[j]]+1): map[a[i]];
        }
    }
}
console.log(map)
