var a = [4,7,3,6,7];

function triangle(){
    result = [];

    for(let i=0;i<a.length-1;i++){
        result.push(new Array(a.length));
    }
    result.push(a);

    for(let i=a.length-2;i>=0;i--){
        for(j=0;j<a.length;j++){
           if(result[i+1][j] && result[i+1][j+1]){
               result[i][j] = result[i + 1][j] + result[i + 1][j + 1];
           }
        }
    }

    console.log(result);
}

triangle();