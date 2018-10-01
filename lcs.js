function lcs(word1, word2){
    lc = [];
    sol = [];
    for(let i=0;i<=word1.length;i++){
        lc[i] = [];
        sol[i] = [];
        for(let j=0;j<=word2.length;j++){
          lc[i][j] = 0;
          sol[i][j] = 0;
        }
    }
    console.log(lc)

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if(word1[i-1] == word2[j-1]){
                lc[i][j] = lc[i-1][j-1] + 1;
                sol[i][j] = 'diagonal';
            }
            else{
                a = lc[i-1][j];
                b = lc[i][j-1];
                lc[i][j] = (a>=b)?a:b;
                sol[i][j] = (lc[i][j] == a)?'top':'left';                
            }
        }
    }
    print(word1, word2, sol)
    return lc[word1.length][word2.length];
}

function print(word1, word2, sol){
   let a = word1.length;
   let b = word2.length;
   answer = '';

   let x = sol[a][b];
   while(x !== 0){
       if(x == 'diagonal'){
          answer = word1[a-1] + answer;
          a--;
          b--;
       }
       else if(x == 'left'){
           b--;
       }
       else if(x == 'top'){
          a--;
       }

       x = sol[a][b];
   }

   console.log('answer is', answer)
}
var length = lcs('acbacd', 'abcadf');
console.log('length is',length)