function coins(coins, v){
    let dp = new Array(v+1);
    dp[0] = 0;    //0 coins needed for 0 value

    for(let i=1;i<=v;i++){
        dp[i] = Number.POSITIVE_INFINITY;
    }

    for(let i=1;i<=v;i++){       //build table for each value from 1 to v
        for(j=0;j<coins.length;j++){  //loop over all the coins
            if(coins[j] <= i){   //check if coin value is less than value to be made
                res = dp[i-coins[j]];   //check how many coins needed to build value i-coin value
                if((res != Number.POSITIVE_INFINITY) && ((res+1) < dp[i])){   //if it is less than current value
                    dp[i] = res+1;    
                }
            }
        }
    }
    console.log(dp[v]);
}

coins([9,6,5,1], 11)