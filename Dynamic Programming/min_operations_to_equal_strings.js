//there are 3 operations - add, delete, modify
//how many operations need to be performed on 2nd string to match the forst string

//DP table same as longest_common_subsequence
//if char matches, copy the previous diagonal value
//else add 1 to the minimum value of its left, top, prev diagonal

//bottom right cell is the answer

let arr = [];
let str1 = "march";
let str2 = "cart";
let temp = [];
let res = '';
for (let i = 0; i <= str1.length; i++) {
    temp.push(i)
}
arr.push(temp);
for (let i in str2) {
    let n = new Array((str1.length + 1));
    n[0] = Number(i)+1;
    arr.push(n)
}

for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str1.length; j++) {
        if (str2[i] == str1[j]) {
            arr[i + 1][j + 1] = arr[i][j];
        }
        else {
            arr[i + 1][j + 1] = Number(min(arr[i][j+1], arr[i+1][j], arr[i][j]))+1;
        }
    }
}

function min(a, b, c){
    let t = a < b ? (a < c ? a : c) : (b < c ? b : c);
    return a<b?(a<c?a:c):(b<c?b:c);
}

console.log(arr[str2.length][str1.length])