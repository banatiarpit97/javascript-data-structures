var coins = [1,5,10,25];
var amount = 36;

function min_coin(coins, amount){
    bubble(coins);
    console.log(coins)
    final = {};
    value = 0;
    for(let i=coins.length-1;i>=0;i--){
        console.log(coins[i])
       while(coins[i] <= amount ){
           value += coins[i];
           amount -= coins[i];
           final[coins[i]] = final[coins[i]]?final[coins[i]]+1:1;
       }
    }
    console.log(value, final);
}

min_coin(coins, amount);


function bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

