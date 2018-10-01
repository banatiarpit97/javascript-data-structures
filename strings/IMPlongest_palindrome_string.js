var str = 'forgeeksskeegfor';

function palindrome(){
    let len = str.length;
    let res = [];
    let start = 0;
    let max = 1;
    let sub = '';

    for(let i=0;i<len;i++){
        res.push([]);
    }

    for(let i=0;i<len;++i){
        res[i][i] = 1;
    }

    for(let i=0;i<len-1;++i){
        if(str[i] == str[i+1]){
            res[i][i+1] = 1;
            start = i;
            max = 2;
        }
    }

    for(let k=3;k<=len;++k){          //length of substring to be seen at present
        for(let i=0;i<len-k+1;++i){   
            j = i+k-1;              //calculate end index of substring
 
            if(str[i] == str[j] && res[i+1][j-1] == 1){       //if start and end index are same and values between them are also same
                res[i][j] = 1;

                if(k>max){
                    max = k;
                    start = i;
                }
            }
        }
    }

    console.log(res);

    for(let i=start;i<=max;++i){
        sub += str[i];
    }
    console.log(sub);
}


palindrome();