// floor of size -> n*m
// tile of size -> 1*m
// count number of ways to tile the floor in which a tile can be placed
// horizontally and vertically

// count(i) = {
//     1  if i<m
//     2  if i==m
//     count[i - 1] + count[i - m]  if i>m
// }
function tiling(n, m){
    let count = new Array(n+1);

    count[0] = 0;
    for(let i=1;i<=n;i++){
        if(i>m){
            count[i] = count[i-1]+count[i-m];
        }
        else if(i<m){
            count[i] = 1;
        }
        else{
            count[i] = 2;
        }
    }

    console.log(count[n])
}

tiling(7,4)


// to tile a floor of size 2*n and tile of 2*1, number of ways are fibonacci(n)