function lps(str){
    let arr = [];
    for (let i = 0; i < str.length;i++){
        arr.push(new Array(str.length));
    }
    for(let i=0;i<str.length;i++){  //string of length 1 are palindrome pf length 1
        arr[i][i] = 1;
    }

    for(let i=2;i<=str.length;i++){
        for(let j=0;j<str.length-i+1;j++){
            k=j+i-1;
            if ((str[j] == str[k]) && (i == 2)) {  //If there are only 2 characters and both are same
                arr[j][k] = 2;
            }
            else if (str[j] == str[k]) {      //If there are more than two characters, and first and last characters are same
                arr[j][k] = arr[j+1][k-1] + 2;
            }
            else {    //IF first and last characters are not same
                arr[j][k] = Math.max(arr[j][k-1], arr[j+1][k]);
            }
        }
    }
    console.log(arr[0][str.length-1])
}

lps("babcbab")