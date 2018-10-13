// arr -> list of possible scores that can earn
// score -> score we need to achieve from all possible scores

function count(arr, score){
    let dp = new Array(score+1);
    dp[0] = 1;   //0 score can be reached in 1 way
    for(let i=1;i<=score;i++){   //initialze array with 0 except 1st elem
        dp[i] = 0;
    }

    for(let i=0;i<arr.length;i++){   //loop through the array of possible scores
        for(let j=arr[i];j<=score;j++){ 
//calculate number of ways for each score starting lowest score 
//that can achieved till the score we want to achieve
            dp[j] += dp[j-arr[i]];
        }
    }
    console.log(dp)
}

count([3,5,10], 13)