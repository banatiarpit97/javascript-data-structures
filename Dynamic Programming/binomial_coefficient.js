//find C(n,k) -> select k items out of n
    //also coeff of x^k in expansion of (1+x)^n

function create2d(n, k){
    let arr = [];
    for (let i = 0; i <= n; i++) {
        let temp = new Array(k + 1);
        arr.push(temp);
    }
    console.log('res', binomial(n,k,arr)) 
}

function binomial(n, k, arr){
    if (k == 0 || k==n) {
        arr[n][k] = 1;
        return 1;
    }
    else{
        if ((arr[n - 1][k - 1] || arr[n - 1][k - 1] == 0) && (arr[n - 1][k] || arr[n - 1][k] == 0)) {
                arr[n][k] = arr[n - 1][k-1] + arr[n - 1][k];
            }
        return (((arr[n - 1][k - 1] || arr[n - 1][k - 1] == 0 || binomial(n - 1, k - 1, arr)) + (arr[n - 1][k] || arr[n - 1][k] == 0||binomial(n - 1,k, arr))));
    }
}

create2d(4,2);