var a = 'aa';
var k = 1;

function substr(){
    let total=0;
    for(let i=0;i<=a.length-k;i++){
        let j = i; map = {}; str = ''; distinct = 0;
        while(j<a.length){
          if(map[a[j]] == 1){
              str +=a[j];
              j++;
              if (distinct == k) {
                  console.log(str);
                  total++;
              }
          }
          else{
              if(distinct<k){
                    str += a[j];                  
                    map[a[j]] = 1;
                    distinct++;j++;
                    if(distinct == k){
                        console.log(str);
                        total++;     
                    }
              }
              else{
                  console.log(str);
                  total++;
                  break;
              }     
          }
      }
    }
    

    console.log(total);
}

substr();