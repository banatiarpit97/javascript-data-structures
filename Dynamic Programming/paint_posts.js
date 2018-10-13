//ways to paint n posts with k colors

function paint(n, k){
    let dp = new Array(n+1);
    dp[1] = k; // There are k ways to color first post

    let same = 0, diff = k; // There are 0 ways for single post to paint with same color and k ways to 
    // paint with different color 

    for(let i=2;i<=n;i++){
        same = diff;   // Current same is same as previous diff 
        diff = dp[i - 1] * (k - 1);  // We always have k-1 choices for next post
        dp[i] = same + diff;   // Total choices is same + diff 
    }

    console.log(dp[n]);
}

paint(3, 2)