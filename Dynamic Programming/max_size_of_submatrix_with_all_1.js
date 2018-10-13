// Let the given binary matrix be M[R][C].
//The idea of the algorithm is to construct an auxiliary size matrix
//S[][] in which each entry S[i][j] represents size of 
//the square sub - matrix with all 1s including M[i][j] 
//where M[i][j] is the rightmost and bottommost entry in sub - matrix.

//If M[i][j] is 1 then
    //S[i][j] = min(S[i][j - 1], S[i - 1][j], S[i - 1][j - 1]) + 1
//Else If M[i][j] is 0*/
    //S[i][j] = 0

function size(arr){
    let result = [];
    let max = 0;
    let max_i, max_j;
    for(let i=0;i<arr.length;i++){
        result.push(new Array(arr[0].length));
    }

    for(let i=0;i<arr[0].length;i++){
        result[0][i] = arr[0][i]
    }
    for (let i = 0; i < arr.length; i++) {
        result[i][0] = arr[i][0];
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[0].length; j++) {
            if(arr[i][j] == 1){
                result[i][j] = Math.min(result[i - 1][j], result[i][j - 1], result[i - 1][j-1])+1;
                if (result[i][j] > max){
                    max = result[i][j];  //get max value from result arr
                    max_i = i;  //get ith index of max value
                    max_j = j;  //get jth index of max value
                }
            }
            else{
                result[i][j] = 0;
            }
        }
    }
    
    for(let i=max_i;i>max_i-max;i--){   //print arr with consecutive 1
        for (let j = max_j; j > max_j - max; j--) {
            console.log(1)
        }
    }
}

size([
    [0,1,1,0,1],
    [1,1,0,1,0],
    [0,1,1,1,0],
    [1,1,1,1,0],
    [1,1,1,1,1],
    [0,0,0,0,0]
])