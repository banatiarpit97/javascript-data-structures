function knapsack(weights, values, capacity){
    ks = [];
    for(let i=0;i<=weights.length;i++){
        ks[i] = [];
    }

    for(let m=0;m<=weights.length;m++){
        for(let n=0;n<=capacity;n++){
            if(m==0||n==0){
                ks[m][n] = 0;
            }
            else if(weights[m-1] <= n){
               a = values[m-1] + ks[m-1][n-weights[m-1]];
               b = ks[m-1][n];
               ks[m][n] = (a>=b)?a:b;
            }
            else{
                ks[m][n] = ks[m - 1][n];                
            }
        }
    }
    findValues(ks, weights, values, capacity);
    return ks[weights.length][capacity];
    
}

function findValues(ks, weights, values, capacity){
    let k = weights.length;
    let l = capacity;
    while(k > 0 && l > 0){
        if(ks[k][l] !== ks[k-1][l]){
            console.log('item',k, 'with weight', weights[k-1], 'and value', values[k-1],'is part of solution');
            k--;
            l = l-ks[k][l];
        }
        else{
            k--;
        }
    }
}

a = knapsack([2,3,4], [3,4,5], 5);
console.log(a)