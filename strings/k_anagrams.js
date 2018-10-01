var first = 'arpit';
var second = 'iaprk';
k = 1;

function anagrams() {
    var firstmap = {};
    var secondmap = {};
    if (first.length != second.length) {
        console.log('False');
        return;
    }

    for (let i of first) {
        firstmap[i] = firstmap[i] ? firstmap[i] + 1 : 1;
    }
    for (let i of second) {
        secondmap[i] = secondmap[i] ? secondmap[i] + 1 : 1;
    }
    
    count = 0;
    for(let i in firstmap){
        if(secondmap[i]){
                count += Math.abs(secondmap[i] - firstmap[i]);
        }
        else{
            count += firstmap[i];
        }
    }
 
    if(count > k){
        console.log('false');
    }
    else{
        console.log('true');
    }
}    

anagrams();