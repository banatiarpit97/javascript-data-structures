function lps(str){
    let dp = [];
    let start = null;
    let maxLength = null;
    let result = "";
    for(let i=0;i<str.length;i++){
        dp.push(new Array(str.length))
    }

    for(let i=0;i<str.length;i++){
        dp[i][i] = true;   //every letter is palindrome in itself
    }

    for(let i=0;i<str.length-1;i++){
        if(str[i] == str[i+1]){
            dp[i][i+1] = true;
            start = i;
            maxLength = 2;
        }                     //considering words of 2 letters at a time
        else{       
            dp[i][i + 1] = false;
        }
    }

    for(let i=3;i<=str.length;++i){   //considering words of 3 letters or more
        for(let j=0;j<str.length-i+1;++j){   //start from 1st elem
            let k = i+j-1;          //go till i letters after start
            if((dp[j+1][k-1]) && (str[j] == str[k])){
                dp[j][k] = true;  //if 1st and last elem are same, then we go 1 level inside and check for 2nd and 2nd last elem and so on
                if(i>maxLength){
                    maxLength = i;
                    start = j;
                }
            }
            else{
                dp[j][k] = false;
            }
        }
    }
    
    for(let i=start;i<(start+maxLength);i++){
        result += str[i];
    }
    console.log(result)
}

lps("geekeg")