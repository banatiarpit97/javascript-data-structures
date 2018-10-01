let arr = [];
let str1 = "aggtab";
let str2 = "gxtxayb";
let temp = [];
let res = '';
for(let i=0;i<=str1.length;i++){
    temp.push(0)
}
arr.push(temp);
for(let i in str2){
    let n = new Array((str1.length+1));
    n[0] = 0;
    arr.push(n)
}

for(let i=0;i<str2.length;i++){
    for(let j=0;j<str1.length;j++){
        if(str2[i] == str1[j]){
            arr[i + 1][j + 1] = arr[i][j]+1;
        }
        else{
            arr[i + 1][j + 1] = (arr[i][j + 1] > arr[i + 1][j]) ? arr[i][j + 1] : arr[i + 1][j];
        }
    }
}
console.log(arr)

for (let i = str2.length;i>1;){
    for (let j = str1.length; j > 1;){
        let max = (arr[i-1][j] > arr[i][j-1]) ? arr[i-1][j] : arr[i][j-1];
        if(arr[i][j] > max){
            res = str2[i-1]+res;
            i--;j--;
        }
        else{
            arr[i][j-1] > arr[i-1][j] ?j--:i--;
        }
    }
}
console.log(res)