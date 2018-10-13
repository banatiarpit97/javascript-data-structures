//Given n friends, each one can remain single or 
//can be paired up with some other friend. 
// Each friend can be paired only once. Find out the total number 
// of ways in which friends can remain single or can be paired up.

function count(n){
    let dp = new Array(n+1);

    for(let i=0;i<=n;i++){
        if(i<=2){
            dp[i] = i;
        }
        else{
            dp[i] = dp[i-1]+(i-1)*dp[n-2];
            //if nth person remains single, we find for (n-1) -> First term
            //if nth person pairs, he has n-1 options and then we find for (n-2) -> Second term
            //adding both term gives soluntion for n
        }
    }
    
    console.log(dp[n]);
}

count(3)