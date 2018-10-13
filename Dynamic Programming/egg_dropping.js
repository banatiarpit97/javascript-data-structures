// n -> eggs
// k -> floor

function eggDrop(n, k){
    eggFloor = [];
    for(let i=0;i<n+1;i++){
        eggFloor.push(new Array(k+1));
    }

    for(let i=1;i<=n;i++){    //we need 1 trial for 1 floor and 0 trial for 0 floor
        eggFloor[i][1] = 1;
        eggFloor[i][0] = 0;
    }

    for(let j=1;j<=k;j++){    //j trials needed if only 1 egg is present
        eggFloor[1][j] = j;
    }

    for(let i=2;i<=n;i++){
        for(let j=2;j<=k;j++){
            eggFloor[i][j] = Number.POSITIVE_INFINITY;
            for(x=1;x<=j;x++){
                res = 1 + Math.max(eggFloor[i - 1][x - 1], eggFloor[i][j-x]);
                if(res < eggFloor[i][j]){
                    eggFloor[i][j] = res;
                }
            }
        }
    }
    console.log(eggFloor[n][k])

}

eggDrop(2,10)