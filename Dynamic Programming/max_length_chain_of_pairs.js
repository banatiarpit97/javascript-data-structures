//You are given n pairs of numbers. 
//In every pair, the first number is always smaller than the second.
//A pair (c, d) can follow another pair (a, b) if b < c.

function pair(arr){

    //arr is sorted in increasing order 
    // according the first values in pairs.
    arr.sort((a, b) => {return a.first - b.first});

    let dp = [];
    for(let i=0;i<arr.length;i++){  //initialize with 1 as every element is chain of length 1
        dp[i] = 1;
    }
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i].first > arr[j].second && dp[i]<dp[j]+1){
                dp[i] = dp[j] + 1;
            }
        }
    }

    console.log(dp[arr.length-1])
}

pair([ 
    { first: 27, second: 40 },
    { first: 5, second: 24 },
    { first: 50, second: 60 },
    { first: 15, second: 25 },
    ])