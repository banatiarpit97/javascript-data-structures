var a = 'geeksforgeeks';
var k = 2;

function subsequence() {
    map = {};
    str = '';
    for (let i of a) {
        map[i] = map[i] ? ++map[i] : 1;
    }
    for (let i of a) {
        if(map[i] >= k){
            str += i;
        }
    }
    console.log(str)
}

subsequence();